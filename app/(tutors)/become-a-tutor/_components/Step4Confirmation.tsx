import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Phone, Home } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const pulse = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
};

export function Step4Confirmation() {
  return (
    <motion.div
      className="space-y-8 text-center"
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div variants={fadeInUp}>
        <motion.div animate={pulse} className="inline-block">
          <CheckCircle className="mx-auto h-24 w-24 text-green-500" />
        </motion.div>
        <h2 className="text-3xl font-bold mt-4 mb-2">Congratulations!</h2>
        <p className="text-xl text-muted-foreground">
          Your journey as an XcelTutor begins now.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-4">
        <p className="text-lg">
          {`We're thrilled to have you on board! Your expertise and passion for
          teaching will make a real difference in students' lives.`}
        </p>
        <p className="text-lg font-medium">
          {`Our team is reviewing your application with great interest. We'll be
          in touch within 12-48 hours to discuss the next steps.`}
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-4">
        <p className="text-lg font-semibold">
          Have questions or need to update your application?
        </p>
        <p className="text-lg">
          {`We're here to support you every step of the way. Don't hesitate to
          reach out:`}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button variant="outline" asChild>
            <a href="mailto:hello@xceltutors.com">
              <Mail className="mr-2 h-4 w-4" />
              hello@xceltutors.com
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="tel:+447778627855">
              <Phone className="mr-2 h-4 w-4" />
              +44 7778 627855
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
