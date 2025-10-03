export interface Doctor {
  name: string;
  specialty: string;
  image: string;
  info: string;
  socials: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Abhishek Chabukswar",
    specialty: "Orthopedic Surgeon",
    image: "/doctors/bhau-doc.png",
    info: "20+ years of experience, specialized in heart surgeries and treatments.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:rajesh@example.com",
    },
  },
  {
    name: "Dr. Akshata Chabukswar",
    specialty: "Dentist",
    image: "/doctors/akshu-doc.png",
    info: "Expert in brain and spine disorders, practicing at Apollo Hospital.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:priya@example.com",
    },
  },
  {
    name: "Dr. Abhishek Chabukswar",
    specialty: "Orthopedic Surgeon",
    image: "/doctors/bhau-doc.png",
    info: "Trusted family doctor, known for holistic treatments.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:amit@example.com",
    },
  },
  {
    name: "Dr. Akshata Chabukswar",
    specialty: "Dentist",
    image: "/doctors/akshu-doc.png",
    info: "Cosmetic and pediatric dentistry expert with 10+ years of experience.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com",
    },
  },
];
