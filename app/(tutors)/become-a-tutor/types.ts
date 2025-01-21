import * as z from "zod";

export const currentYear = new Date().getFullYear();
export const years = Array.from(
  { length: 100 },
  (_, i) => currentYear - i - 18,
);
export const months = [
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

export const formSchema = z.object({
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
    .refine(
      (val) => {
        const digitsOnly = val.replace(/\s/g, "");
        return digitsOnly.length === 0 || /^(\d{4,5}|\d{10})$/.test(digitsOnly);
      },
      {
        message: "Invalid UK mobile number",
      },
    ),
  dbs: z
    .instanceof(File)
    .refine((file) => file instanceof File, {
      message: "DBS certificate is required.",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "DBS file must be 5MB or less.",
    }),
  id: z
    .instanceof(File)
    .refine((file) => file instanceof File, {
      message: "ID document is required.",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "ID file must be 5MB or less.",
    }),
  cv: z
    .instanceof(File)
    .refine((file) => file instanceof File, { message: "CV is required." })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "CV file must be 5MB or less.",
    }),
});

export type FormValues = z.infer<typeof formSchema>;

export type Step = 1 | 2 | 3 | 4;
