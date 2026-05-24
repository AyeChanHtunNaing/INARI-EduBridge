export interface Scholarship {
  id: string;
  name: string;
  slug: string;
  provider: string;
  category: 'MEXT' | 'JASSO' | 'University' | 'Private Foundation' | 'Embassy Recommendation' | 'Local Government';
  degreeLevel: string[]; // e.g. ["Undergraduate", "Master's", "PhD"]
  eligibleNationalities: string[]; // e.g. ["All", "Southeast Asia", "Developing Countries"]
  benefits: string;
  monthlyStipend?: string; // e.g. "¥117,000 - ¥145,000"
  tuitionCoverage: 'Full' | 'Partial' | 'None';
  deadline: string; // e.g. "2026-09-30" or "Ongoing"
  applicationMethod: string; // e.g. "University Recommendation" or "Direct Application"
  applyFromAbroad: boolean;
  requiredDocuments: string[]; // e.g. ["Application Form", "Transcripts", "Study Plan"]
  officialLink: string;
  notes?: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}
