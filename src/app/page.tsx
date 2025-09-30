import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SpecialtiesSection } from "@/components/specialties-section";
import { DoctorsSection } from "@/components/doctors-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <DoctorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}