'use client';

import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, CheckCircle, AlertTriangle,
  Send, HelpCircle, GraduationCap, Clock
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';

export default function ContactPage() {
  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [intake, setIntake] = useState('Autumn 2026');
  const [major, setMajor] = useState('');
  const [message, setMessage] = useState('');

  // Submit and validation status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  // Client validation
  const validateForm = () => {
    if (!name.trim()) return "Please enter your full name.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email address.";
    if (!major.trim()) return "Please enter your intended major/field of study.";
    if (!message.trim()) return "Please type your inquiry message.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    setSubmitStatus('idle');

    const err = validateForm();
    if (err) {
      setValidationError(err);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, intake, major, message }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setMajor('');
        setMessage('');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Path Breadcrumbs */}
      <Breadcrumb items={[{ label: 'Contact Us' }]} className="mb-6" />

      {/* Page Header */}
      <SectionHeader
        badge="Direct Inquiry"
        title="Get in Touch with Our Advisors"
        subtitle="Have questions about admissions, prefecture housing, MEXT exam preparation, or JLPT certifications? Submit an inquiry and our expert local counselors will assist you shortly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        {/* Left Interactive Inquiry Form */}
        <div className="lg:col-span-2 bg-white border border-cream rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          <h2 className="text-lg font-bold font-display text-charcoal mb-6 border-b border-cream pb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span>Academic Counseling Inquiry Form</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Validation errors alert */}
            {validationError && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-xs font-bold rounded-xl flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Success state display */}
            {submitStatus === 'success' && (
              <div className="p-5 bg-green-50 border border-green-100 text-green-800 text-xs sm:text-sm font-bold rounded-2xl flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-charcoal mb-1">Inquiry Submitted Successfully!</p>
                  <p className="text-muted leading-relaxed font-semibold">Thank you for contacting INARI. Our study-in-Japan counseling department has logged your profile and will follow up with email resources shortly.</p>
                </div>
              </div>
            )}

            {/* Error state display */}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-xs font-bold rounded-xl flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Inquiry submission failed. Please try again later or email us directly.</span>
              </div>
            )}

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Su Wady"
                  className="w-full bg-white border border-beige hover:border-primary/30 focus:border-primary rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                />
              </div>

              {/* Email address */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. suwady@example.com"
                  className="w-full bg-white border border-beige hover:border-primary/30 focus:border-primary rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +95 9 123 45678"
                  className="w-full bg-white border border-beige hover:border-primary/30 focus:border-primary rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                />
              </div>

              {/* Preferred Intake Semester */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                  Preferred Intake
                </label>
                <select
                  value={intake}
                  onChange={(e) => setIntake(e.target.value)}
                  className="w-full bg-white border border-beige rounded-xl py-3 px-4 text-xs font-semibold focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                >
                  <option value="Autumn 2026">Autumn Semester 2026</option>
                  <option value="Spring 2027">Spring Semester 2027</option>
                  <option value="Autumn 2027">Autumn Semester 2027</option>
                  <option value="Language School Track">Language Academy Track First</option>
                </select>
              </div>
            </div>

            {/* Intended Major */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                Intended Major / Field of Study <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                placeholder="e.g. Business Administration / Computer Science"
                className="w-full bg-white border border-beige hover:border-primary/30 focus:border-primary rounded-xl py-3 px-4 text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                Message / Specific Questions <span className="text-primary">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please describe your background, Japanese language level, and specific questions regarding MEXT or admissions processes..."
                rows={5}
                className="w-full bg-white border border-beige hover:border-primary/30 focus:border-primary rounded-2xl py-3 px-4 text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-200"
              />
            </div>

            {/* Submit Trigger */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Submitting Form...' : 'Submit Inquiry'}</span>
              <Send className="w-4 h-4 shrink-0" />
            </button>
          </form>
        </div>

        {/* Right Info Sidebar (Office locations, support lines) */}
        <aside className="space-y-8">

          {/* Offices locations Card */}
          <div className="bg-cream/15 border border-cream rounded-3xl p-6 space-y-4">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-3 border-b border-cream">
              Admissions Helpline
            </h3>

            <div className="space-y-4 font-sans text-xs font-semibold text-muted">
              {/* Direct email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-charcoal mb-0.5">Admissions Mail</p>
                  <a href="mailto:support@inarihub.com" className="text-primary hover:underline text-xs">
                    support@inarihub.com
                  </a>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-charcoal mb-0.5">Direct Helpline</p>
                  <a href="tel:+959123456" className="text-charcoal text-xs">
                    +95 9 123 456 (Yangon Branch)
                  </a>
                </div>
              </div>

              {/* Work Hours */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-charcoal mb-0.5">Counseling Hours</p>
                  <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Counseling note */}
          <div className="bg-white border border-cream rounded-3xl p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-primary shadow-inner">
              <HelpCircle className="w-5 h-5" />
            </div>

            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-2 border-b border-cream">
              Free Support Policy
            </h3>

            <p className="text-xs text-muted leading-relaxed font-semibold">
              All initial consultations regarding university program selections, scholarship guides, and visa checklists at INARI are <strong>completely free of charge</strong>. We never request advanced payments or hidden agency contract fees.
            </p>
          </div>

        </aside>

      </div>

    </div>
  );
}
