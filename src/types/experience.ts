export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
}

export interface ExperienceData {
  title: string;
  items: ExperienceItem[];
  resumeUrl: string;
}
