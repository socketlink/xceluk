import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-foreground text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="font-semibold text-xl mb-2">
              XcelTutors
            </Link>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin size={14} />
              <address className="not-italic">
                2nd Floor College House, 17 King Edwards Road, Ruislip, HA4 7AE
              </address>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/find-a-tutor">Find a Tutor</FooterLink>
            <FooterLink href="/become-a-tutor">Become a Tutor</FooterLink>
            <FooterLink href="/terms-and-conditions">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <a
              href="mailto:support@xceltutors.com"
              className="hover:text-primary-foreground/80 transition-colors flex items-center"
            >
              <Mail size={14} className="mr-1" />
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          &copy; {new Date().getFullYear()} XcelTutors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:text-primary-foreground/80 transition-colors"
    >
      {children}
    </Link>
  );
}
