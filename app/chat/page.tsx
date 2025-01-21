import type { Metadata } from "next";
import { ChatLayout } from "./_components/ChatLayout";

export const metadata: Metadata = {
  title: "Chat | XcelTutors",
  description: "Connect with tutors and students through our chat system.",
};

export default function ChatPage() {
  return (
    <div className="">
      <ChatLayout />
    </div>
  );
}
