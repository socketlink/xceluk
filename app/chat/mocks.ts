import { format, subDays, subHours, subMinutes } from "date-fns";

// Types
export interface User {
  id: string;
  name: string;
  avatar: string;
  role: "student" | "tutor" | "you";
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  timestamp: string;
  reactions?: { emoji: string; userId: string }[];
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
}

// Mock Users
export const users: User[] = [
  { id: "you", name: "You", avatar: "/avatars/you.png", role: "you" },
  { id: "john", name: "John Doe", avatar: "/avatars/john.png", role: "tutor" },
  {
    id: "jane",
    name: "Jane Smith",
    avatar: "/avatars/jane.png",
    role: "tutor",
  },
  {
    id: "alice",
    name: "Alice Johnson",
    avatar: "/avatars/alice.png",
    role: "student",
  },
  {
    id: "bob",
    name: "Bob Wilson",
    avatar: "/avatars/bob.png",
    role: "student",
  },
];

// Mock Messages
export const messages: Message[] = [
  {
    id: "m1",
    conversationId: "c1",
    senderId: "john",
    content: "Hello! How can I help you with your math questions today?",
    timestamp: format(subHours(new Date(), 2), "yyyy-MM-dd HH:mm:ss"),
    reactions: [
      { emoji: "👍", userId: "you" },
      { emoji: "😊", userId: "john" },
    ],
    isRead: true,
  },
  {
    id: "m2",
    conversationId: "c1",
    senderId: "you",
    content:
      "Hi John! I'm struggling with quadratic equations. Can you explain them?",
    timestamp: format(subHours(new Date(), 2), "yyyy-MM-dd HH:mm:ss"),
    reactions: [{ emoji: "🤔", userId: "john" }],
    isRead: true,
  },
  {
    id: "m3",
    conversationId: "c1",
    senderId: "john",
    content:
      "Of course! Let's start with the basic form: ax² + bx + c = 0. What part confuses you the most?",
    timestamp: format(subHours(new Date(), 1), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m4",
    conversationId: "c2",
    senderId: "jane",
    content: "Hi there! Ready for our English literature session?",
    timestamp: format(subDays(new Date(), 1), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m5",
    conversationId: "c2",
    senderId: "you",
    content:
      "Hello Jane! Yes, I'm ready. Can we discuss Shakespeare's sonnets?",
    timestamp: format(subDays(new Date(), 1), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m6",
    conversationId: "c3",
    senderId: "you",
    content: "Hi Alice! How's your project coming along?",
    timestamp: format(subMinutes(new Date(), 30), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m7",
    conversationId: "c3",
    senderId: "alice",
    content:
      "Hey! It's going well, thanks for asking. I might need some help with the research part though.",
    timestamp: format(subMinutes(new Date(), 25), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m8",
    conversationId: "c4",
    senderId: "bob",
    content: "Hello! I have a question about our upcoming group study session.",
    timestamp: format(subHours(new Date(), 5), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m9",
    conversationId: "c4",
    senderId: "you",
    content: "Hi Bob! Sure, what would you like to know?",
    timestamp: format(subHours(new Date(), 4), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m10",
    conversationId: "c1",
    senderId: "you",
    content: "I see. So for ax² + bx + c = 0, how do we find the values of x?",
    timestamp: format(subMinutes(new Date(), 55), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m11",
    conversationId: "c1",
    senderId: "john",
    content:
      "Great question! We use the quadratic formula: x = [-b ± √(b² - 4ac)] / 2a. Let's break it down step by step.",
    timestamp: format(subMinutes(new Date(), 50), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m12",
    conversationId: "c2",
    senderId: "jane",
    content:
      "Excellent choice! Shakespeare's sonnets are beautiful. Let's start with Sonnet 18: \"Shall I compare thee to a summer's day?\"",
    timestamp: format(subDays(new Date(), 1), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m13",
    conversationId: "c2",
    senderId: "you",
    content:
      "That's one of my favorites! What do you think is the main theme of this sonnet?",
    timestamp: format(subDays(new Date(), 1), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m14",
    conversationId: "c3",
    senderId: "you",
    content:
      "I'd be happy to help with the research part. What specific area are you struggling with?",
    timestamp: format(subMinutes(new Date(), 20), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m15",
    conversationId: "c3",
    senderId: "alice",
    content:
      "I'm having trouble finding reliable sources for the environmental impact of renewable energy. Any tips?",
    timestamp: format(subMinutes(new Date(), 15), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: true,
  },
  {
    id: "m16",
    conversationId: "c4",
    senderId: "bob",
    content:
      "I was wondering if we could focus on calculus this time. I have an exam coming up.",
    timestamp: format(subHours(new Date(), 3), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: false,
  },
  {
    id: "m17",
    conversationId: "c4",
    senderId: "you",
    content:
      "Sure, we can definitely focus on calculus. Which topics in particular do you want to cover?",
    timestamp: format(subHours(new Date(), 2), "yyyy-MM-dd HH:mm:ss"),
    reactions: [],
    isRead: false,
  },
];

// Mock Conversations
export const conversations: Conversation[] = [
  {
    id: "c1",
    participants: [
      users.find((u) => u.id === "you")!,
      users.find((u) => u.id === "john")!,
    ],
    lastMessage: messages.find(
      (m) => m.conversationId === "c1" && m.id === "m11",
    )!,
    unreadCount: messages.filter((m) => m.conversationId === "c1" && !m.isRead)
      .length,
  },
  {
    id: "c2",
    participants: [
      users.find((u) => u.id === "you")!,
      users.find((u) => u.id === "jane")!,
    ],
    lastMessage: messages.find(
      (m) => m.conversationId === "c2" && m.id === "m13",
    )!,
    unreadCount: messages.filter((m) => m.conversationId === "c2" && !m.isRead)
      .length,
  },
  {
    id: "c3",
    participants: [
      users.find((u) => u.id === "you")!,
      users.find((u) => u.id === "alice")!,
    ],
    lastMessage: messages.find(
      (m) => m.conversationId === "c3" && m.id === "m15",
    )!,
    unreadCount: messages.filter((m) => m.conversationId === "c3" && !m.isRead)
      .length,
  },
  {
    id: "c4",
    participants: [
      users.find((u) => u.id === "you")!,
      users.find((u) => u.id === "bob")!,
    ],
    lastMessage: messages.find(
      (m) => m.conversationId === "c4" && m.id === "m17",
    )!,
    unreadCount: messages.filter((m) => m.conversationId === "c4" && !m.isRead)
      .length,
  },
];
