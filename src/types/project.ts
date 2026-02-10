export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
}

export interface ProjectsData {
  title: string;
  projects: Project[];
  archiveUrl: string;
}