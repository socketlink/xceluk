export type Subject = {
  id: string;
  label: string;
};

export type Level = {
  id: string;
  label: string;
};

export type Service = {
  id: string;
  subject: Subject;
  level: Level;
  price: number;
};

export type Tutor = {
  id: number;
  name: string;
  image: string;
  university: string;
  services: Service[];
  descriptions: {
    card: string;
    session: string;
    bio: string;
  };
};

export type SubjectWithLevels = {
  id: string;
  label: string;
  levels: Level[];
};

export const subjectsWithLevels: SubjectWithLevels[] = [
  {
    id: "math",
    label: "Mathematics",
    levels: [
      { id: "gcse", label: "GCSE" },
      { id: "alevel", label: "A-Level" },
      { id: "university", label: "University" },
    ],
  },
  {
    id: "physics",
    label: "Physics",
    levels: [
      { id: "gcse", label: "GCSE" },
      { id: "alevel", label: "A-Level" },
      { id: "university", label: "University" },
    ],
  },
  {
    id: "english",
    label: "English Literature",
    levels: [
      { id: "gcse", label: "GCSE" },
      { id: "alevel", label: "A-Level" },
      { id: "university", label: "University" },
    ],
  },
];

export const tutors: Tutor[] = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "https://i.pravatar.cc/150?img=1",
    university: "University of Cambridge",
    services: [
      {
        id: "math-gcse",
        subject: { id: "math", label: "Mathematics" },
        level: { id: "gcse", label: "GCSE" },
        price: 45,
      },
      {
        id: "math-alevel",
        subject: { id: "math", label: "Mathematics" },
        level: { id: "alevel", label: "A-Level" },
        price: 55,
      },
      {
        id: "physics-gcse",
        subject: { id: "physics", label: "Physics" },
        level: { id: "gcse", label: "GCSE" },
        price: 50,
      },
    ],
    descriptions: {
      card: "Experienced tutor specializing in Mathematics and Physics for GCSE and A-Level students.",
      session:
        "Interactive sessions focusing on problem-solving and exam techniques.",
      bio: "With over 5 years of tutoring experience, Alice is passionate about making complex concepts easy to understand.",
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "https://i.pravatar.cc/150?img=2",
    university: "Imperial College London",
    services: [
      {
        id: "physics-alevel",
        subject: { id: "physics", label: "Physics" },
        level: { id: "alevel", label: "A-Level" },
        price: 65,
      },
      {
        id: "physics-university",
        subject: { id: "physics", label: "Physics" },
        level: { id: "university", label: "University" },
        price: 80,
      },
    ],
    descriptions: {
      card: "University-level Physics expert with a focus on theoretical and applied physics.",
      session:
        "In-depth exploration of advanced physics topics with real-world applications.",
      bio: "Bob holds a PhD in Theoretical Physics and has been teaching at university level for over a decade.",
    },
  },
  {
    id: 3,
    name: "Carol Williams",
    image: "https://i.pravatar.cc/150?img=3",
    university: "University of Oxford",
    services: [
      {
        id: "english-gcse",
        subject: { id: "english", label: "English Literature" },
        level: { id: "gcse", label: "GCSE" },
        price: 40,
      },
      {
        id: "english-alevel",
        subject: { id: "english", label: "English Literature" },
        level: { id: "alevel", label: "A-Level" },
        price: 55,
      },
      {
        id: "english-university",
        subject: { id: "english", label: "English Literature" },
        level: { id: "university", label: "University" },
        price: 70,
      },
    ],
    descriptions: {
      card: "Passionate English Literature tutor covering GCSE to University levels.",
      session:
        "Engaging discussions on literary works, focusing on analysis and essay writing skills.",
      bio: "Carol is a published author with a Master's degree in English Literature, bringing creativity and academic rigor to her tutoring.",
    },
  },
];
