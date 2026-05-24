import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'INARI EduBridge | Your Gateway to Study in Japan',
  description: 'Explore top Japanese universities, discover fully-funded scholarships, navigate admission guidelines, and secure visa counseling with INARI Japanese Language Hub.',
  keywords: ['Study in Japan', 'Japanese Universities', 'MEXT Scholarship', 'JASSO Honors Scholarship', 'INARI Japanese Language Hub', 'EJU Exam', 'JLPT Exam'],
  openGraph: {
    title: 'INARI EduBridge | Your Gateway to Study in Japan',
    description: 'Aggregating top Japanese universities, dynamic scholarships, and visual timelines for international student guidance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'INARI EduBridge',
  },
  icons: {
    icon: '/logo/inari-logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Fallback Favicon styling */}
        <link rel="icon" href="/logo/inari-logo.png" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
