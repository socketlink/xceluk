import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageList } from "./Messages/MessageList";
import { MessageInput } from "./Messages/MessageInput";
import { messages as initialMessages, users, type Message } from "../mocks";
import { generateUniqueId } from "../utils";

interface ChatWindowProps {
  selectedConversation: string | null;
  onBack: () => void;
  isMobileView: boolean;
}

export function ChatWindow({
  selectedConversation,
  onBack,
  isMobileView,
}: ChatWindowProps) {
  const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(true);
  const currentUserId = "you"; // Assuming the current user's ID is always "you"

  useEffect(() => {
    if (selectedConversation) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setChatMessages(
          initialMessages.filter(
            (msg) => msg.conversationId === selectedConversation,
          ),
        );
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [selectedConversation]);

  const handleSendMessage = (content: string) => {
    if (selectedConversation) {
      const newMessage: Message = {
        id: generateUniqueId(),
        conversationId: selectedConversation,
        senderId: currentUserId,
        content,
        timestamp: new Date().toISOString(),
        reactions: [],
        isRead: true,
      };
      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  };

  const handleAddReaction = (messageId: string, emoji: string) => {
    setChatMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              reactions: [
                ...(msg.reactions || []),
                { emoji, userId: currentUserId },
              ],
            }
          : msg,
      ),
    );
  };

  const handleRemoveReaction = (messageId: string, emoji: string) => {
    setChatMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              reactions: (msg.reactions || []).filter(
                (r) => !(r.emoji === emoji && r.userId === currentUserId),
              ),
            }
          : msg,
      ),
    );
  };

  if (!selectedConversation) {
    return (
      <div className="hidden md:flex h-full items-center justify-center bg-background">
        <p className="text-muted-foreground text-center">
          Select a conversation to start chatting
        </p>
      </div>
    );
  }

  const conversation = users.find(
    (user) =>
      user.id !== currentUserId &&
      initialMessages.some(
        (msg) =>
          msg.conversationId === selectedConversation &&
          msg.senderId === user.id,
      ),
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col h-full bg-background"
    >
      <div className="p-4 border-b border-border flex items-center">
        {isMobileView && (
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        )}
        <h2 className="text-lg font-semibold">
          {selectedConversation
            ? `Chat with ${conversation?.name}`
            : "Select a conversation"}
        </h2>
      </div>
      <MessageList
        messages={chatMessages}
        isLoading={isLoading}
        onAddReaction={handleAddReaction}
        onRemoveReaction={handleRemoveReaction}
        currentUserId={currentUserId}
      />
      <MessageInput onSendMessage={handleSendMessage} />
    </motion.div>
  );
}
