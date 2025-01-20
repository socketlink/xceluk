import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createQueryString = (
  params: Record<string, string>,
  searchParams: URLSearchParams,
) => {
  const updatedParams = new URLSearchParams(searchParams);
  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      updatedParams.set(name, value);
    } else {
      updatedParams.delete(name);
    }
  });
  return updatedParams.toString();
};
