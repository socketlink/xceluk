"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ChatTab } from "./ChatTab";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">XcelTutors</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/find-a-tutor">Find a Tutor</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <ChatTab />
          </div>
          <div className="hidden md:flex space-x-2">
            <Button
              variant="ghost"
              className="text-primary-foreground hover:text-primary-foreground/80"
              asChild
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-primary-foreground/10 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <NavLink href="/find-a-tutor">Find a Tutor</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <ChatTab />
            <NavLink href="/sign-in">Sign In</NavLink>
            <NavLink href="/sign-up">Sign Up</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
    >
      {children}
    </Link>
  );
}
