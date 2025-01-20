FROM node:22.11.0-alpine AS base
WORKDIR /app

# Install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate

# Dependencies stage
FROM base AS deps
# Install required packages for node-gyp and other native dependencies
RUN apk add --no-cache libc6-compat
COPY package.json pnpm-lock.yaml ./
# Install ALL dependencies (including devDependencies)
RUN pnpm install --frozen-lockfile

# Builder stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Build the application
RUN pnpx convex deploy --cmd-url-env-var-name SITE_URL --cmd 'pnpm run build'

# Runner stage
FROM base AS runner
# [*] Ask holy how to add in jemalloc here 
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create system user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set correct permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# [*] Eventually start using this pm2 because holy said you can track it using grafana.
CMD ["node", "server.js"]