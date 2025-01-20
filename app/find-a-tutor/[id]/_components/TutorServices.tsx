import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "../../consts";

interface TutorServicesProps {
  groupedServices: Record<string, Service[]>;
}

export function TutorServices({ groupedServices }: TutorServicesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-foreground">
        Services Offered
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(groupedServices).map(([subjectId, services], index) => (
          <AnimatePresence key={subjectId}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <Card className="h-full bg-background">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">
                    {services[0].subject.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {services.map((service) => (
                      <li
                        key={service.id}
                        className="flex justify-between items-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <span className="font-medium text-foreground">
                          {service.level.label}
                        </span>
                        <Badge
                          variant="outline"
                          className="bg-secondary text-secondary-foreground"
                        >
                          £{service.price}/hr
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </motion.div>
  );
}
