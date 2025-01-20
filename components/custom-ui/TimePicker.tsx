"use client";

import * as React from "react";
import { format, addMonths, startOfToday, isBefore, isAfter } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useFormContext, Controller } from "react-hook-form";
import { z } from "zod";

export const timePickerSchema = z.object({
  date: z.date({
    required_error: "Please select a date",
    invalid_type_error: "That's not a valid date",
  }),
  time: z
    .string({
      required_error: "Please select a time",
    })
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
    .nullable(),
});

type TimePickerSchemaType = z.infer<typeof timePickerSchema>;

export function TimePicker() {
  const { control, watch, setValue } = useFormContext<TimePickerSchemaType>();
  const [isTimeOpen, setIsTimeOpen] = React.useState(false);
  const timeSelectRef = React.useRef<HTMLButtonElement>(null);

  const date = watch("date");

  const today = startOfToday();
  const oneMonthFromNow = addMonths(today, 1);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setValue("date", selectedDate as Date, { shouldValidate: true });
    setValue("time", null, { shouldValidate: true });
    setIsTimeOpen(false);
    if (selectedDate) {
      setIsTimeOpen(true);
      setTimeout(() => {
        timeSelectRef.current?.click();
      }, 0);
    }
  };

  const handleTimeSelect = (selectedTime: string | null) => {
    setValue("time", selectedTime, { shouldValidate: true });
    setIsTimeOpen(false);
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i < 18; i++) {
      slots.push(`${i.toString().padStart(2, "0")}:00`);
      slots.push(`${i.toString().padStart(2, "0")}:30`);
    }
    return slots;
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <Label htmlFor="date-picker">Date</Label>
        <Controller
          name="date"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date-picker"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={handleDateSelect}
                    disabled={(date) =>
                      isBefore(date, today) || isAfter(date, oneMonthFromNow)
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {error && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
              )}
            </>
          )}
        />
      </div>
      <div>
        <Label htmlFor="time-picker">Time</Label>
        <Controller
          name="time"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Select
                open={isTimeOpen}
                onOpenChange={setIsTimeOpen}
                onValueChange={handleTimeSelect}
                value={field.value || undefined}
              >
                <SelectTrigger
                  id="time-picker"
                  ref={timeSelectRef}
                  className="w-full"
                  disabled={!date}
                >
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {generateTimeSlots().map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot} (UK Time)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {error && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
}
