import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageBubble } from "./MessageBubble";
import { MessageSkeleton } from "./MessageSkeleton";
import { type Message, users } from "../../mocks";

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
  onAddReaction: (messageId: string, emoji: string) => void;
  onRemoveReaction: (messageId: string, emoji: string) => void;
  currentUserId: string;
}

export function MessageList({
  messages,
  isLoading,
  onAddReaction,
  onRemoveReaction,
  currentUserId,
}: MessageListProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current && !isLoading) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <ScrollArea className="flex-1 p-4 h-[calc(100%-8rem)]" ref={scrollAreaRef}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <MessageSkeleton
                  key={`skeleton_${index}`}
                  isOwnMessage={index % 2 === 0}
                />
              ))}
          </motion.div>
        ) : (
          <motion.div
            key="messages"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {messages.map((msg, index) => {
              const sender =
                users.find((user) => user.id === msg.senderId) || users[0];
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <MessageBubble
                    message={msg}
                    onAddReaction={onAddReaction}
                    onRemoveReaction={onRemoveReaction}
                    senderName={sender.name}
                    senderAvatar={sender.avatar}
                    currentUserId={currentUserId}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollArea>
  );
}
