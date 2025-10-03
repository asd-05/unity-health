import {
  IndianRupee,
  Clock,
  Video,
  FileText,
  ShieldCheck,
  Languages,
} from "lucide-react";

export const features = [
  {
    icon: IndianRupee,
    title: "Affordable Consultations",
    description:
      "Transparent and low-cost consultations, pay what you can with no hidden charges.",
  },
  {
    icon: Clock,
    title: "Expert Doctors On-Demand",
    description: (
      <>
        Get expert medical advice{" "}
        <span className="font-semibold">anywhere</span> — no more long waiting
        queues.
      </>
    ),
  },
  {
    icon: Video,
    title: "Video & Audio Calls",
    description:
      "Seamless online consultations with HD video or quick audio calls for your convenience.",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description:
      "Instant, secure prescriptions you can download, store, and reuse easily.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Doctors",
    description:
      "Trusted, experienced doctors with verified credentials for genuine healthcare.",
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description:
      "Consult in your preferred regional language for comfort, clarity, and better care.",
  },
];
