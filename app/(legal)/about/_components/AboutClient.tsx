"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import Image from "next/image";
import { team } from "../team";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const gradientAnimation2 = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export function AboutClient() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-4"
          variants={gradientAnimation2}
          animate="animate"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundImage:
              "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))",
            backgroundSize: "200% 100%",
          }}
        >
          Founded in 2024
        </motion.h1>
        <p className="text-2xl text-muted-foreground">
          Driven by Educational Psychology and Technology We Love
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center text-foreground mb-8">
          Reimagining Who Teaches You
        </h2>
        <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4 text-foreground">
              Feeling lost in a sea of tutors? We understand. Finding the
              perfect tutor who matches your learning style and understands your
              needs can be overwhelming.
            </p>
            <p className="text-lg text-foreground">
              {`At XcelTutors, we make it easy. Our platform uses cutting-edge
              technology and educational psychology to create a personalized
              learning experience that adapts to you. Choose from our carefully
              selected team of expert educators or let us match you with the
              perfect tutor for your needs. Either way, you'll receive the
              support and guidance you need to achieve your goals.`}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl font-semibold text-center text-foreground mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Meet the Visionaries Behind XcelTutors
      </motion.h2>
      <div className="space-y-16">
        {team.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
          >
            <div className="w-full md:w-1/3 h-80">
              <motion.div
                className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={800}
                  height={100}
                  className="transition-transform duration-500"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-2/3">
              <Card className="bg-background h-full">
                <CardContent className="p-6 flex flex-col h-full justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary text-lg mb-2">
                          {member.role}
                        </p>
                        <p className="text-secondary-foreground text-sm flex items-center">
                          <member.icon className="w-5 h-5 mr-2" />
                          {member.nickname}
                        </p>
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon className="w-6 h-6" />
                      </a>
                    </div>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-primary text-primary-foreground rounded-lg p-8 mt-16"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-semibold mb-4">
          Unlock Your Potential with XcelTutors
        </h2>
        <p className="text-lg mb-6">
          {`At XcelTutors, we go beyond traditional tutoring. We combine expert
          educators with cutting-edge technology to create a learning experience
          that's personalized, engaging, and effective. We're committed to
          helping you achieve your academic goals and unlock your full
          potential.`}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Adaptive Learning Plans
          </Badge>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Data-Driven Insights
          </Badge>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Interactive Learning Tools
          </Badge>
        </div>
      </motion.div>
      <motion.div
        className="text-center mt-16 p-8 bg-secondary/10 rounded-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">
          Feel free to reach out on{" "}
          <span className="font-bold text-[#0077B5]">LinkedIn</span>!{" "}
          {`It's a pleasure for us to talk with `}
          <AnimatePresence>
            <motion.span
              className="inline-block font-bold px-2 py-1 rounded-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              key="you-animation"
            >
              <motion.span
                variants={gradientAnimation2}
                animate="animate"
                style={{
                  display: "inline-block",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))",
                  backgroundSize: "200% 100%",
                  border: "2px solid hsl(var(--primary))",
                  backgroundColor: "hsl(var(--secondary))",
                  padding: "2px 4px",
                  borderRadius: "4px",
                }}
              >
                YOU
              </motion.span>
            </motion.span>
          </AnimatePresence>{" "}
          individually.
        </p>
        <p className="text-lg flex items-center justify-center">
          <Mail className="w-5 h-5 mr-2 text-primary" />
          Or email us at:{" "}
          <a
            href="mailto:hello@xceltutors.com"
            className="text-primary hover:underline ml-1"
          >
            hello@xceltutors.com
          </a>
        </p>
      </motion.div>
    </>
  );
}
