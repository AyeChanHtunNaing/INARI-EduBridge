import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { Badge } from '../ui/Badge';

interface BlogCardProps {
  blog: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  // Format Date cleanly
  const formattedDate = new Date(blog.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <article className="group bg-white rounded-3xl border border-cream hover:border-primary/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-48 w-full bg-cream overflow-hidden">
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream to-beige text-primary">
            <span className="font-display font-black text-4xl opacity-20">INARI</span>
          </div>
        )}
        
        {/* Category Badge overlay */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="secondary">
            {blog.category}
          </Badge>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Author / Date Details */}
        <div className="flex flex-wrap items-center gap-3 text-[10px] text-muted font-bold font-sans uppercase mb-3.5">
          <div className="flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-primary" />
            <span>{blog.author}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold font-display text-charcoal leading-snug group-hover:text-primary transition-colors mb-3 line-clamp-2">
          <Link href={`/blog/${blog.slug}`}>
            {blog.title}
          </Link>
        </h3>

        {/* Short Summary */}
        <p className="text-xs text-muted leading-relaxed mb-6 flex-1 line-clamp-3 font-medium">
          {blog.summary}
        </p>

        {/* Read More Bottom Bar */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary-dark">
          <div className="flex items-center gap-1 text-[10px] text-muted font-bold">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>{blog.readingTime}</span>
          </div>
          
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-1 text-primary hover:text-primary-dark transition-colors group/btn"
          >
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </article>
  );
};
export default BlogCard;
