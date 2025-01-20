"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FilterSection } from "./FilterSection";
import { TutorCard } from "./TutorCard";
import { Tutor, SubjectWithLevels, Subject, Level } from "../consts";
import * as searchParamsConsts from "../searchParamsConsts";
import { createQueryString } from "@/lib/utils";

interface FindATutorClientProps {
  filteredTutors: Tutor[];
  subjectsWithLevels: SubjectWithLevels[];
  selectedSubject: string;
  selectedLevel: string;
}

export default function FindATutorClient({
  filteredTutors,
  subjectsWithLevels,
  selectedSubject,
  selectedLevel,
}: FindATutorClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [subject, setSubject] = useState(selectedSubject);
  const [level, setLevel] = useState(selectedLevel);

  useEffect(() => {
    setSubject(selectedSubject);
    setLevel(selectedLevel);
  }, [selectedSubject, selectedLevel]);

  const handleSubjectSelect = (newSubject: Subject) => {
    const newParams = createQueryString(
      { [searchParamsConsts.subject]: newSubject.id },
      searchParams,
    );
    router.push(`/find-a-tutor?${newParams}`);
  };

  const handleLevelSelect = (newLevel: Level) => {
    const newParams = createQueryString(
      { [searchParamsConsts.level]: newLevel.id },
      searchParams,
    );
    router.push(`/find-a-tutor?${newParams}`);
  };

  const clearFilters = () => {
    router.push("/find-a-tutor");
  };

  const activeFiltersCount =
    (searchParamsConsts.isSubjectSelected(subject) ? 1 : 0) +
    (searchParamsConsts.isLevelSelected(level) ? 1 : 0);

  return (
    <>
      <FilterSection
        subject={subject}
        level={level}
        subjectsWithLevels={subjectsWithLevels}
        onSubjectSelect={handleSubjectSelect}
        onLevelSelect={handleLevelSelect}
        onClearFilters={clearFilters}
        activeFiltersCount={activeFiltersCount}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredTutors.map((tutor, index) => (
            <TutorCard key={tutor.id} tutor={tutor} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {filteredTutors.length === 0 && (
        <motion.p
          className="text-center text-muted-foreground mt-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No tutors found matching your criteria. Try adjusting your filters.
        </motion.p>
      )}
    </>
  );
}
