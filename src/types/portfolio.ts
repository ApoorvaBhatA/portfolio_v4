

export interface Section {
  id: string;
  label: string;
};

export interface Social {
  name: string;
  image: string;
  url: string;
};

export interface PortfolioData1 {
  name: string;
  role: string;
  tagline: string;
  sections: Section[];
  socials: Social[];
};