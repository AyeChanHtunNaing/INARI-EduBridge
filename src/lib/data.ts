import { University } from '@/types/university';
import { Scholarship } from '@/types/scholarship';
import { BlogPost } from '@/types/blog';

export const SAMPLE_UNIVERSITIES: University[] = [
  {
    id: 'uni-todai',
    name: 'The University of Tokyo',
    japaneseName: '東京大学 (Todai)',
    slug: 'university-of-tokyo',
    location: 'Bunkyo, Tokyo',
    prefecture: 'Tokyo',
    type: 'National',
    degreeLevels: ['Undergraduate', "Master's", 'PhD'],
    fieldsOfStudy: ['Engineering', 'Science', 'Medicine', 'Humanities', 'Social Sciences', 'Economics'],
    languageOfInstruction: ['Japanese', 'English'],
    englishPrograms: true,
    tuitionEstimate: '¥535,800 / year',
    scholarshipAvailable: true,
    admissionPeriods: ['April', 'October'],
    overview: 'Established in 1877, the University of Tokyo (Todai) is Japan\'s first and most prestigious national university. As a leading global research university, Todai offers world-class education across a vast spectrum of disciplines and has produced numerous Nobel laureates, prime ministers, and industry leaders.',
    programs: [
      'PEAK (Programs in English at Komaba) - International Program on Japan in East Asia',
      'PEAK - International Program on Environmental Sciences',
      'Global Science Course (GSC) - Chemistry Transfer Program',
      'Graduate Program on Environmental Sciences (GPES)',
      'International Graduate Program in Science (IGPS)'
    ],
    requirements: 'For English-taught undergraduate programs (PEAK), applicants must submit standardized test scores (SAT/ACT/IB/A-Levels), English proficiency scores (TOEFL iBT 100+ or IELTS 7.0+), high school transcripts, academic recommendations, and personal essays. Selected candidates are invited for an interview.',
    contactEmail: 'admissions.peak.c@gs.mail.u-tokyo.ac.jp',
    officialWebsite: 'https://www.u-tokyo.ac.jp/en/',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'uni-kyodai',
    name: 'Kyoto University',
    japaneseName: '京都大学 (Kyodai)',
    slug: 'kyoto-university',
    location: 'Sakyo, Kyoto',
    prefecture: 'Kyoto',
    type: 'National',
    degreeLevels: ['Undergraduate', "Master's", 'PhD'],
    fieldsOfStudy: ['Science', 'Engineering', 'Agriculture', 'Medicine', 'Humanities', 'Law'],
    languageOfInstruction: ['Japanese', 'English'],
    englishPrograms: true,
    tuitionEstimate: '¥535,800 / year',
    scholarshipAvailable: true,
    admissionPeriods: ['April', 'October'],
    overview: 'Kyoto University is renowned globally for its liberal academic culture and groundbreaking research achievements, especially in the natural sciences. Operating under the philosophy of "academic freedom," Kyodai is the second oldest national university in Japan and is home to the largest number of Nobel laureates in Asia.',
    programs: [
      'iUP (Kyoto University International Undergraduate Program) - Bilingual Degree',
      'Undergraduate International Course Program in Civil Engineering (ICP)',
      'Graduate School of Economics - East Asia Course',
      'International Graduate Program in Engineering (INTEG)'
    ],
    requirements: 'Kyoto iUP requires high school transcripts, English proficiency validation (TOEFL/IELTS), mathematics and science/humanities foundation tests, recommendations, and essays. It begins with intensive Japanese language preparation before transition to main coursework.',
    contactEmail: 'kyoto_iup@mail2.adm.kyoto-u.ac.jp',
    officialWebsite: 'https://www.kyoto-u.ac.jp/en',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'uni-handai',
    name: 'Osaka University',
    japaneseName: '大阪大学 (Handai)',
    slug: 'osaka-university',
    location: 'Suita, Osaka',
    prefecture: 'Osaka',
    type: 'National',
    degreeLevels: ['Undergraduate', "Master's", 'PhD'],
    fieldsOfStudy: ['Engineering', 'Science', 'Information Technology', 'Human Sciences', 'Medicine'],
    languageOfInstruction: ['Japanese', 'English'],
    englishPrograms: true,
    tuitionEstimate: '¥535,800 / year',
    scholarshipAvailable: true,
    admissionPeriods: ['April', 'October'],
    overview: 'Osaka University is a top-tier national university located in the economic heart of western Japan. Rooted in Kaitokudo and Tekijuku—merchant-supported academies of the Edo period—Osaka University prioritizes innovation, hands-on application, and close industry-academia collaboration.',
    programs: [
      'Human Sciences International Undergraduate Degree Program',
      'Chemistry and Biology Combined Major Program (CBCMP)',
      'International Physics Course (IPC) - Graduate Program',
      'Special Integrated Science Course (SISC)'
    ],
    requirements: 'Applicants for the Human Sciences and CBCMP programs must have finished 12 years of education, submit standardized scores (ACT, SAT, IB, etc.), provide TOEFL/IELTS certification, and participate in interview evaluations.',
    contactEmail: 'admission@osaka-u.ac.jp',
    officialWebsite: 'https://www.osaka-u.ac.jp/en',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'uni-tohoku',
    name: 'Tohoku University',
    japaneseName: '東北大学 (Tohokudai)',
    slug: 'tohoku-university',
    location: 'Sendai, Miyagi',
    prefecture: 'Miyagi',
    type: 'National',
    degreeLevels: ['Undergraduate', "Master's", 'PhD'],
    fieldsOfStudy: ['Materials Science', 'Engineering', 'Science', 'Medicine', 'Economics'],
    languageOfInstruction: ['Japanese', 'English'],
    englishPrograms: true,
    tuitionEstimate: '¥535,800 / year',
    scholarshipAvailable: true,
    admissionPeriods: ['April', 'October'],
    overview: 'Tohoku University is historically famous as Japan\'s first national university to admit female students and adopt an "open door" policy. Located in the beautiful "City of Trees" (Sendai), it is a powerhouse of research excellence, particularly in Materials Science, Physics, and Disaster Science.',
    programs: [
      'FGL (Future Global Leadership) Undergraduate Courses',
      'FGL - Advanced Molecular Chemistry (AMC)',
      'FGL - Applied Marine Biology (AMB)',
      'FGL - International Mechanical and Aerospace Engineering (IMAC-U)'
    ],
    requirements: 'Requires high school curriculum graduation, standardized exams (SAT/ACT/EJU/IB/A-Levels), English capability indices (TOEFL 79+ or IELTS 6.0+), and a basic science foundation depending on the program.',
    contactEmail: 'fgl-admission@grp.tohoku.ac.jp',
    officialWebsite: 'https://www.tohoku.ac.jp/en/',
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&q=80&w=800',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'uni-waseda',
    name: 'Waseda University',
    japaneseName: '早稲田大学 (Waseda)',
    slug: 'waseda-university',
    location: 'Shinjuku, Tokyo',
    prefecture: 'Tokyo',
    type: 'Private',
    degreeLevels: ['Undergraduate', "Master's", 'PhD'],
    fieldsOfStudy: ['Business', 'Economics', 'Political Science', 'Engineering', 'Humanities', 'International Studies'],
    languageOfInstruction: ['Japanese', 'English'],
    englishPrograms: true,
    tuitionEstimate: '¥1,200,000 - ¥1,700,000 / year',
    scholarshipAvailable: true,
    admissionPeriods: ['April', 'September'],
    overview: 'Founded in 1882, Waseda University is one of Japan\'s premier private institutions. Located in vibrant Tokyo, Waseda has a highly diverse international student body and is known for its energetic culture, prominent alumni network, and extensive English-taught degree portfolios.',
    programs: [
      'School of Political Science and Economics (SPSE) English Program',
      'School of International Liberal Studies (SILS)',
      'School of Social Sciences (TAISI Program)',
      'School of Creative Science and Engineering (English Program)'
    ],
    requirements: 'Undergraduate applications are submitted online. Candidates must supply standardized tests (SAT/ACT/IB), English scores (TOEFL/IELTS), high school transcripts, essays, and complete writing tasks and web interviews if required.',
    contactEmail: 'admission@list.waseda.jp',
    officialWebsite: 'https://www.waseda.jp/inst/admission/en/',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'uni-apu',
    name: 'Ritsumeikan Asia Pacific University',
    japaneseName: '立命館アジア太平洋大学 (APU)',
    slug: 'apu-ritsumeikan',
    location: 'Beppu, Oita',
    prefecture: 'Oita',
    type: 'Private',
    degreeLevels: ['Undergraduate', "Master's"],
    fieldsOfStudy: ['International Relations', 'Business Administration', 'Social Sciences', 'Sustainability Tourism'],
    languageOfInstruction: ['Japanese', 'English'],
    englishPrograms: true,
    tuitionEstimate: '¥1,300,000 - ¥1,500,000 / year',
    scholarshipAvailable: true,
    admissionPeriods: ['April', 'September'],
    overview: 'Ritsumeikan Asia Pacific University (APU) is a unique, fully bilingual university located in the hot-spring town of Beppu. APU boasts an exactly 50:50 ratio of domestic to international students representing over 100 countries, making it the most multicultural and active international campus environment in Japan.',
    programs: [
      'College of Asia Pacific Studies (APS)',
      'College of International Management (APM) - AACSB Accredited',
      'College of Sustainability and Tourism (ST)'
    ],
    requirements: 'APU welcomes applications from around the globe. Requirements include online application details, high school grades, recommendation letters, IELTS (6.0+) or TOEFL (79+), and an interactive online video assessment.',
    contactEmail: 'welcome@apu.ac.jp',
    officialWebsite: 'https://admissions.apu.ac.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&q=80&w=800',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'uni-tiu',
    name: 'Tokyo International University',
    japaneseName: '東京国際大学 (TIU)',
    slug: 'tokyo-international-university',
    location: 'Kawagoe, Saitama',
    prefecture: 'Saitama',
    type: 'Private',
    degreeLevels: ['Undergraduate', "Master's", 'PhD'],
    fieldsOfStudy: ['Business Economics', 'Digital Business & Innovation', 'International Relations'],
    languageOfInstruction: ['English'],
    englishPrograms: true,
    tuitionEstimate: '¥1,200,000 - ¥1,400,000 / year',
    scholarshipAvailable: true,
    admissionPeriods: ['April', 'September'],
    overview: 'Tokyo International University (TIU) offers fully accredited English-medium degree programs in its E-Track division. Known for its practical training, professional orientation, and brand new urban campus in central Tokyo (Ikebukuro), TIU provides high-quality education and high-impact career pathways for global students.',
    programs: [
      'E-Track Business Economics Major',
      'E-Track Digital Business & Innovation (DBI) Major',
      'E-Track International Relations Major'
    ],
    requirements: 'Requires high school completion credentials, English competency testing (TOEFL/IELTS/Duolingo), transcripts, and a detailed statement of purpose explaining study goals.',
    contactEmail: 'etrack-admissions@tiu.ac.jp',
    officialWebsite: 'https://www.tiu.ac.jp/etrack/',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  }
];

export const SAMPLE_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'sch-mext',
    name: 'MEXT Scholarship (Monbukagakusho)',
    slug: 'mext-scholarship',
    provider: 'Japanese Ministry of Education, Culture, Sports, Science and Technology',
    category: 'MEXT',
    degreeLevel: ['Undergraduate', "Master's", 'PhD', 'Short-term'],
    eligibleNationalities: ['All countries with diplomatic relations with Japan'],
    benefits: 'Full tuition exemption, monthly stipend, and round-trip economy airfare.',
    monthlyStipend: '¥117,000 - ¥145,000',
    tuitionCoverage: 'Full',
    deadline: '2026-05-31',
    applicationMethod: 'Embassy Recommendation or University Recommendation',
    applyFromAbroad: true,
    requiredDocuments: ['Application Form', 'Placement Preference Form', 'Academic Transcripts', 'Recommendation Letters', 'Medical Certificate', 'Study Plan (Research Students)'],
    officialLink: 'https://www.studyinjapan.go.jp/en/planning/scholarship/',
    notes: 'One of the most competitive and comprehensive scholarships worldwide. Embassy recommendations open around April/May each year in the applicant\'s home country. Highly recommended to start preparing documents at least 6 months in advance.',
    imageUrl: '/images/sch-mext.svg',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'sch-jasso',
    name: 'JASSO Honors Scholarship for Privately-Financed International Students',
    slug: 'jasso-scholarship',
    provider: 'Japan Student Services Organization (JASSO)',
    category: 'JASSO',
    degreeLevel: ['Undergraduate', "Master's", 'PhD', 'Short-term'],
    eligibleNationalities: ['All international students enrolled in Japanese institutions'],
    benefits: 'Monthly educational stipend to support cost of living in Japan.',
    monthlyStipend: '¥48,000',
    tuitionCoverage: 'None',
    deadline: 'Ongoing (via University)',
    applicationMethod: 'University Recommendation',
    applyFromAbroad: false,
    requiredDocuments: ['Application Request Sheet', 'Academic Record Evaluation Form', 'Bank Balance Statement (showing financial need)'],
    officialLink: 'https://www.jasso.go.jp/en/ryugaku/scholarship_j/index.html',
    notes: 'Awarded to privately financed students who demonstrate outstanding academic performance and require financial support. Applications must be submitted through the university in which you are currently enrolled or accepted.',
    imageUrl: '/images/sch-jasso.svg',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'sch-utokyo',
    name: 'University of Tokyo Fellowship / Special Scholarship for International Students',
    slug: 'utokyo-fellowship',
    provider: 'The University of Tokyo',
    category: 'University',
    degreeLevel: ["Master's", 'PhD'],
    eligibleNationalities: ['All international graduate students with stellar academic records'],
    benefits: 'Monthly research allowance and support grant.',
    monthlyStipend: '¥150,000 - ¥200,000',
    tuitionCoverage: 'Partial',
    deadline: '2026-10-15',
    applicationMethod: 'Direct Application alongside Graduate School Admission',
    applyFromAbroad: true,
    requiredDocuments: ['UTokyo Fellowship Application Form', 'Research Proposal', 'Two Evaluation Letters from Past Supervisors', 'Transcripts'],
    officialLink: 'https://www.u-tokyo.ac.jp/en/prospective-students/scholarships.html',
    notes: 'Designed to attract high-achieving international researchers to graduate-level studies at Todai. Selection is strictly merit-based and tied to the student\'s research impact potential.',
    imageUrl: '/images/sch-utokyo.svg',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'sch-apu',
    name: 'APU Tuition Reduction Scholarship (30%, 50%, 65%, 80%, 100%)',
    slug: 'apu-tuition-reduction',
    provider: 'Ritsumeikan Asia Pacific University',
    category: 'University',
    degreeLevel: ['Undergraduate', "Master's"],
    eligibleNationalities: ['All international students applying for admission to APU'],
    benefits: 'Tuition reduction of 30%, 50%, 65%, 80%, or 100% depending on performance.',
    monthlyStipend: 'None',
    tuitionCoverage: 'Partial',
    deadline: 'Rolling (tied to application rounds)',
    applicationMethod: 'Direct Application inside University Application Portal',
    applyFromAbroad: true,
    requiredDocuments: ['APU Admissions Application', 'Scholarship Request Statement Essay', 'Parents\' Financial Income Declarations'],
    officialLink: 'https://admissions.apu.ac.jp/costs_scholarships/tuition_reduction/',
    notes: 'This scholarship is highly popular. Over 60% of international students at APU receive some tier of tuition reduction. The reduction applies for the full four years of undergraduate study, provided the student maintains a satisfactory GPA.',
    imageUrl: '/images/sch-apu.svg',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  },
  {
    id: 'sch-waseda',
    name: 'Waseda University partial tuition waiver for international students',
    slug: 'waseda-scholarships',
    provider: 'Waseda University',
    category: 'University',
    degreeLevel: ['Undergraduate', "Master's", 'PhD'],
    eligibleNationalities: ['All international students enrolled in Waseda University'],
    benefits: 'Waiver of up to 50% of annual tuition fees.',
    monthlyStipend: 'None',
    tuitionCoverage: 'Partial',
    deadline: '2026-07-20',
    applicationMethod: 'Direct Application post-enrollment',
    applyFromAbroad: false,
    requiredDocuments: ['Waseda Tuition Waiver Application Form', 'Academic Transcript (for enrolled semesters)', 'Income Certificate of Guarantor'],
    officialLink: 'https://www.waseda.jp/inst/cie/en/life/scholarship',
    notes: 'Targeted at privately-financed international students who are making excellent academic progress but experience sudden or severe financial difficulty while residing in Japan.',
    imageUrl: '/images/sch-waseda.svg',
    createdAt: '2026-05-24T00:00:00Z',
    updatedAt: '2026-05-24T00:00:00Z'
  }
];

export const SAMPLE_BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'MEXT Scholarship 2026-2027: The Ultimate Step-by-Step Prep Guide',
    slug: 'mext-scholarship-ultimate-prep-guide',
    category: 'Scholarship',
    summary: 'Everything you need to know to win the prestigious Monbukagakusho (MEXT) scholarship, from document assembly to passing the strict embassy screening exams and interview rounds.',
    content: `Winning the Japanese Government (MEXT) Scholarship is a dream for thousands of international students. Covering full tuition, monthly stipends, and round-trip airfare, it is one of the most generous and sought-after scholarship programs globally. 

However, because it is extremely competitive, you need a smart, systematic plan to stand out. Here is the ultimate step-by-step preparation guide.

### 1. Know Your Target Track
MEXT offers several tracks:
- **Embassy Recommendation**: You apply through the Japanese Embassy in your home country. This has the highest quota and accepts applicants before they depart for Japan.
- **University Recommendation**: A Japanese university recommends you to MEXT during their admission process. Usually reserved for graduate students or specific undergraduate partnerships.

### 2. Craft a Stellar Research / Study Plan
For graduate students, the **Study and Research Plan** is the single most critical document. 
- It must detail **why** your research has to be conducted in Japan.
- It must present a clear methodology and potential impact.
- Avoid vague topics. Connect your project to active research at your target Japanese universities.

### 3. Master the Exams
Embassy recommendation applicants must take written tests:
- **Undergraduate**: English, Japanese, Mathematics, and Sciences (Chemistry/Physics/Biology depending on major).
- **Graduate**: English and Japanese (scoring zero in Japanese is okay for English-only research, but a positive score demonstrates commitment).

Find past exam papers on the official **Study in Japan** website and solve them under timed conditions!

### 4. Nailing the Interview
The final stage is the Embassy Interview. Expect questions about your academic background, why you chose Japan over other countries, and how you plan to contribute to ties between Japan and your home nation. Be confident, professional, and clear about your post-graduation aspirations.`,
    coverImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-05-10T10:00:00Z',
    readingTime: '6 min read',
    author: 'Aye Chan Htun Naing (INARI Hub Founder)',
    createdAt: '2026-05-10T10:00:00Z',
    updatedAt: '2026-05-10T10:00:00Z'
  },
  {
    id: 'blog-2',
    title: 'Understanding EJU & JLPT: What Exams Do You Need to Study in Japan?',
    slug: 'understanding-eju-jlpt-exams-japan',
    category: 'Admission',
    summary: 'Demystifying the Examination for Japanese University Admission (EJU) and the Japanese Language Proficiency Test (JLPT) for international undergraduate and graduate applicants.',
    content: `If you are planning to study in Japan, you have likely come across the acronyms **JLPT** and **EJU**. These exams are the gatekeepers of Japanese higher education, but many students are confused about which one they need to take. 

Let's demystify these standard assessments so you can plan your studies effectively.

### What is the JLPT (Japanese Language Proficiency Test)?
The JLPT measures and certifies Japanese language proficiency for non-native speakers. It has five levels: **N5 (easiest)** to **N1 (most advanced)**.

- **Who needs it?**: 
  - Students applying to **Japanese Language Schools** (usually N5 or 150+ hours of study is recommended/required for visa support).
  - **Graduate (Master's/PhD) students** applying to Japanese-taught programs (usually N1 or N2 is mandatory).
  - Students entering English-taught undergraduate degrees (often don't need it, but N5/N4 makes daily life much smoother!).
- **When is it?**: Twice a year, on the first Sunday of **July** and **December**.

### What is the EJU (Examination for Japanese University Admission)?
The EJU is an entrance exam specifically designed for international students who wish to enroll in **undergraduate programs** at Japanese universities. It evaluates basic academic skills in science, mathematics, and liberal arts, alongside Japanese language proficiency.

- **EJU Subjects**:
  1. **Japanese as a Foreign Language** (Reading, Listening, Writing)
  2. **Science** (Physics, Chemistry, Biology - choose 2)
  3. **Japan and the World** (Liberal arts, history, geography, economy)
  4. **Mathematics** (Course 1 for liberal arts, Course 2 for science-heavy majors)
- **Who needs it?**: Almost all students who wish to enroll in a standard **Japanese-taught undergraduate degree**. Some English programs also accept EJU math/science scores.
- **When is it?**: Twice a year, in **June** and **November**.

### Which One Should You Focus On?
- **If your goal is an English-taught program**: Focus on English exams (TOEFL/IELTS) and standardized tests (SAT/ACT). You do not need EJU, and JLPT is optional but helpful.
- **If your goal is a Japanese-taught undergraduate degree**: EJU is absolute. You must study Japanese intensely and practice EJU-specific subject materials in Japanese.
- **If your goal is a Japanese-taught graduate program**: Focus entirely on passing **JLPT N2 or N1** and writing a rigorous research plan.`,
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-04-18T10:00:00Z',
    readingTime: '5 min read',
    author: 'May Thu Win (Senior Academic Consultant)',
    createdAt: '2026-04-18T10:00:00Z',
    updatedAt: '2026-04-18T10:00:00Z'
  },
  {
    id: 'blog-3',
    title: 'Waseda University Spotlight: The SILS and SPSE English Programs',
    slug: 'waseda-university-spotlight-sils-spse',
    category: 'University Spotlight',
    summary: 'A deep-dive review of the highly prestigious English-taught degree options at Waseda University in Tokyo, featuring entry requirements, campus culture, and career prospects.',
    content: `Waseda University, located in the heart of Tokyo (Shinjuku), is famous worldwide as a premier global institution. While Waseda is historically known for its competitive Japanese-taught programs, it has emerged as a leader in international education through its prominent English-taught undergraduate degree programs.

In this spotlight, we dive deep into Waseda's two flagship English programs: **SILS** (School of International Liberal Studies) and **SPSE** (School of Political Science and Economics).

### 1. School of International Liberal Studies (SILS)
SILS is one of the oldest and largest liberal arts programs in Japan. It features an incredibly diverse student body where 30% are international students, 30% are returnees, and 40% are domestic students.

- **The Philosophy**: SILS is built on the American liberal arts model. You don't pick a narrow major on day one. Instead, you take courses across history, politics, economics, science, art, and philosophy before tailoring your specialization.
- **Key Feature**: Japanese students are required to study abroad for one year, while international students are required to take intensive Japanese language courses. This creates an extremely bilingual and culturally aware campus.
- **Perfect for**: Students who want a broad, global perspective, have multiple interests, and want to achieve high fluency in Japanese while studying in English.

### 2. School of Political Science and Economics (SPSE)
SPSE is Waseda's most academically prestigious department. Its alumni list reads like a "Who's Who" of Japanese politics and business, including former Prime Ministers.

- **The English Program**: SPSE offers a highly structured, rigorous curriculum in **Political Science, Economics, or Global Political Economy**.
- **Academics**: The courses are quantitative and analytical. You will study econometric methods, political theories, and international trade from world-leading researchers.
- **Perfect for**: Students looking for a prestigious, academically demanding degree that will prepare them for top-tier consulting firms, international banks, NGOs, or graduate school at institutions like Oxford or Harvard.

### Admissions & Key Requirements
Both programs require:
1. **Standardized Tests**: SAT, ACT, IB Diploma, or GCE A-Levels. Average SAT scores typically range from **1350 - 1500** for SPSE and **1300 - 1450** for SILS.
2. **English Language Proficiency**: TOEFL iBT (95+ recommended) or IELTS (7.0+ recommended) if English was not your primary medium of high school instruction.
3. **Essays & Recommendations**: You must write a convincing Statement of Purpose and submit letters of recommendation from high school counselors or teachers.`,
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-03-22T10:00:00Z',
    readingTime: '4 min read',
    author: 'INARI EduBridge Editorial',
    createdAt: '2026-03-22T10:00:00Z',
    updatedAt: '2026-03-22T10:00:00Z'
  },
  {
    id: 'blog-4',
    title: 'How I Adjusted to Life in Japan as a Southeast Asian International Student',
    slug: 'life-in-japan-student-story-adjustment',
    category: 'Student Story',
    summary: 'A warm, honest account from a student sharing their experience adjusting to Japan’s culture, finding part-time work, navigating public transport, and overcoming homesickness.',
    content: `Moving to Japan is a massive adventure, but the transition can feel overwhelming. From sorting out municipal registration to adjusting to a cash-dominated culture and cold winter weather, the initial adjustment period is filled with learning curves. 

Here is my personal story and five tips that helped me settle in and feel at home.

### 1. The Shock of "Quiet Culture"
Coming from Yangon, where the streets are filled with noise, music, and animated street vendors, the sheer quietness of Tokyo was the first major shock.
- On trains and buses, speaking loudly or taking phone calls is considered extremely rude.
- Neighborhoods are quiet, and residents are highly meticulous about separating garbage.
*Adjustment tip*: Learn and respect the local rules early. Observing how locals behave in public spaces will save you from embarrassing situations and show that you respect the local community.

### 2. Navigating the Trash Sorting System
In Japan, trash disposal is a complex science! You cannot simply throw everything into a single bin.
- Trash is categorized into **Burnable**, **Non-burnable**, **Plastics**, and **Recyclables (Cans/Glass/PET)**.
- Each category has specific designated trash bags and strict collection schedules.
- *Adjustment tip*: Your local ward office will provide a multi-language pamphlet upon registration. Stick it to your refrigerator!

### 3. Securing a Part-Time Job (Arubaito)
International students in Japan on a Student Visa are legally allowed to work up to **28 hours per week** (and 40 hours during long university breaks), but they must first obtain a **"Permission to Engage in Activity Other Than That Permitted"** stamp at immigration (usually done at the airport upon arrival).
- If your Japanese is basic (N5/N4): Look for jobs in hotel cleaning, food preparation, or convenience stores in international hubs like Shibuya or Shinjuku.
- If your Japanese is intermediate (N3/N2): You can work as waitstaff, cashiers, or English tutors, which pay higher rates (¥1,100 - ¥1,500 per hour).

### 4. Beating Homesickness through Community
Homesickness hits hardest during the rainy season (June) and the winter holidays. The best way to overcome it is to stay active.
- Join university circles (clubs) like sports, music, or international exchange clubs.
- Find restaurants serving food from your home country.
- Keep in touch with family, but focus on building a strong local support network. Japan is incredibly safe, and people are extremely kind if you reach out for help!`,
    coverImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-02-14T10:00:00Z',
    readingTime: '5 min read',
    author: 'Min Hein Khant (APU Class of 2025)',
    createdAt: '2026-02-14T10:00:00Z',
    updatedAt: '2026-02-14T10:00:00Z'
  }
];

export const FAQ_DATA = [
  {
    question: "What is INARI EduBridge?",
    answer: "INARI EduBridge is a comprehensive education information platform developed by the INARI Japanese Language Hub. It serves as a digital bridge helping international students explore, search, filter, and compare Japanese universities, scholarship opportunities, admissions requirements, and student life guidelines in one single, organized place."
  },
  {
    question: "Can I find scholarships for studying in Japan?",
    answer: "Yes! INARI EduBridge catalogs various scholarships, including the fully-funded MEXT scholarship, the JASSO honors scholarship, specific university-sponsored fee waivers, and private foundation awards. You can search and filter scholarships based on degree level, benefits, monthly stipend, and whether you can apply directly from abroad."
  },
  {
    question: "Does INARI EduBridge provide official university information?",
    answer: "We aggregate accurate, up-to-date program requirements, tuition ranges, and contact details from official sources. However, because admission cycles, fees, and requirements are subject to change, we strongly advise students to verify final information using the official website link provided on each detail page."
  },
  {
    question: "Do I need Japanese language ability to study in Japan?",
    answer: "Not necessarily! Many leading Japanese universities offer fully English-taught undergraduate and graduate degrees (called E-Track or English Programs). However, having basic Japanese capability (JLPT N5/N4) is highly recommended to manage daily life, make friends, and secure part-time employment."
  },
  {
    question: "Can I study in Japan in English?",
    answer: "Absolutely. Japan's top institutions, including national giants like the University of Tokyo, Kyoto University, Tohoku University, and private leaders like Waseda University, offer top-tier English-taught degree pathways across Engineering, Liberal Arts, Economics, and Business."
  },
  {
    question: "How can I apply for scholarships?",
    answer: "The application method varies. The MEXT scholarship usually requires applying via the Japanese Embassy in your home country (Embassy Recommendation) or getting nominated by a host Japanese university (University Recommendation). Other private or university-specific scholarships may be applied for directly when applying to the university or after enrollment. Check the exact guidelines on our Scholarship details pages."
  },
  {
    question: "Should I confirm details from official sources?",
    answer: "Yes, always. While INARI EduBridge makes every effort to keep information updated and accurate, official university policies, visa guidelines from the Japanese Immigration Bureau, and scholarship deadlines are the final authority. We display a clear disclaimer across the platform to remind students of this best practice."
  }
];
