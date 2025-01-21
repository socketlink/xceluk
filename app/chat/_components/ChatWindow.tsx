import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageList } from "./Messages/MessageList";
import { MessageInput } from "./Messages/MessageInput";
import {
  messages as initialMessages,
  conversations,
  type Message,
} from "../mocks";
import { generateUniqueId } from "../utils";

interface ChatWindowProps {
  selectedConversation: string | null;
  onBack: () => void;
  isMobileView: boolean;
  currentUserId: string;
}

export function ChatWindow({
  selectedConversation,
  onBack,
  isMobileView,
  currentUserId,
}: ChatWindowProps) {
  const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedConversation) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const filteredMessages = initialMessages.filter(
          (msg) => msg.conversationId === selectedConversation,
        );
        setChatMessages(filteredMessages);
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setChatMessages([]);
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
    return null;
  }

  const currentConversation = conversations.find(
    (conv) => conv.id === selectedConversation,
  );
  const otherUser = currentConversation?.toUser;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col w-full h-full bg-background rounded-l-lg"
    >
      <div className="p-4 border-b border-border flex items-center sticky top-0 bg-background z-10">
        {isMobileView && (
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        )}
        <h2 className="text-lg font-semibold">
          {selectedConversation
            ? `Chat with ${otherUser?.name}`
            : "Select a conversation"}
        </h2>
      </div>
      <div className="flex-1 flex flex-col min-h-0">
        <MessageList
          messages={chatMessages}
          isLoading={isLoading}
          onAddReaction={handleAddReaction}
          onRemoveReaction={handleRemoveReaction}
          currentUserId={currentUserId}
        />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </motion.div>
  );
}
