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

export interface ArchivedProject {
  year: string;
  name: string;
  madeAt: string;
  builtWith: string[];
  link: string;
}

export interface TableProps {
  projects: ArchivedProject[];
}