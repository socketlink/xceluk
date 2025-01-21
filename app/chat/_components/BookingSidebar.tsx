import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { format, parseISO } from "date-fns";
import {
  bookings,
  type Booking,
  BOOKING_STATUS,
  users,
  conversations,
} from "../mocks";

interface BookingSidebarProps {
  currentUserId: string;
  selectedConversationId: string | null;
}

export function BookingSidebar({
  currentUserId,
  selectedConversationId,
}: BookingSidebarProps) {
  const filteredBookings = bookings.filter((booking) => {
    if (!selectedConversationId) return false;
    const conversation = conversations.find(
      (conv) => conv.id === selectedConversationId,
    );
    if (!conversation) return false;
    const otherUserId =
      conversation.fromUser.id === currentUserId
        ? conversation.toUser.id
        : conversation.fromUser.id;
    return (
      (booking.fromUserId === currentUserId &&
        booking.toUserId === otherUserId) ||
      (booking.fromUserId === otherUserId && booking.toUserId === currentUserId)
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case BOOKING_STATUS.SCHEDULED:
        return "bg-green-500";
      case BOOKING_STATUS.AWAITING_TUTOR_CONFIRMATION:
      case BOOKING_STATUS.AWAITING_STUDENT_CONFIRMATION:
        return "bg-yellow-500";
      case BOOKING_STATUS.COMPLETED:
        return "bg-blue-500";
      case BOOKING_STATUS.CANCELLED:
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getOtherUserName = (booking: Booking) => {
    const otherUserId =
      booking.fromUserId === currentUserId
        ? booking.toUserId
        : booking.fromUserId;
    return (
      users.find((user) => user.id === otherUserId)?.name || "Unknown User"
    );
  };

  return (
    <div className="w-full h-full bg-background flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Your Bookings</h2>
      </div>
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-4">
          {filteredBookings.length === 0 ? (
            <p className="text-center text-muted-foreground p-4">
              No bookings found.
            </p>
          ) : (
            filteredBookings.map((booking: Booking) => (
              <Card
                key={booking.id}
                className="hover:bg-accent transition-colors duration-200"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{booking.subject}</h3>
                      <p className="text-sm text-muted-foreground">
                        {booking.type}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        with {getOtherUserName(booking)}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${getStatusColor(booking.status)} text-white`}
                    >
                      {booking.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(parseISO(booking.startTimeUtc), "MMMM d, yyyy")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <ClockIcon className="mr-2 h-4 w-4" />
                    {format(parseISO(booking.startTimeUtc), "h:mm a")}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
