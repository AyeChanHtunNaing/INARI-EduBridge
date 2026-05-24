import React from 'react';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { Send, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: 'Home Landing', href: '/' },
    { name: 'Japanese Universities', href: '/universities' },
    { name: 'Scholarship Finder', href: '/scholarships' },
    { name: 'Study in Japan Guide', href: '/study-guide' },
  ];

  const studentLinks = [
    { name: 'Student Life', href: '/student-life' },
    { name: 'Blog & News Hub', href: '/blog' },
    { name: 'About EduBridge', href: '/about' },
    { name: 'Direct Contact', href: '/contact' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: 'https://facebook.com' 
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ), 
      href: 'https://instagram.com' 
    },
    { 
      name: 'YouTube', 
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.524 0-9.388.51a3.003 3.003 0 0 0-2.11 2.108C0 8.028 0 12 0 12s0 3.972.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.476 20.455 12 20.455 12 20.455s7.524 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.972 24 12 24 12s0-3.972-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      href: 'https://youtube.com' 
    },
    { name: 'Telegram', icon: <Send className="w-4 h-4" />, href: 'https://telegram.org' },
  ];

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-primary mb-5">
              Explore Programs
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center group gap-1"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-primary mb-5">
              Resources & Info
            </h3>
            <ul className="space-y-3">
              {studentLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center group gap-1"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Legal Disclaimer */}
          <div>
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-red-400 mb-5">
              Important Disclaimer
            </h3>
            <div className="p-4 bg-white/5 border-l-2 border-red-400 rounded-r-lg">
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Students should always confirm final admission requirements, tuition estimates, and visa application details directly from official university portals or embassy websites before submitting applications.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            &copy; {currentYear} INARI EduBridge. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center sm:text-right flex items-center gap-1 font-semibold">
            Powered by <a href="https://inarihub.com" className="text-primary hover:underline">INARI Japanese Language Hub</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
