import React from "react";
import { motion } from "framer-motion";
import type { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  UploadIcon as FileUpload,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { FormValues } from "../types";

interface Step3FormProps {
  form: UseFormReturn<FormValues>;
  onPrevStep: () => void;
  isSubmitting: boolean;
}

export function Step3Form({ form, onPrevStep, isSubmitting }: Step3FormProps) {
  const renderFileInput = (
    name: "dbs" | "id" | "cv",
    label: string,
    description: string,
    accept: string,
  ) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { onChange, value, ...rest } }) => (
        <FormItem>
          <FormLabel className="flex items-center space-x-2">
            <span>{label}</span>
            {!value && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle className="text-yellow-500 h-4 w-4 cursor-help" />
                  </motion.span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This field is required</p>
                </TooltipContent>
              </Tooltip>
            )}
          </FormLabel>
          <FormControl>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Input
                type="file"
                accept={accept}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    onChange(file);
                  }
                }}
                {...rest}
                className="flex-grow pr-10"
              />
              <motion.div
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                initial={value ? { opacity: 1 } : { opacity: 0 }}
                animate={value ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {value instanceof File ? (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                ) : (
                  <FileUpload className="text-gray-400 h-5 w-5" />
                )}
              </motion.div>
            </motion.div>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <TooltipProvider>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="pt-6">
            {renderFileInput(
              "dbs",
              "DBS Certificate (Max 5MB)",
              "Upload your DBS certificate (PDF, JPG, JPEG, or PNG)",
              ".pdf,.jpg,.jpeg,.png",
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            {renderFileInput(
              "id",
              "ID Upload (Max 5MB)",
              "Upload a valid ID document (PDF or image)",
              "image/*,.pdf",
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            {renderFileInput(
              "cv",
              "CV Upload (Max 5MB)",
              "Upload your CV (PDF, DOC, or DOCX)",
              ".pdf,.doc,.docx",
            )}
          </CardContent>
        </Card>

        <motion.div
          className="flex justify-between mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button type="button" onClick={onPrevStep} variant="outline">
            Previous
          </Button>
          <Button
            type="submit"
            disabled={
              isSubmitting ||
              !form.getValues().dbs ||
              !form.getValues().id ||
              !form.getValues().cv
            }
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </motion.div>
        <motion.p
          className="text-sm text-muted-foreground mt-2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          All fields are required to complete your registration
        </motion.p>
      </motion.div>
    </TooltipProvider>
  );
}
