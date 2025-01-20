import { Metadata } from "next";
import { AboutClient } from "./_components/AboutClient";

export const metadata: Metadata = {
  title: "About XcelTutors | Meet Our Team",
  description: `Discover the visionaries behind XcelTutors:  Our team of educators, technologists, and business experts is revolutionizing online tutoring with personalized learning experiences.`,
  openGraph: {
    title: "About XcelTutors | Meet Our Innovative Team",
    description: `Learn about the founders of XcelTutors: Discover how we're transforming online education through personalized, technology-driven tutoring.`,
    images: [
      {
        url: "https://xceltutors.com/images/team-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the XcelTutors Team",
    description: `Our team includes Learn how we're revolutionizing online tutoring.`,
    images: ["https://xceltutors.com/images/team-twitter.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary py-12">
      <div className="container mx-auto px-4">
        <AboutClient />
      </div>
    </div>
  );
}
