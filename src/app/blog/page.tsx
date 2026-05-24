import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import BlogCard from '@/components/cards/BlogCard';
import { getBlogPosts } from '@/lib/dynamodb';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Path Breadcrumbs */}
      <Breadcrumb items={[{ label: 'Blog' }]} className="mb-6" />

      {/* Header */}
      <SectionHeader
        badge="Study News & Advice"
        title="INARI Educational Blog"
        subtitle="Stay updated with MEXT scholarship schedules, JLPT prep tactics, Japanese cultural adjusters, and exclusive interviews with international students."
      />

      {posts.length === 0 ? (
        <div className="text-center py-20 text-muted font-bold">
          No educational blog posts cataloged. Check back soon for guides.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {posts.map((post) => (
            <BlogCard key={post.id} blog={post} />
          ))}
        </div>
      )}

    </div>
  );
}
