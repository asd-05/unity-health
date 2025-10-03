"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = { name: "", phone: "", email: "", query: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.query.trim()) {
      newErrors.query = "Query is required";
      isValid = false;
    } else if (formData.query.trim().length < 10) {
      newErrors.query = "Query must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendQuery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", phone: "", email: "", query: "" });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Network error, please try again later.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-800/50 dark:to-slate-900 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-slate-800/50 text-blue-500 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact{" "}
            <span className="text-blue-500 dark:text-blue-400">
              Unity Health
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Have questions? We're here to help. Send us your queries and we'll
            get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Reach Out to Our Team
              </h3>
              <p className="text-foreground/70 mb-8">
                Our dedicated team is available to answer your questions and
                help you with appointments, medical inquiries, and general
                information.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-foreground">
                    Phone
                  </h4>
                  <p className="text-foreground/70">+91 84336 33297</p>
                  <p className="text-foreground/70">+91 96640 10041</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-foreground">
                    Email
                  </h4>
                  <p className="text-foreground/70">
                    unityhealthindia@gmail.com
                  </p>
                  <p className="text-foreground/70">
                    support@unityhealthindia.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Send Us a Message
            </h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/50 rounded-xl text-green-800 dark:text-green-200">
                <p className="font-semibold">Success!</p>
                <p className="text-sm">
                  Your query has been submitted. We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-border focus:ring-primary dark:focus:ring-blue-400"
                  } focus:ring-2 focus:outline-none transition-all`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-border focus:ring-primary dark:focus:ring-blue-400"
                  } focus:ring-2 focus:outline-none transition-all`}
                  placeholder="Enter 10-digit phone number"
                  maxLength={10}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-border focus:ring-primary dark:focus:ring-blue-400"
                  } focus:ring-2 focus:outline-none transition-all`}
                  placeholder="Enter your email address"
                  maxLength={100}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="query"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
                  Your Query <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  rows={2}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.query
                      ? "border-red-500 focus:ring-red-500"
                      : "border-border focus:ring-primary dark:focus:ring-blue-400"
                  } focus:ring-2 focus:outline-none transition-all resize-none`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.query && (
                  <p className="mt-2 text-sm text-red-500">{errors.query}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
