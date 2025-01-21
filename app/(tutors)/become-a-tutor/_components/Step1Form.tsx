import type React from "react";
import type { UseFormReturn } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { type FormValues, years, months } from "../types";

interface Step1FormProps {
  form: UseFormReturn<FormValues>;
  onNextStep: () => void;
  openPopover: { year: boolean; month: boolean; day: boolean };
  setOpenPopover: React.Dispatch<
    React.SetStateAction<{ year: boolean; month: boolean; day: boolean }>
  >;
  days: number[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

export function Step1Form({
  form,
  onNextStep,
  openPopover,
  setOpenPopover,
  days,
}: Step1FormProps) {
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
      >
        <FormField
          control={form.control}
          name="birthYear"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Year</FormLabel>
              <Popover
                open={openPopover.year}
                onOpenChange={(open) =>
                  setOpenPopover((prev) => ({ ...prev, year: open }))
                }
              >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? years.find((year) => year.toString() === field.value)
                        : "Select year"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Search year..." />
                    <CommandList>
                      <CommandEmpty>No year found.</CommandEmpty>
                      <CommandGroup className="max-h-60 overflow-auto">
                        <AnimatePresence>
                          {years.map((year) => (
                            <motion.div
                              key={year}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CommandItem
                                onSelect={() => {
                                  form.setValue("birthYear", year.toString(), {
                                    shouldValidate: true,
                                  });
                                  form.setValue("birthMonth", "");
                                  form.setValue("birthDay", "");
                                  setOpenPopover((prev) => ({
                                    ...prev,
                                    year: false,
                                    month: true,
                                  }));
                                }}
                                value={year.toString()}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    year.toString() === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {year}
                              </CommandItem>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthMonth"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Month</FormLabel>
              <Popover
                open={openPopover.month}
                onOpenChange={(open) =>
                  setOpenPopover((prev) => ({ ...prev, month: open }))
                }
              >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                      disabled={!form.watch("birthYear")}
                    >
                      {field.value
                        ? months[Number.parseInt(field.value) - 1]
                        : "Select month"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Search month..." />
                    <CommandList>
                      <CommandEmpty>No month found.</CommandEmpty>
                      <CommandGroup className="max-h-60 overflow-auto">
                        <AnimatePresence>
                          {months.map((month, index) => (
                            <motion.div
                              key={month}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CommandItem
                                onSelect={() => {
                                  form.setValue(
                                    "birthMonth",
                                    (index + 1).toString().padStart(2, "0"),
                                    {
                                      shouldValidate: true,
                                    },
                                  );
                                  form.setValue("birthDay", ""); // Clear the day
                                  setOpenPopover((prev) => ({
                                    ...prev,
                                    month: false,
                                    day: true,
                                  })); // Open day popover
                                }}
                                value={month}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    (index + 1).toString().padStart(2, "0") ===
                                      field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {month}
                              </CommandItem>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthDay"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Day</FormLabel>
              <Popover
                open={openPopover.day}
                onOpenChange={(open) =>
                  setOpenPopover((prev) => ({ ...prev, day: open }))
                }
              >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                      disabled={
                        !form.watch("birthYear") || !form.watch("birthMonth")
                      }
                    >
                      {field.value || "Select day"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Search day..." />
                    <CommandList>
                      <CommandEmpty>No day found.</CommandEmpty>
                      <CommandGroup className="max-h-60 overflow-auto">
                        <AnimatePresence>
                          {days.map((day) => (
                            <motion.div
                              key={day}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CommandItem
                                onSelect={() => {
                                  form.setValue(
                                    "birthDay",
                                    day.toString().padStart(2, "0"),
                                    {
                                      shouldValidate: true,
                                    },
                                  );
                                  setOpenPopover((prev) => ({
                                    ...prev,
                                    day: false,
                                  }));
                                }}
                                value={day.toString()}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    day.toString().padStart(2, "0") ===
                                      field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {day}
                              </CommandItem>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Button
          type="button"
          onClick={onNextStep}
          className="w-full mt-4"
          disabled={
            !form.getValues().email ||
            !form.getValues().birthYear ||
            !form.getValues().birthMonth ||
            !form.getValues().birthDay
          }
        >
          Next
        </Button>
      </motion.div>
    </motion.div>
  );
}
