import { motion } from "framer-motion";
import { Phone, Calendar, GraduationCap } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tutor } from "../../consts";
import { createQueryString } from "@/lib/utils";
import * as searchParamsConsts from "../searchParamsConsts";

interface TutorHeaderProps {
  tutor: Tutor;
  averagePrice: number;
  onOpenDialog: () => void;
}

export function TutorHeader({
  tutor,
  averagePrice,
  onOpenDialog,
}: TutorHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isFreeMeeting = searchParamsConsts.isFreeMeeting(
    searchParams.get(searchParamsConsts.freeMeeting),
  );

  const handleBookCall = () => {
    const newParams = createQueryString(
      { [searchParamsConsts.freeMeeting]: "true" },
      searchParams,
    );
    router.push(`/find-a-tutor/${tutor.id}?${newParams}`, { scroll: false });
    onOpenDialog();
  };

  return (
    <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 sm:p-8 bg-background">
      <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
        <AvatarImage src={tutor.image} alt={tutor.name} />
        <AvatarFallback>
          {tutor.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="text-center sm:text-left flex-grow space-y-2">
        <CardTitle className="text-3xl sm:text-4xl text-foreground">
          {tutor.name}
        </CardTitle>
        <CardDescription className="text-lg flex items-center justify-center sm:justify-start text-muted-foreground">
          <GraduationCap className="mr-2" size={18} />
          {tutor.university}
        </CardDescription>
        <Badge
          variant="secondary"
          className="text-lg px-3 py-1 bg-secondary text-secondary-foreground"
        >
          £{averagePrice}/hr average
        </Badge>
      </div>
      <div className="flex flex-col gap-2 mt-4 sm:mt-0 w-full sm:w-auto">
        {isFreeMeeting && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-background text-primary border-primary hover:bg-accent hover:text-accent-foreground"
              onClick={handleBookCall}
            >
              <motion.div
                className="mr-2"
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <Phone size={18} />
              </motion.div>
              Book a 15-minute call, {`it's`} FREE
            </Button>
          </motion.div>
        )}
        <Button
          variant="default"
          className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Calendar className="mr-2" size={18} />
          Book a Lesson
        </Button>
      </div>
    </CardHeader>
  );
}
