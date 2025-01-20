import { Metadata } from "next";
import FindATutorClient from "./_components/FindATutorClient";
import { tutors, subjectsWithLevels } from "./consts";
import * as searchParamsConsts from "./searchParamsConsts";

export const metadata: Metadata = {
  title: "Find a Tutor",
  description:
    "Discover expert tutors in various subjects and levels. Find the perfect match for your learning needs with XcelTutors.",
  keywords: [
    "tutors",
    "online tutoring",
    "education",
    "learning",
    "academic help",
  ],
  openGraph: {
    title: "Find Your Perfect Tutor",
    description:
      "Connect with expert tutors tailored to your subject and level. Boost your academic performance with personalized tutoring.",
    images: [
      {
        url: "https://xceltutors.com/og-find-tutor.jpg",
        width: 1200,
        height: 630,
        alt: "XcelTutors - Find a Tutor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Perfect Tutor",
    description:
      "Connect with expert tutors tailored to your subject and level. Boost your academic performance with personalized tutoring.",
    images: ["https://xceltutors.com/twitter-find-tutor.jpg"],
  },
};

export default async function FindATutor({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const _searchParams = await searchParams;
  const selectedSubject =
    typeof _searchParams[searchParamsConsts.subject] === "string"
      ? (_searchParams[searchParamsConsts.subject] as string)
      : "";
  const selectedLevel =
    typeof _searchParams[searchParamsConsts.level] === "string"
      ? (_searchParams[searchParamsConsts.level] as string)
      : "";

  const filteredTutors = tutors.filter((tutor) =>
    tutor.services.some(
      (service) =>
        (selectedSubject === "" || service.subject.id === selectedSubject) &&
        (selectedLevel === "" || service.level.id === selectedLevel),
    ),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">
          Find Your Perfect Tutor
        </h1>
        <FindATutorClient
          filteredTutors={filteredTutors}
          subjectsWithLevels={subjectsWithLevels}
          selectedSubject={selectedSubject}
          selectedLevel={selectedLevel}
        />
      </div>
    </div>
  );
}
