"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, GraduationCap, ShieldCheck, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import MultiStepRegistrationForm from "./MultiStepRegistrationForm";

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function TutorRegistrationIntro() {
  const [showForm, setShowForm] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const introContent = (
    <motion.div
      initial={hasAnimated ? false : "initial"}
      animate="animate"
      variants={staggerChildren}
    >
      <motion.div
        className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={staggerChildren}
      >
        {[
          {
            icon: GraduationCap,
            title: "Educational Background",
            description:
              "We'll ask about your qualifications to match you with suitable students and subjects.",
          },
          {
            icon: ShieldCheck,
            title: "DBS Certificate",
            description:
              "This ensures the safety of our students and complies with UK regulations for working with minors.",
          },
          {
            icon: UserCheck,
            title: "ID Verification",
            description:
              "We'll need a government-issued ID to verify your identity and maintain the integrity of our platform.",
          },
          {
            icon: FileText,
            title: "CV or Resume",
            description:
              "Your experience helps us showcase your expertise to potential students and parents.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4"
            variants={fadeInUp}
          >
            <div className="flex-shrink-0">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="flex justify-center" variants={fadeInUp}>
        <Button
          size="lg"
          onClick={() => setShowForm(true)}
          className="transition-all duration-300 hover:scale-105"
        >
          Start Registration
        </Button>
      </motion.div>
    </motion.div>
  );

  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          className="text-3xl font-bold text-center mb-6"
          variants={fadeInUp}
        >
          Become a Tutor
        </motion.h1>
        <motion.p
          className="text-center text-muted-foreground mb-8"
          variants={fadeInUp}
        >
          Join our community of expert educators and start making a difference
          today.
        </motion.p>
        {!showForm && introContent}
      </motion.div>
      <AnimatePresence mode="wait">
        {!showForm ? null : (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <MultiStepRegistrationForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
