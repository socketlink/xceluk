"use client";

import { useState, useEffect } from "react";
import { ConversationList } from "./Conversations/ConversationList";
import { ChatWindow } from "./ChatWindow";
import { BookingSidebar } from "./BookingSidebar";
import { cn } from "@/lib/utils";
import { users } from "../mocks";

const currentUser = users.find((user) => user.id === "you")!;

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

  return (
    <div
      className={cn(
        "grid h-[calc(100vh-4rem)] bg-background rounded-lg shadow-lg overflow-hidden",
        isMobileView
          ? "grid-cols-1"
          : selectedConversation
            ? "grid-cols-[240px_1fr_400px]"
            : "grid-cols-1 md:grid-cols-[240px_1fr_400px]", // Update: Changed grid columns for desktop view when no conversation is selected
      )}
    >
      {/* Conversations column - always visible */}
      <div
        className={cn(
          "border-r border-border",
          isMobileView && selectedConversation ? "hidden" : "block",
        )}
      >
        <ConversationList
          selectedConversation={selectedConversation}
          onSelectConversation={handleConversationSelect}
          currentUserId={currentUser.id}
        />
      </div>

      {/* Messages column */}
      {selectedConversation && (
        <div className="h-full overflow-hidden flex">
          <ChatWindow
            selectedConversation={selectedConversation}
            onBack={() => setSelectedConversation(null)}
            isMobileView={isMobileView}
            currentUserId={currentUser.id}
          />
        </div>
      )}

      {/* Bookings column - only visible on desktop when a conversation is selected */}
      {!isMobileView && selectedConversation && (
        <div className="border-l border-border">
          <BookingSidebar
            currentUserId={currentUser.id}
            selectedConversationId={selectedConversation}
          />
        </div>
      )}

      {!selectedConversation &&
        !isMobileView && ( // Update: Added code block for when no conversation is selected on desktop
          <div className="col-span-2 flex items-center justify-center">
            <p className="text-lg text-muted-foreground">
              Please select a conversation to start chatting.
            </p>
          </div>
        )}
    </div>
  );
}
