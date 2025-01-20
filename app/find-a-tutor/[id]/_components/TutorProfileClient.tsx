"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  TimePicker,
  timePickerSchema,
} from "@/components/custom-ui/TimePicker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tutor, Service } from "../../consts";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TutorHeader } from "./TutorHeader";
import { TutorAbout } from "./TutorAbout";
import { TutorServices } from "./TutorServices";
import * as searchParamsConsts from "../searchParamsConsts";

interface TutorProfileClientProps {
  tutor: Tutor;
}

export default function TutorProfileClient({ tutor }: TutorProfileClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const methods = useForm({
    resolver: zodResolver(timePickerSchema),
    defaultValues: {
      date: undefined,
      time: null,
    },
  });

  useEffect(() => {
    if (searchParams.get(searchParamsConsts.freeMeeting) === "true") {
      setIsDialogOpen(true);
    } else {
      setIsDialogOpen(false);
    }
  }, [searchParams]);

  const calculateAveragePrice = (services: Service[]) => {
    const total = services.reduce((sum, service) => sum + service.price, 0);
    return Math.round(total / services.length);
  };

  const groupServicesBySubject = (services: Service[]) => {
    return services.reduce(
      (acc, service) => {
        if (!acc[service.subject.id]) {
          acc[service.subject.id] = [];
        }
        acc[service.subject.id].push(service);
        return acc;
      },
      {} as Record<string, Service[]>,
    );
  };

  const onSubmit = methods.handleSubmit((data) => {
    if (data.date && data.time) {
      const selectedDateTime = new Date(data.date);
      const [hours, minutes] = (data.time as string).split(":").map(Number);
      selectedDateTime.setHours(hours, minutes);

      // Here you would typically send this data to your backend
      alert(
        `Free call booked with ${tutor.name} for ${selectedDateTime.toLocaleString("en-GB", { timeZone: "Europe/London" })}`,
      );
      setIsDialogOpen(false);
      // Remove the search param after booking
      router.push(`/find-a-tutor/${tutor.id}`);
    } else {
      // Handle the case where date or time is not selected
      alert("Please select both a date and time for your call.");
    }
  });

  const averagePrice = calculateAveragePrice(tutor.services);
  const groupedServices = groupServicesBySubject(tutor.services);
  const isFreeMeeting = searchParamsConsts.isFreeMeeting(
    searchParams.get(searchParamsConsts.freeMeeting),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/find-a-tutor"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Tutors
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8 overflow-hidden bg-background shadow-lg">
            <TutorHeader
              tutor={tutor}
              averagePrice={averagePrice}
              onOpenDialog={() => setIsDialogOpen(true)}
            />
            <TutorAbout
              name={tutor.name}
              sessionOverview={tutor.descriptions.session}
              bio={tutor.descriptions.bio}
            />
          </Card>
        </motion.div>

        <TutorServices groupedServices={groupedServices} />

        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) {
              router.push(`/find-a-tutor/${tutor.id}`, { scroll: false });
            }
          }}
        >
          <DialogContent className="sm:max-w-[425px] bg-background">
            <DialogHeader>
              <DialogTitle className="text-foreground">
                Book a {isFreeMeeting ? "Free" : "Paid"} Call
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Select a date and time for your{" "}
                {isFreeMeeting ? "free" : "paid"} call with {tutor.name}. All
                times are in UK time.
                {!isFreeMeeting && (
                  <span className="block mt-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                    Note: You have already had a free meeting with this tutor.
                    This call will be charged.
                  </span>
                )}
              </DialogDescription>
            </DialogHeader>
            <FormProvider {...methods}>
              <form onSubmit={onSubmit} className="grid gap-4 py-4">
                <TimePicker />
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Book {isFreeMeeting ? "Free" : "Paid"} Call
                </Button>
              </form>
            </FormProvider>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
