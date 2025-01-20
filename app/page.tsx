"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Lightbulb, Users, Zap, Search } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { subjectsWithLevels } from "./find-a-tutor/consts";
import { SubjectLevelCommand } from "./_components/SubjectLevelCommand";
import * as searchParamsConsts from "./find-a-tutor/searchParamsConsts";
import { createQueryString } from "@/lib/utils";

const subjects = ["Math", "Science", "English", "History", "Art", "Music"];

export default function LandingPage() {
  const [currentSubject, setCurrentSubject] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSubject((prev) => (prev + 1) % subjects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (subject: string, level: string) => {
    setSelectedSubject(subject);
    setSelectedLevel(level);
  };

  const handleSearch = () => {
    const newParams = createQueryString(
      {
        [searchParamsConsts.subject]: selectedSubject,
        [searchParamsConsts.level]: selectedLevel,
      },
      searchParams,
    );
    router.push(`/find-a-tutor?${newParams}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Unlock Your Potential with XcelTutors
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Experience personalized learning like never before. Our expert
            tutors are ready to guide you through:
          </p>
          <div className="h-20 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSubject}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-primary"
              >
                {subjects[currentSubject]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
          <div className="relative bg-card p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">
              Find Your Perfect Tutor
            </h2>
            <div className="space-y-4">
              <SubjectLevelCommand
                subjectsWithLevels={subjectsWithLevels}
                onSelect={handleSelect}
              />
              <Button className="w-full" onClick={handleSearch}>
                <Search className="w-4 h-4 mr-2" />
                Search Tutors
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Why Choose XcelTutors?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Personalized Learning",
              description:
                "Tailored lessons to fit your unique learning style and goals.",
            },
            {
              icon: Users,
              title: "Expert Tutors",
              description:
                "Learn from passionate educators with proven track records.",
            },
            {
              icon: Zap,
              title: "Flexible Scheduling",
              description: "Book sessions that fit your busy lifestyle, 24/7.",
            },
            {
              icon: Lightbulb,
              title: "Innovative Techniques",
              description:
                "Cutting-edge teaching methods for maximum engagement and retention.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to Excel?</h2>
            <p className="text-xl">
              Join thousands of students achieving their academic goals with
              XcelTutors.
            </p>
          </div>
          <Link href="/sign-up">
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
