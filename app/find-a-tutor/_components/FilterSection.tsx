import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronsUpDown, X, Filter } from "lucide-react";
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
import { SubjectWithLevels, Subject, Level } from "../consts";

interface FilterSectionProps {
  subject: string;
  level: string;
  subjectsWithLevels: SubjectWithLevels[];
  onSubjectSelect: (subject: Subject) => void;
  onLevelSelect: (level: Level) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

export function FilterSection({
  subject,
  level,
  subjectsWithLevels,
  onSubjectSelect,
  onLevelSelect,
  onClearFilters,
  activeFiltersCount,
}: FilterSectionProps) {
  const [openSubject, setOpenSubject] = useState(false);
  const [openLevel, setOpenLevel] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const clearButtonRef = useRef<HTMLButtonElement>(null);

  const handleSubjectSelect = (newSubject: Subject) => {
    onSubjectSelect(newSubject);
    setOpenSubject(false);
  };

  const handleLevelSelect = (newLevel: Level) => {
    onLevelSelect(newLevel);
    setOpenLevel(false);
  };

  const handleClearFilters = () => {
    setIsClearing(true);
    setTimeout(() => {
      onClearFilters();
      setIsClearing(false);
    }, 300);
  };

  const selectedSubject = subjectsWithLevels.find((s) => s.id === subject);
  const selectedLevel = selectedSubject?.levels.find((l) => l.id === level);

  return (
    <div className="bg-background p-6 rounded-lg shadow-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label className="mb-2 block">Subject</Label>
          <Popover open={openSubject} onOpenChange={setOpenSubject}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openSubject}
                className="w-full justify-between"
              >
                {selectedSubject ? selectedSubject.label : "Select subject..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="p-0 w-[var(--radix-popover-trigger-width)] min-w-[var(--radix-popover-trigger-width)]"
            >
              <Command className="w-full">
                <CommandInput
                  className="w-full"
                  placeholder="Search subject..."
                />
                <CommandList>
                  <CommandEmpty>No subject found.</CommandEmpty>
                  <CommandGroup>
                    {subjectsWithLevels.map((s) => (
                      <CommandItem
                        key={s.id}
                        value={s.id}
                        onSelect={() => handleSubjectSelect(s)}
                      >
                        {s.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label className="mb-2 block">Level</Label>
          <Popover open={openLevel} onOpenChange={setOpenLevel}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openLevel}
                className="w-full justify-between"
                disabled={!selectedSubject}
              >
                {selectedLevel ? selectedLevel.label : "Select level..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="p-0 w-[var(--radix-popover-trigger-width)] min-w-[var(--radix-popover-trigger-width)]"
            >
              <Command className="w-full">
                <CommandInput
                  className="w-full"
                  placeholder="Search level..."
                />
                <CommandList>
                  <CommandEmpty>No level found.</CommandEmpty>
                  <CommandGroup>
                    {selectedSubject?.levels.map((l) => (
                      <CommandItem
                        key={l.id}
                        value={l.id}
                        onSelect={() => handleLevelSelect(l)}
                      >
                        {l.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <AnimatePresence>
        {activeFiltersCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <div className="flex items-center justify-between p-2 bg-muted rounded-md">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {activeFiltersCount}{" "}
                  {activeFiltersCount === 1 ? "filter" : "filters"} applied
                </span>
              </div>
              <Button
                ref={clearButtonRef}
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
                className={`text-muted-foreground hover:text-foreground transition-all duration-300 ${
                  isClearing ? "scale-95 opacity-50" : ""
                }`}
                disabled={isClearing}
              >
                <span className="mr-2">Clear all</span>
                <motion.div
                  animate={isClearing ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-4 w-4" />
                </motion.div>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
