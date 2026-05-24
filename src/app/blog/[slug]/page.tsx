import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, BookOpen } from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/dynamodb';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get other recommended articles
  const allPosts = await getBlogPosts();
  const otherPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Path Breadcrumbs */}
      <Breadcrumb 
        items={[
          { label: 'Blog', href: '/blog' }, 
          { label: post.title }
        ]} 
        className="mb-6" 
      />

      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary font-bold font-sans uppercase mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-primary" />
        <span>Back to Blog Directory</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left main article area */}
        <article className="lg:col-span-2 space-y-6 bg-white border border-cream rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          
          {/* Header Metadata */}
          <div className="space-y-4">
            <Badge variant="secondary" className="font-extrabold uppercase text-[10px]">
              {post.category}
            </Badge>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-black font-display text-charcoal leading-tight">
              {post.title}
            </h1>

            {/* Author / Date / Read Time */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted font-bold font-sans uppercase border-y border-cream/50 py-3">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" />
                <span className="text-charcoal">{post.author}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{formattedDate}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>

          {/* Cover image banner */}
          {post.coverImage && (
            <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-cream border border-cream/50 relative">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Markdown / Paragraph content */}
          <div className="font-sans text-xs sm:text-sm text-muted leading-relaxed font-semibold space-y-6 pt-4">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('###')) {
                return (
                  <h3 key={index} className="text-sm sm:text-base font-bold font-display text-charcoal pt-4 border-b border-cream pb-2">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              return (
                <p key={index} className="whitespace-pre-wrap">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>

        </article>

        {/* Right Recommended Posts Sidebar */}
        <aside className="space-y-8">
          
          {/* Related Articles sidebar */}
          <div className="bg-cream/15 border border-cream rounded-3xl p-6 shadow-xs">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-3 border-b border-cream mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Recommended Guides</span>
            </h3>

            {otherPosts.length === 0 ? (
              <p className="text-xs text-muted font-bold text-center py-4">No other articles cataloged.</p>
            ) : (
              <div className="space-y-4">
                {otherPosts.map((other) => (
                  <div key={other.id} className="p-3 bg-white hover:bg-cream/10 rounded-2xl border border-cream/50 transition-colors">
                    <span className="text-[9px] text-primary-dark font-black tracking-widest uppercase block mb-1">
                      {other.category}
                    </span>
                    <Link 
                      href={`/blog/${other.slug}`}
                      className="text-xs font-bold text-charcoal leading-snug hover:text-primary transition-colors block mb-2"
                    >
                      {other.title}
                    </Link>
                    <span className="text-[10px] text-muted font-medium">{other.readingTime} read</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* INARI Social Sidebar card */}
          <div className="bg-charcoal text-white rounded-3xl p-6 space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-wave-pattern opacity-5 pointer-events-none"></div>
            <span className="text-[9px] bg-primary text-white px-2 py-0.5 rounded-full font-black uppercase tracking-widest leading-none inline-block">
              Study Hub
            </span>
            <h3 className="text-sm font-bold font-display uppercase tracking-wider">
              Need personalized advice?
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-sans font-medium">
              Subscribe to the INARI Japanese Language Hub newsletters or reach out for free expert guides on studying abroad in Japan.
            </p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold shadow-sm transition-colors duration-200"
            >
              <span>Speak to an Expert</span>
            </Link>
          </div>

        </aside>

      </div>

    </div>
  );
}
