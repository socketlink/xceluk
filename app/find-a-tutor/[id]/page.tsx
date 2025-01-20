import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import TutorProfileClient from "./_components/TutorProfileClient";
import { tutors } from "../consts";
import * as searchParamsConsts from "./searchParamsConsts";
import { createQueryString } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tutor = tutors.find((t) => t.id === parseInt(id));

  if (!tutor) {
    return {
      title: "Tutor Not Found",
      description: "The requested tutor profile could not be found.",
    };
  }

  const subjects = tutor.services.map((s) => s.subject).join(", ");

  return {
    title: `${tutor.name} - Tutor Profile`,
    description: `Learn more about ${tutor.name}, an expert tutor specializing in ${subjects} at XcelTutors. Book a session or free consultation today!`,
    openGraph: {
      title: `${tutor.name} - Expert Tutor | XcelTutors`,
      description: `Discover ${tutor.name}'s expertise in ${subjects}. Book a personalized tutoring session now!`,
      images: [{ url: tutor.image, width: 800, height: 600, alt: tutor.name }],
    },
  };
}

export default async function TutorProfilePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const _searchParams = await searchParams;
  const tutor = tutors.find((t) => t.id === parseInt(id));

  if (!tutor) {
    notFound();
  }

  // In the future, this will be a real check, possibly from a database or API
  const alreadyHadFreeMeeting = false;

  if (
    alreadyHadFreeMeeting &&
    searchParamsConsts.isFreeMeeting(
      _searchParams[searchParamsConsts.freeMeeting] as string,
    )
  ) {
    const searchParamsInstance = new URLSearchParams(
      _searchParams as Record<string, string>,
    );
    const newParams = createQueryString(
      { [searchParamsConsts.freeMeeting]: "true" },
      searchParamsInstance,
    );
    redirect(`/find-a-tutor/${id}?${newParams}`);
  }

  return <TutorProfileClient tutor={tutor} />;
}
