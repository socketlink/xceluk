"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Step1Form } from "./Step1Form";
import { Step2Form } from "./Step2Form";
import { Step3Form } from "./Step3Form";
import { Step4Confirmation } from "./Step4Confirmation";
import { type FormValues, formSchema, type Step } from "../types";
import { toast } from "@/hooks/use-toast";

export default function MultiStepRegistrationForm() {
  const [step, setStep] = useState<Step>(1);
  const [progress, setProgress] = useState(25);
  const [days, setDays] = useState<number[]>([]);
  const [openPopover, setOpenPopover] = useState<{
    year: boolean;
    month: boolean;
    day: boolean;
  }>({
    year: false,
    month: false,
    day: false,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
      phoneNumber: "",
      dbs: undefined,
      id: undefined,
      cv: undefined,
    },
  });

  const {
    formState: { isSubmitting },
    watch,
  } = form;

  const watchYear = watch("birthYear");
  const watchMonth = watch("birthMonth");

  useEffect(() => {
    if (watchYear && watchMonth) {
      const daysInMonth = new Date(
        Number.parseInt(watchYear),
        Number.parseInt(watchMonth),
        0,
      ).getDate();
      setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
      form.setValue("birthDay", ""); // Clear the day when year or month changes
      if (daysInMonth > 0) {
        setOpenPopover((prev) => ({ ...prev, day: true })); // Open day popover if there are valid days
      }
    } else {
      setDays([]);
      form.setValue("birthDay", "");
    }
  }, [watchYear, watchMonth, form, setOpenPopover]);

  const onSubmit = async (data: FormValues) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast({
        title: "Registration Successful",
        description: "Your tutor registration has been submitted successfully.",
      });
      setStep(4); // Move to the confirmation step
      setProgress(100);
    } catch {
      toast({
        title: "Registration Failed",
        description:
          "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    }
  };

  const nextStep = () => {
    setStep((prev) => (prev + 1) as Step);
    setProgress((prev) => Math.min(prev + 25, 100));
  };

  const prevStep = () => {
    setStep((prev) => (prev - 1) as Step);
    setProgress((prev) => Math.max(prev - 25, 25));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-2 mb-8">
        <Progress value={progress} />
        <div className="flex justify-between text-sm text-muted-foreground px-1">
          <span className={step === 1 ? "font-medium text-primary" : ""}>
            Account Details
          </span>
          <span className={step === 2 ? "font-medium text-primary" : ""}>
            Contact Info
          </span>
          <span className={step === 3 ? "font-medium text-primary" : ""}>
            Documents
          </span>
          <span className={step === 4 ? "font-medium text-primary" : ""}>
            Confirmation
          </span>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {step < 4 ? (
          <div key="form" className="space-y-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Step1Form
                      form={form}
                      onNextStep={nextStep}
                      openPopover={openPopover}
                      setOpenPopover={setOpenPopover}
                      days={days}
                    />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Step2Form
                      form={form}
                      onPrevStep={prevStep}
                      onNextStep={nextStep}
                    />
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Step3Form
                      form={form}
                      onPrevStep={prevStep}
                      isSubmitting={isSubmitting}
                    />
                  </motion.div>
                )}
              </form>
            </Form>
          </div>
        ) : (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <Step4Confirmation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
