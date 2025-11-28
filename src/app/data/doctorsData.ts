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
    specialty: "MBBS, MS (Orthopedics), Fellowship in Spine Surgery",
    image: "/doctors/bhau-doc.png",
    info: "Experienced orthopedic surgeon specializing in Spinal surgeries.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:rajesh@example.com",
    },
  },
  {
    name: "Dr. Akshata Chabukswar",
    specialty: "Bachelor of Dental Surgery (BDS)",
    image: "/doctors/akshu-doc.jpg",
    info: "Expert in cosmetic dentistry and orthodontics.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:priya@example.com",
    },
  },
  {
    name: "Dr. Aishwarya Chavarkar",
    specialty: "MBBS, MS (General Surgery), Fellowship in Breast Oncology",
    image: "/doctors/aishwarya-doc.jpg",
    info: "Trusted family doctor, known for holistic treatments.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:amit@example.com",
    },
  },
  {
    name: "Dr. Shruti Rane",
    specialty: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
    image: "/doctors/shruti-doc.jpg",
    info: "Skilled doctor with expertise in general medicine and surgery.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com",
    },
  },
  {
    name: "Dr. Smriti Yadav",
    specialty: "Physiotherapist",
    image: "/doctors/smriti-doc.jpg",
    info: "Expert in neuro physiotherapy and rehabilitation with 8+ years of experience.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com",
    },
  },
  {
    name: "Dr. Shubhamkar Nazikar",
    specialty: "MBBS | MD (General Medicine)",
    image: "/doctors/shubhamkar-doc.jpg",
    info: "Experienced in internal medicine with a focus on chronic illnesses.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com",
    },
  },
  {
    name: "Dr. Shradha Vohra",
    specialty: "MBBS, MS (Obstetrics & Gynecology), F.MAS, D.MAS, F.I.H",
    image: "/doctors/shradha-doc.jpg",
    info: "Experienced in internal medicine with a focus on chronic illnesses.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com",
    },
  },
  {
    name: "Dr. Sreya Kiran",
    specialty: "MBBS, MD Dermatology",
    image: "/doctors/sreya-doc.jpg",
    info: "Experienced in internal medicine with a focus on chronic illnesses.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com",
    },
  },
  {
    name: "Dr. Rupali Naidu",
    specialty: "MBBS, MD pediatrics, fellowship in PGPN",
    image: "/doctors/rupali-doc.jpg",
    info: "Experienced in internal medicine with a focus on chronic illnesses.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com",
    },
  },
];
