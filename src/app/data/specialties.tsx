import {
  Baby,
  Stethoscope,
  Heart,
  Brain,
  Users,
  Activity,
  Scissors,
  Droplet,
  Sparkles,
  Ear,
  Eye,
  Smile,
  Laugh,
  Bone,
} from "lucide-react";
import { JSX } from "react";

export interface Specialty {
  title: string;
  icon: JSX.Element;
  description: string;
}

export const specialties: Specialty[] = [
  {
    icon: <Baby size={48} className="text-blue-500" />,
    title: "Pediatrics",
    description: "Comprehensive care for infants, children, and adolescents.",
  },
  {
    icon: <Stethoscope size={48} className="text-blue-500" />,
    title: "Medicine",
    description: "Primary and preventive care for adults of all ages.",
  },
  {
    icon: <Heart size={48} className="text-blue-500" />,
    title: "Cardiology",
    description: "Heart health specialists offering advanced treatment and care.",
  },
  {
    icon: <Brain size={48} className="text-blue-500" />,
    title: "Neurology",
    description: "Expert diagnosis and management of neurological conditions.",
  },
  {
    icon: <Bone size={48} className="text-blue-500" />,
    title: "Orthopaedics",
    description: "Bone, joint, and muscle care by experienced specialists.",
  },
  {
    icon: <Users size={48} className="text-blue-500" />,
    title: "OBGY",
    description: "Women's health, pregnancy care, and reproductive services.",
  },
  {
    icon: <Activity size={48} className="text-blue-500" />,
    title: "Physiotherapy",
    description: "Rehabilitation and mobility improvement programs.",
  },
  {
    icon: <Scissors size={48} className="text-blue-500" />,
    title: "Surgery",
    description: "Surgical care for common and complex health conditions.",
  },
  {
    icon: <Laugh size={48} className="text-blue-500" />,
    title: "Dental",
    description: "Complete oral health and dental care services.",
  },
  {
    icon: <Droplet size={48} className="text-blue-500" />,
    title: "Nephrology",
    description: "Specialized care for kidney health and related disorders.",
  },
  {
    icon: <Sparkles size={48} className="text-blue-500" />,
    title: "Dermatology",
    description: "Skin, hair, and nail care by expert dermatologists.",
  },
  {
    icon: <Ear size={48} className="text-blue-500" />,
    title: "ENT",
    description: "Comprehensive care for ear, nose, and throat conditions.",
  },
  {
    icon: <Eye size={48} className="text-blue-500" />,
    title: "Ophthalmology",
    description: "Eye care services including vision correction and surgery.",
  },
  {
    icon: <Smile size={48} className="text-blue-500" />,
    title: "Psychiatry",
    description:
      "Mental health services for emotional and behavioral wellbeing.",
  },
];
