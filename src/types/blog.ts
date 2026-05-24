export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Scholarship' | 'Admission' | 'Study Tips' | 'University Spotlight' | 'Student Story' | 'Japan News';
  summary: string;
  content: string; // Markdown or rich HTML text
  coverImage: string;
  publishedAt: string;
  readingTime: string; // e.g. "5 min read"
  author: string;
  createdAt: string;
  updatedAt: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  preferredIntake: string;
  intendedMajor: string;
  message: string;
  createdAt: string;
}
