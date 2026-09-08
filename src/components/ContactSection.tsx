import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setSuccessMessage(
        `Thank you ${formData.name.trim()}! Your message has been received. Bharath VT will get back to you shortly.`
      );
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="space-y-8 pt-8 pb-4">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <span className="font-mono text-xs text-[#8ed5ff] tracking-wider uppercase font-semibold">
          DIRECT CHANNELS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#dfe2f1] tracking-tight">
          Get in Touch
        </h2>
        <p className="text-sm md:text-base text-[#bdc8d1] max-w-xl">
          Feel free to reach out for academic discussions, collaborative tech projects, or internships.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#8ed5ff] to-transparent rounded-full mt-1"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contact Details Card */}
        <div
          id="contact-info-card"
          className="lg:col-span-5 p-6 md:p-8 rounded-2xl glass-card border border-[#3e484f]/40 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-[#dfe2f1] mb-1">{PERSONAL_INFO.name}</h3>
              <p className="text-xs sm:text-sm text-[#8ed5ff] font-mono">
                {PERSONAL_INFO.institution} • AI &amp; Data Science
              </p>
            </div>

            <div className="space-y-3">
              {/* Phone */}
              <a
                id="contact-phone-link"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#1c1f2a] hover:bg-[#262a35] border border-[#3e484f]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#171b26] flex items-center justify-center text-[#8ed5ff] group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#87929a]">Phone</p>
                  <p className="text-sm font-medium text-[#dfe2f1] group-hover:text-[#8ed5ff] transition-colors">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                id="contact-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#1c1f2a] hover:bg-[#262a35] border border-[#3e484f]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#171b26] flex items-center justify-center text-[#8ed5ff] group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#87929a]">Email</p>
                  <p className="text-sm font-medium text-[#dfe2f1] group-hover:text-[#8ed5ff] transition-colors">
                    {PERSONAL_INFO.displayEmail}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#1c1f2a] border border-[#3e484f]/30">
                <div className="w-10 h-10 rounded-lg bg-[#171b26] flex items-center justify-center text-[#8ed5ff]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-[#87929a]">Location</p>
                  <p className="text-sm font-medium text-[#dfe2f1]">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-[#3e484f]/30">
            <p className="font-mono text-xs text-[#87929a] uppercase tracking-wider mb-3">
              CONNECT ONLINE
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                id="social-github-link"
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1c1f2a] hover:bg-[#8ed5ff]/15 hover:text-[#8ed5ff] border border-[#3e484f]/40 text-[#dfe2f1] font-mono text-xs flex items-center gap-1.5 transition-all"
              >
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                id="social-linkedin-link"
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1c1f2a] hover:bg-[#8ed5ff]/15 hover:text-[#8ed5ff] border border-[#3e484f]/40 text-[#dfe2f1] font-mono text-xs flex items-center gap-1.5 transition-all"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                id="social-kaggle-link"
                href={PERSONAL_INFO.social.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1c1f2a] hover:bg-[#8ed5ff]/15 hover:text-[#8ed5ff] border border-[#3e484f]/40 text-[#dfe2f1] font-mono text-xs flex items-center gap-1.5 transition-all"
              >
                <span>Kaggle</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div
          id="contact-form-container"
          className="lg:col-span-7 p-6 md:p-8 rounded-2xl glass-card border border-[#3e484f]/40 flex flex-col justify-between"
        >
          {status === 'success' ? (
            <div className="py-12 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#8ed5ff]/20 text-[#8ed5ff] flex items-center justify-center mx-auto border border-[#8ed5ff]/40">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[#dfe2f1]">Message Sent!</h3>
              <p className="text-sm text-[#bdc8d1] max-w-md mx-auto leading-relaxed">
                {successMessage}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 rounded-full bg-[#1c1f2a] hover:bg-[#262a35] border border-[#3e484f] text-[#8ed5ff] font-mono text-xs transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name-input"
                  className="block font-mono text-xs text-[#bdc8d1] mb-1.5 font-medium"
                >
                  Full Name
                </label>
                <input
                  id="contact-name-input"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0e18]/80 border border-[#3e484f]/40 text-[#dfe2f1] placeholder:text-[#87929a] focus:outline-none focus:border-[#8ed5ff] focus:ring-1 focus:ring-[#8ed5ff] text-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email-input"
                  className="block font-mono text-xs text-[#bdc8d1] mb-1.5 font-medium"
                >
                  Email Address
                </label>
                <input
                  id="contact-email-input"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0e18]/80 border border-[#3e484f]/40 text-[#dfe2f1] placeholder:text-[#87929a] focus:outline-none focus:border-[#8ed5ff] focus:ring-1 focus:ring-[#8ed5ff] text-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message-input"
                  className="block font-mono text-xs text-[#bdc8d1] mb-1.5 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message-input"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0e18]/80 border border-[#3e484f]/40 text-[#dfe2f1] placeholder:text-[#87929a] focus:outline-none focus:border-[#8ed5ff] focus:ring-1 focus:ring-[#8ed5ff] text-sm transition-all resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-900/30 border border-red-500/40 text-red-300 text-xs">
                  <AlertCircle size={15} />
                  <span>Please fill in all required fields before submitting.</span>
                </div>
              )}

              <button
                id="contact-submit-button"
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#bdc2ff] text-[#0a0e18] font-bold text-sm tracking-tight shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
