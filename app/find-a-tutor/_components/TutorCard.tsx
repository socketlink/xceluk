import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tutor, Service } from "../consts";

interface TutorCardProps {
  tutor: Tutor;
  index: number;
}

export function TutorCard({ tutor, index }: TutorCardProps) {
  const calculateAveragePrice = (services: Service[]) => {
    const total = services.reduce((sum, service) => sum + service.price, 0);
    return Math.round(total / services.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={tutor.image} alt={tutor.name} />
              <AvatarFallback>
                {tutor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <CardTitle className="text-xl text-card-foreground">
                {tutor.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground flex items-center mt-1">
                <GraduationCap className="w-4 h-4 mr-1" />
                {tutor.university}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground mb-4">
            {tutor.descriptions.card}
          </p>
          <div className="flex flex-wrap gap-2">
            {tutor.services.slice(0, 3).map((service) => (
              <Badge key={service.id} variant="secondary" className="text-xs">
                {service.subject.label} - {service.level.label}
              </Badge>
            ))}
            {tutor.services.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{tutor.services.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">
              £{calculateAveragePrice(tutor.services)}/hr avg
            </span>
          </div>
          <Link href={`/find-a-tutor/${tutor.id}`}>
            <Button variant="default">View Profile</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
