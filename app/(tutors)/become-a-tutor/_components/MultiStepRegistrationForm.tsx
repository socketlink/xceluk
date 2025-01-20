"use client";

import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
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

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i - 18);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .min(1, "Email is required"),
  birthYear: z
    .string()
    .min(1, "Year is required")
    .refine(
      (val) => {
        const year = Number.parseInt(val, 10);
        return year <= currentYear - 18 && year >= currentYear - 118;
      },
      { message: "You must be between 18 and 118 years old." },
    ),
  birthMonth: z.string().min(1, "Month is required"),
  birthDay: z.string().min(1, "Day is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .refine((val) => /^(\d{4}\s?){2}\d{2}$/.test(val.replace(/\s/g, "")), {
      message: "Invalid UK mobile number",
    }),
  dbs: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => {
        if (file) return file.size <= 5 * 1024 * 1024;
        return true;
      },
      { message: "DBS file must be 5MB or less." },
    ),
  id: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => {
        if (file) return file.size <= 5 * 1024 * 1024;
        return true;
      },
      { message: "ID file must be 5MB or less." },
    ),
});

type FormValues = z.infer<typeof formSchema>;

export default function MultiStepRegistrationForm() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33);
  const [days, setDays] = useState<number[]>([]);
  const [openPopover, setOpenPopover] = useState<{
    year: boolean;
    month: boolean;
    day: boolean;
  }>({
    year: false,
    month: false,
    day: false,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
      phoneNumber: "",
      dbs: undefined,
      id: undefined,
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Handle form submission here
  };

  const nextStep = () => {
    if (step === 1) {
      const { email, birthYear, birthMonth, birthDay } = form.getValues();
      const isStep1Valid = email && birthYear && birthMonth && birthDay;
      if (isStep1Valid) {
        setStep(2);
        setProgress(66);
      }
    } else if (step === 2) {
      const { phoneNumber } = form.getValues();
      if (phoneNumber) {
        setStep(3);
        setProgress(100);
      }
    }
  };

  const prevStep = () => {
    if (step === 2) {
      setStep(1);
      setProgress(33);
    } else if (step === 3) {
      setStep(2);
      setProgress(66);
    }
  };

  const watchYear = form.watch("birthYear");
  const watchMonth = form.watch("birthMonth");

  useEffect(() => {
    if (watchYear && watchMonth) {
      const daysInMonth = new Date(
        Number.parseInt(watchYear),
        Number.parseInt(watchMonth),
        0,
      ).getDate();
      setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    } else {
      setDays([]);
    }
  }, [watchYear, watchMonth]);

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "phoneNumber") {
        form.trigger("phoneNumber");
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <div className="max-w-md mx-auto">
      <Progress value={progress} className="mb-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
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
                                ? years.find(
                                    (year) => year.toString() === field.value,
                                  )
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
                                {years.map((year) => (
                                  <CommandItem
                                    key={year}
                                    onSelect={() => {
                                      form.setValue(
                                        "birthYear",
                                        year.toString(),
                                        { shouldValidate: true },
                                      );
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
                                ))}
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
                                {months.map((month, index) => (
                                  <CommandItem
                                    key={month}
                                    onSelect={() => {
                                      form.setValue(
                                        "birthMonth",
                                        (index + 1).toString().padStart(2, "0"),
                                        {
                                          shouldValidate: true,
                                        },
                                      );
                                      form.setValue("birthDay", "");
                                      setOpenPopover((prev) => ({
                                        ...prev,
                                        month: false,
                                        day: true,
                                      }));
                                    }}
                                    value={month}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        (index + 1)
                                          .toString()
                                          .padStart(2, "0") === field.value
                                          ? "opacity-100"
                                          : "opacity-0",
                                      )}
                                    />
                                    {month}
                                  </CommandItem>
                                ))}
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
                              disabled={!watchYear || !watchMonth}
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
                                {days.map((day) => (
                                  <CommandItem
                                    key={day}
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
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="button"
                onClick={nextStep}
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
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
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

                            // If the value starts with a '0', remove it
                            if (value.startsWith("0")) {
                              value = value.slice(1);
                            }

                            // Limit to 10 digits
                            value = value.slice(0, 10);

                            // Format the number as user types
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
                            form.trigger("phoneNumber");
                          }}
                          className="rounded-l-none"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between mt-4">
                <Button type="button" onClick={prevStep} variant="outline">
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    form.trigger("phoneNumber").then((isValid) => {
                      if (isValid) nextStep();
                    });
                  }}
                  disabled={
                    !form.getValues().phoneNumber ||
                    !!form.formState.errors.phoneNumber
                  }
                >
                  Next
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <FormField
                control={form.control}
                name="dbs"
                render={({ field: { onChange, ...rest } }) => (
                  <FormItem>
                    <FormLabel>DBS Certificate (Max 5MB)</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onChange(file);
                          }
                        }}
                        {...{ ...rest, value: undefined }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="id"
                render={({ field: { onChange, ...rest } }) => (
                  <FormItem>
                    <FormLabel>ID Upload (Max 5MB)</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onChange(file);
                          }
                        }}
                        {...{ ...rest, value: undefined }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between mt-4">
                <Button type="button" onClick={prevStep} variant="outline">
                  Previous
                </Button>
                <Button type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </motion.div>
          )}
        </form>
      </Form>
    </div>
  );
}
