import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Message } from "../../mocks";
import { format } from "date-fns";
import { Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { users } from "../../mocks";

const emojis = ["👍", "❤️", "😂", "😮", "😢", "😡"];

interface MessageBubbleProps {
  message: Message;
  onAddReaction: (messageId: string, emoji: string) => void;
  onRemoveReaction: (messageId: string, emoji: string) => void;
  senderName: string;
  senderAvatar: string;
  currentUserId: string;
}

export function MessageBubble({
  message,
  onAddReaction,
  onRemoveReaction,
  senderName,
  senderAvatar,
  currentUserId,
}: MessageBubbleProps) {
  const [showReactions, setShowReactions] = useState(false);
  const [openReactions, setOpenReactions] = useState<Record<string, boolean>>(
    {},
  );
  const isOwnMessage = message.senderId === currentUserId;

  const handleReactionClick = (emoji: string) => {
    const existingReaction = message.reactions?.find(
      (r) => r.emoji === emoji && r.userId === currentUserId,
    );
    if (existingReaction) {
      onRemoveReaction(message.id, emoji);
      setShowReactions(false);
      setOpenReactions({});
    } else {
      onAddReaction(message.id, emoji);
      setShowReactions(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "flex mb-4",
        isOwnMessage ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "flex items-end",
          isOwnMessage ? "flex-row-reverse" : "flex-row",
        )}
      >
        <Avatar className="w-8 h-8">
          <AvatarImage src={senderAvatar} alt={senderName} />
          <AvatarFallback>{senderName[0]}</AvatarFallback>
        </Avatar>
        <div
          className={cn(
            "max-w-md px-4 py-2 rounded-lg relative group ml-2",
            isOwnMessage
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground",
          )}
        >
          <p className="text-sm font-semibold mb-1">{senderName}</p>
          <p>{message.content}</p>
          <p className="text-xs mt-1 opacity-70">
            {format(new Date(message.timestamp), "HH:mm")}
          </p>

          <Popover open={showReactions} onOpenChange={setShowReactions}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Smile className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-1" side="top" align="start">
              <div className="flex space-x-1">
                {emojis.map((emoji) => (
                  <Button
                    key={emoji}
                    variant="outline"
                    size="sm"
                    className="p-1 hover:bg-accent"
                    onClick={() => handleReactionClick(emoji)}
                  >
                    {emoji}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {message.reactions && message.reactions.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {Array.from(new Set(message.reactions.map((r) => r.emoji))).map(
                (emoji) => {
                  const reactionsForEmoji =
                    message.reactions?.filter((r) => r.emoji === emoji) || [];
                  const count = reactionsForEmoji.length;
                  const hasReacted = reactionsForEmoji.some(
                    (r) => r.userId === currentUserId,
                  );

                  return (
                    <Popover
                      key={emoji}
                      open={openReactions[emoji]}
                      onOpenChange={(open) => {
                        if (open) {
                          setOpenReactions(
                            Object.fromEntries(
                              Object.keys(openReactions).map((key) => [
                                key,
                                key === emoji,
                              ]),
                            ),
                          );
                        } else {
                          setOpenReactions((prev) => ({
                            ...prev,
                            [emoji]: false,
                          }));
                        }
                      }}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "text-xs rounded-full px-2 py-1 hover:bg-accent group",
                            hasReacted ? "bg-primary/20" : "bg-secondary/40",
                          )}
                        >
                          {emoji} {count > 1 && count}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-48 p-2" side="top">
                        <div className="space-y-2">
                          {reactionsForEmoji.map((reaction, index) => {
                            const user = users.find(
                              (u) => u.id === reaction.userId,
                            );
                            return (
                              <div
                                key={`${reaction.emoji}_${index}`}
                                className="flex items-center justify-between"
                              >
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={user?.avatar} />
                                    <AvatarFallback>
                                      {user?.name[0]}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm">
                                    {user?.id === currentUserId
                                      ? "You"
                                      : user?.name}
                                  </span>
                                </div>
                                {reaction.userId === currentUserId && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 px-2 text-xs hover:bg-destructive/90 hover:text-destructive-foreground"
                                    onClick={() => {
                                      handleReactionClick(emoji);
                                      setOpenReactions({});
                                    }}
                                  >
                                    Remove
                                  </Button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </PopoverContent>
                    </Popover>
                  );
                },
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
