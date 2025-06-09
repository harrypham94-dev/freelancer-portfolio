// Types for Projects
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  sourceCode: string;
  challenges: string;
}

export interface ProjectsData {
  title: string;
  description: string;
  projects: Project[];
}

// Types for Blog
export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  slug: string;
}

export interface BlogData {
  title: string;
  description: string;
  posts: BlogPost[];
}

// Types for About
export interface Skill {
  category: string;
  technologies: string[];
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface AboutData {
  introduction: {
    title: string;
    description: string[];
  };
  skills: Skill[];
  coreValues: CoreValue[];
}

// Types for Contact
export interface ContactInfo {
  title: string;
  content: string;
  link: string;
  iconType: string;
}

export interface ContactData {
  title: string;
  description: string;
  contactInfo: ContactInfo[];
}

// Types for Services
export interface Service {
  title: string;
  iconType: string;
  description: string;
  features: string[];
}

export interface ServicesData {
  services: Service[];
}

// Types for Home
export interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  skills: string[];
}
