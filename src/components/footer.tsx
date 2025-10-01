import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company Info */}
          <div className="max-w-md space-y-4">
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

          {/* Contact Info */}
          <div className="max-w-md">
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
                  123 Health Street, Medical District, <br />
                  Mumbai, Maharashtra 400001
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (simplified) */}
        <div className="border-t border-gray-800 mt-4 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Unity Health India. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Created with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
};
