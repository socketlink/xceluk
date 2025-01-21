import React from "react";
import type { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FormValues } from "../types";

interface Step2FormProps {
  form: UseFormReturn<FormValues>;
  onPrevStep: () => void;
  onNextStep: () => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

export function Step2Form({ form, onPrevStep, onNextStep }: Step2FormProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
        exit: { opacity: 0 },
      }}
    >
      <motion.div variants={fadeInUp}>
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (UK)</FormLabel>
              <FormControl>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    +44
                  </span>
                  <Input
                    placeholder="7123 456789"
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) => {
                      let value = e.target.value.replace(/[^\d]/g, "");

                      if (value.startsWith("0")) {
                        value = value.slice(1);
                      }

                      value = value.slice(0, 10);

                      if (value.length > 0) {
                        if (value.length <= 4) {
                          value = value;
                        } else if (value.length <= 7) {
                          value = `${value.slice(0, 4)} ${value.slice(4)}`;
                        } else {
                          value = `${value.slice(0, 4)} ${value.slice(4, 7)} ${value.slice(7)}`;
                        }
                      }

                      field.onChange(value);
                      if (value.replace(/\s/g, "").length === 10) {
                        form.trigger("phoneNumber");
                      }
                    }}
                    onBlur={() => form.trigger("phoneNumber")}
                    className="rounded-l-none"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="flex justify-between mt-4">
        <Button type="button" onClick={onPrevStep} variant="outline">
          Previous
        </Button>
        <Button
          type="button"
          onClick={() => {
            form.trigger("phoneNumber").then((isValid) => {
              if (isValid) onNextStep();
            });
          }}
          disabled={
            !form.getValues().phoneNumber ||
            form.getValues().phoneNumber.replace(/\s/g, "").length !== 10 ||
            !!form.formState.errors.phoneNumber
          }
        >
          Next
        </Button>
      </motion.div>
    </motion.div>
  );
}
