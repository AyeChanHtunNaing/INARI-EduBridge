export interface University {
  id: string;
  name: string;
  japaneseName: string;
  slug: string;
  location: string;
  prefecture: string;
  type: 'National' | 'Public' | 'Private';
  degreeLevels: string[]; // e.g. ["Undergraduate", "Master's", "PhD", "Short-term"]
  fieldsOfStudy: string[]; // e.g. ["Engineering", "Medicine", "Humanities", "Business"]
  languageOfInstruction: string[]; // e.g. ["Japanese", "English"]
  englishPrograms: boolean;
  tuitionEstimate: string; // e.g. "¥535,800 / year"
  scholarshipAvailable: boolean;
  admissionPeriods: string[]; // e.g. ["April", "October"]
  overview: string;
  programs: string[];
  requirements: string;
  contactEmail: string;
  officialWebsite: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}
