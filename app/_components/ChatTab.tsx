"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function ChatTab() {
  // Mock data for notification count
  const notificationCount = 3;

  return (
    <Link
      href="/chat"
      className="text-primary-foreground hover:text-primary-foreground/80 transition-colors relative flex items-center"
    >
      <span>Chat</span>
      {notificationCount > 0 && (
        <Badge
          variant="destructive"
          className="ml-1 px-1.5 py-0.5 text-xs min-w-[1.25rem] h-5 flex items-center justify-center"
        >
          {notificationCount}
        </Badge>
      )}
    </Link>
  );
}
