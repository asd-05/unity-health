import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Specialties", href: "#specialties" },
    { label: "Doctors", href: "#doctors" },
    { label: "OPD Booking", href: "#book" },
  ];

  const services = [
    { label: "Emergency Care", href: "#" },
    { label: "Laboratory", href: "#" },
    { label: "Pharmacy", href: "#" },
    { label: "Health Checkup", href: "#" },
    { label: "Telemedicine", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              <span className="text-blue-400">Unity Health</span> India
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Providing world-class healthcare services with compassion and
              excellence. Your health is our priority.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 12345 67890</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-400">info@unityhealthindia.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-400">
                  123 Health Street, Medical District, Mumbai, Maharashtra 400001
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2025 Unity Health India. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};