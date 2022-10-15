import { nanoid } from 'nanoid';
import signdocs from '../images/projects/signdocs-screencap-2.gif';
import type { About, Contact, Footer, Head, Hero, Project, Skill } from '../types';

const aboutMeParagraphOne =
  "I'm a software engineer in the Bay Area with broad experience working with JavaScript/React frontends and several backend setups, including Ruby on Rails, Node/ExpressJS, Google Firebase, and AWS AppSync. I love working on all aspects of an app, but I'm especially drawn to creating new components/pages on the frontend and working with business logic on the backend.";
const aboutMeParagraphTwo =
  "Before I got into software development, I was a project manager in the electric utility industry, where I coordinated 3 full crews' activities. I've always built my own tools to solve specific problems (usually Excel calculators), and I took that a step further when I founded my own productivity app aimed at people working in the same position. In addition to honing my technical skills, this experience has taught me about making significant UI/UX decisions, locking down information security, and making apps accessible to everyone.";
const aboutMeParagraphThree =
  "Outside of work, I enjoy traveling in the off-season, cycling along the Bay Trail, and tinkering with projects at ACE Makerspace in Oakland. I'm proudest of some of my woodworking projects, including a set of maple wood bookshelf speakers and my dining room table.";

export const headData: Head = {
  title: 'Phil Gresham | Fullstack software engineer',
  lang: 'en',
  description: 'Phil Gresham - Fullstack / frontend software engineer',
};

export const heroData: Hero = {
  title: 'Hi, my name is',
  name: 'Phil Gresham',
  subtitle: "I'm a software engineer, geographer, and woodworker.",
  sections: {
    about: {
      title: 'Learn more about me',
    },
    projects: {
      title: 'Check out my projects',
    },
    skills: {
      title: 'My tech skills',
    },
    contact: {
      title: 'Contact me',
    },
  },
};

export const aboutData: About = {
  img: 'profile.jpg',
  resume: 'https://drive.google.com/file/d/105YaM90nAy8KuAEmGRLfZGCQe9dK5wsX/view?usp=sharing',
  paragraphs: [aboutMeParagraphOne, aboutMeParagraphTwo, aboutMeParagraphThree],
};

export const projectsData: Project[] = [
  {
    id: nanoid(),
    img: signdocs,
    title: 'SignDocs',
    info: "This fullstack clone of DocuSign allows users to digitally sign documents, send those documents to others for signature, and track who has not yet signed. A user can create a digital representation of their signature by either using a selection of fonts or by using a trackpad/mouse. To prepare a document for signatures, users can upload a PDF or Word file and then drag and drop different types of fields onto the document for their signatories to fill out. They can then route the signed file directly to their signatories' email and track completion.",
    info2: 'Tech stack: React, Redux, Ruby on Rails, PostgreSQL, AWS S3, react-pdf, react-signature-canvas',
    repo: 'https://github.com/philgresh/signdocs',
  },
];

export const skillsData: Skill[] = [
  {
    id: nanoid(),
    name: 'TypeScript',
    devIcon: 'devicon-typescript-plain',
  },
  {
    id: nanoid(),
    name: 'Go',
    devIcon: 'devicon-go-plain-wordmark',
  },
  {
    id: nanoid(),
    name: 'JavaScript',
    devIcon: 'devicon-javascript-plain',
  },
  {
    id: nanoid(),
    name: 'React',
    devIcon: 'devicon-react-plain-wordmark',
  },
  {
    id: nanoid(),
    name: 'HTML5',
    devIcon: 'devicon-html5-plain-wordmark',
  },
  {
    id: nanoid(),
    name: 'CSS3',
    devIcon: 'devicon-css3-plain-wordmark',
  },
  {
    id: nanoid(),
    name: 'NodeJS',
    devIcon: 'devicon-nodejs-plain-wordmark',
  },
  {
    id: nanoid(),
    name: 'MongoDB',
    devIcon: 'devicon-mongodb-plain-wordmark',
  },
  {
    id: nanoid(),
    name: 'PostgreSQL',
    devIcon: 'devicon-postgresql-plain-wordmark',
  },
  {
    id: nanoid(),
    name: 'AWS',
    devIcon: 'devicon-amazonwebservices-plain-wordmark',
  },
  {
    id: nanoid(),
    name: 'Google Cloud Platform',
    devIcon: 'devicon-googlecloud-plain-wordmark',
  },
  {
    id: nanoid(),
    name: 'Github',
    devIcon: 'devicon-github-original-wordmark',
  },
];

// CONTACT DATA
export const contactData: Contact = {
  cta: 'Want to work together?',
  btn: 'Send me a note',
  email: 'phil@gresham.dev',
};

export const footerData: Footer = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/philgresham/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/philgresh',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
