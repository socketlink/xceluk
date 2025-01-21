"use client";

import { useState, useEffect } from "react";
import { ConversationList } from "./Conversations/ConversationList";
import { ChatWindow } from "./ChatWindow";
import { cn } from "@/lib/utils";

export function ChatLayout() {
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleConversationSelect = (id: string) => {
    setSelectedConversation(id);
  };

  const handleBack = () => {
    setSelectedConversation(null);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-background rounded-lg shadow-lg overflow-hidden">
      <div
        className={cn(
          "w-full md:w-80 border-r border-border",
          selectedConversation && isMobileView ? "hidden" : "block",
        )}
      >
        <ConversationList
          selectedConversation={selectedConversation}
          onSelectConversation={handleConversationSelect}
        />
      </div>
      <div
        className={cn(
          "flex-grow h-full",
          !selectedConversation && isMobileView ? "hidden" : "block",
        )}
      >
        <ChatWindow
          selectedConversation={selectedConversation}
          onBack={handleBack}
          isMobileView={isMobileView}
        />
      </div>
    </div>
  );
}
