"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SubjectWithLevels } from "@/app/find-a-tutor/consts";

interface SubjectLevelCommandProps {
  subjectsWithLevels: SubjectWithLevels[];
  onSelect: (subject: string, level: string) => void;
}

export function SubjectLevelCommand({
  subjectsWithLevels,
  onSelect,
}: SubjectLevelCommandProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value ? value : "Select subject and level..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)] min-w-[var(--radix-popover-trigger-width)]">
        <Command>
          <CommandInput placeholder="Search subject or level..." />
          <CommandList>
            <CommandEmpty>No subject or level found.</CommandEmpty>
            {subjectsWithLevels.map((subject) => (
              <CommandGroup key={subject.id} heading={subject.label}>
                {subject.levels.map((level) => (
                  <CommandItem
                    key={`${subject.id}-${level.id}`}
                    value={`${subject.label} - ${level.label}`}
                    onSelect={() => {
                      setValue(`${subject.label} - ${level.label}`);
                      onSelect(subject.id, level.id);
                      setOpen(false);
                    }}
                  >
                    {value && (
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === `${subject.label} - ${level.label}`
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    )}
                    {level.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
