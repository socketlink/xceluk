import { Metadata } from "next";
import MultiStepRegistrationForm from "./_components/MultiStepRegistrationForm";

export const metadata: Metadata = {
  title: "Tutor Registration | XcelTutors",
  description:
    "Register as a tutor with XcelTutors. Complete our multi-step form to join our team of expert educators.",
};

export default function TutorRegistrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Tutor Registration
      </h1>
      <MultiStepRegistrationForm />
    </div>
  );
}
