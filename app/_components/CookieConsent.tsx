"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CookiePreferences = {
  essential: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      setShowConsent(true);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowConsent(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      marketing: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 left-4 right-4 bg-background border border-border rounded-lg shadow-lg z-50 max-w-2xl mx-auto"
      >
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-semibold">Cookie Preferences</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowConsent(false)}
              aria-label="Close cookie consent"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            We use cookies to enhance your experience. By continuing to visit
            this site you agree to our use of cookies.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Customize Preferences</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Essential</span>
                    <Switch
                      checked={preferences.essential}
                      onCheckedChange={() => {}}
                      disabled
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Marketing</span>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={() =>
                        handlePreferenceChange("marketing")
                      }
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex flex-col sm:flex-row gap-2 justify-end">
            <Button variant="outline" size="sm" onClick={handleAccept}>
              Accept Selected
            </Button>
            <Button size="sm" onClick={handleAcceptAll}>
              Accept All
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            For more information, please read our{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-and-conditions"
              className="text-primary hover:underline"
            >
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
