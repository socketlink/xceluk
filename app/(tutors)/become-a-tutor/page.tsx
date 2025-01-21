import type { Metadata } from "next";
import { TutorRegistrationIntro } from "./_components/TutorRegistrationIntro";

export const metadata: Metadata = {
  title: "Become a Tutor | XcelTutors",
  description:
    "Join our team of expert tutors at XcelTutors. Complete our quick registration process to start making a difference in students' lives.",
};

export default function TutorRegistrationPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
      <TutorRegistrationIntro />
    </div>
  );
}
