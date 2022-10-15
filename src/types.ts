export type Head = {
  title: string;
  lang: 'en';
  description: string;
};

export type Section = {
  [id: string]: {
    title: string;
  };
};

export type Hero = {
  title: string;
  name: string;
  subtitle: string;
  sections: Section;
};

export type About = {
  img: string;
  resume: string;
  paragraphs: string[];
};

export type Project = {
  id: string;
  img?: string;
  title?: string;
  info?: string;
  info2?: string;
  url?: string;
  repo?: string;
};
export type Skill = {
  id: string;
  name: string;
  src?: string;
  devIcon?: string;
  faIcon?: string;
};

export type Contact = {
  cta: string;
  btn: string;
  email: string;
};

type Network = {
  id: string;
  name: string;
  url: string;
};

export type Footer = {
  networks: Network[];
};

export type PortfolioContextType = {
  head?: Head;
  hero?: Hero;
  about?: About;
  projects?: Project[];
  skills?: Skill[];
  contact?: Contact;
  footer?: Record<string, any>;
};
