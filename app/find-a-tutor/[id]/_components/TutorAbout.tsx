import { motion } from "framer-motion";
import { Clock, GraduationCap } from "lucide-react";
import { CardContent } from "@/components/ui/card";

interface TutorAboutProps {
  name: string;
  sessionOverview: string;
  bio: string;
}

export function TutorAbout({ name, sessionOverview, bio }: TutorAboutProps) {
  return (
    <CardContent className="p-6 sm:p-8 bg-background">
      <div className="grid gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center text-foreground">
            <Clock className="mr-2" size={20} />
            Session Overview
          </h3>
          <p className="text-muted-foreground">{sessionOverview}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center text-foreground">
            <GraduationCap className="mr-2" size={20} />
            About {name}
          </h3>
          <p className="text-muted-foreground">{bio}</p>
        </motion.div>
      </div>
    </CardContent>
  );
}
