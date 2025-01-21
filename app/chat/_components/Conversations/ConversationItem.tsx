import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Conversation, User } from "../../mocks";
import { format } from "date-fns";

interface ConversationItemProps {
  conversation: Conversation;
  isSelected: boolean;
  onSelect: () => void;
}

export function ConversationItem({
  conversation,
  isSelected,
  onSelect,
}: ConversationItemProps) {
  const otherParticipant = conversation.participants.find(
    (p: User) => p.role !== "you",
  ) as User;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex items-center space-x-4 p-4 cursor-pointer hover:bg-accent transition-colors duration-200",
        isSelected && "bg-accent",
      )}
      onClick={onSelect}
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={otherParticipant.avatar} />
          <AvatarFallback>{otherParticipant.name.charAt(0)}</AvatarFallback>
        </Avatar>
        {conversation.unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs"
          >
            {conversation.unreadCount}
          </Badge>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">
          {otherParticipant.name}
        </p>
        <p
          className={cn(
            "text-sm truncate",
            conversation.unreadCount > 0
              ? "text-foreground font-medium"
              : "text-muted-foreground",
          )}
        >
          {conversation.lastMessage.content}
        </p>
      </div>
      <span className="text-xs text-muted-foreground">
        {format(new Date(conversation.lastMessage.timestamp), "HH:mm")}
      </span>
    </motion.div>
  );
}
