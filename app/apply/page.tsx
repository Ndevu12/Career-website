"use client";

import { useState } from "react";
import { opportunities } from "@/src/lib/opportunities-data";
import Link from "next/link";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    background: "",
    motivation: "",
    goals: "",
    technicalExperience: "",
    desiredStartDate: "",
    availability: "flexible",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.program) newErrors.program = "Please select an opportunity";
    if (!formData.motivation.trim())
      newErrors.motivation = "Please tell us your motivation";
    if (!formData.goals.trim())
      newErrors.goals = "Please share your career goals";
    if (!formData.terms) newErrors.terms = "You must agree to the terms";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        program: "",
        background: "",
        motivation: "",
        goals: "",
        technicalExperience: "",
        desiredStartDate: "",
        availability: "flexible",
        terms: false,
      });
      setSubmitted(false);
    }, 5000);
  };

  if (submitted) {
    return (
      <>
        <main>
          <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 gradient-hero">
            <div className="max-w-2xl mx-auto text-center text-white animate-fade-in-up">
              <div className="text-6xl mb-4">✓</div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                Application Submitted Successfully!
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Thank you for your interest in GEOFINDA Tech Hub. We've received
                your application and will review it shortly.
              </p>
              <p className="text-white/80 mb-8">
                You'll hear from our team within 2-3 business days. In the
                meantime, feel free to explore our internship tracks and
                resources.
              </p>
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                Return to Home
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Join{" "}
              <span className="text-gradient-brand">GEOFINDA Tech Hub</span>
            </h1>
            <p className="text-xl text-white/90">
              Complete your application in just a few minutes. Let's get you
              started on your tech career journey.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 animate-fade-in-up"
            >
              {/* Personal Information */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Personal Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Opportunity Selection
                </h2>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Choose Your Opportunity *
                  </label>
                  <select
                    name="program"
                    aria-label="Select Opportunity"
                    value={formData.program}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition ${
                      errors.program ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select an opportunity...</option>
                    {opportunities.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.title}
                      </option>
                    ))}
                  </select>
                  {errors.program && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.program}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Desired Start Date
                  </label>
                  <input
                    type="date"
                    name="desiredStartDate"
                    aria-label="Desired Start Date"
                    value={formData.desiredStartDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Availability
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    aria-label="Availability"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    <option value="full-time">Full-time commitment</option>
                    <option value="part-time">
                      Part-time (working or studying)
                    </option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                </div>
              </div>

              {/* Background & Experience */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Background & Experience
                </h2>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Current Background
                  </label>
                  <select
                    name="background"
                    aria-label="Current Background"
                    value={formData.background}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    <option value="">Select your background...</option>
                    <option value="student">Student</option>
                    <option value="recent-grad">Recent Graduate</option>
                    <option value="career-change">Career Change</option>
                    <option value="employed">Currently Employed</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Technical Experience
                  </label>
                  <textarea
                    name="technicalExperience"
                    value={formData.technicalExperience}
                    onChange={handleChange}
                    placeholder="Tell us about any programming or tech experience you have..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Motivation & Goals */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Your Motivation & Goals
                </h2>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    What motivates you to join GEOFINDA Tech Hub? *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Share what excites you about this opportunity..."
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition ${
                      errors.motivation ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.motivation && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.motivation}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    What are your career goals? *
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="Where do you see yourself in 2 years?"
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition ${
                      errors.goals ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.goals && (
                    <p className="text-red-500 text-sm mt-1">{errors.goals}</p>
                  )}
                </div>
              </div>

              {/* Terms */}
              <div className="bg-gradient-to-r from-[#4CC3E0]/10 to-[#A6D93A]/10 border border-[#4CC3E0]/30 rounded-lg p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 accent-primary"
                  />
                  <span className="text-gray-700">
                    I agree to the terms and conditions and understand that this
                    is an application for a GEOFINDA Tech Hub opportunity
                    (academic or professional internship, or job placement).
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-sm mt-2">{errors.terms}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Submit Application
              </button>

              <p className="text-center text-gray-600 text-sm">
                By submitting this form, you're taking the first step toward an
                exciting tech career with{" "}
                <span className="font-bold text-gradient-brand">
                  GEOFINDA Tech Hub
                </span>
                .
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
