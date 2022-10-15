import { nanoid } from 'nanoid';
import googlecloud from '../images/skills/googlecloud.svg';
import javascript from '../images/skills/javascript.png';
import mongodb from '../images/skills/mongodb.png';
import nodejs from '../images/skills/nodejs.svg';
import postgresql from '../images/skills/postgresql.png';
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
    img: 'projects/signdocs-screencap-2.gif',
    title: 'SignDocs',
    info: "This fullstack clone of DocuSign allows users to digitally sign documents, send those documents to others for signature, and track who has not yet signed. A user can create a digital representation of their signature by either using a selection of fonts or by using a trackpad/mouse. To prepare a document for signatures, users can upload a PDF or Word file and then drag and drop different types of fields onto the document for their signatories to fill out. They can then route the signed file directly to their signatories' email and track completion.",
    info2: 'Tech stack: React, Redux, Ruby on Rails, PostgreSQL, AWS S3, react-pdf, react-signature-canvas',
    url: 'https://signdocs.herokuapp.com/',
    repo: 'https://github.com/philgresh/signdocs',
  },
  {
    id: nanoid(),
    img: 'projects/acrosswords.gif',
    title: 'AcrossWords',
    info: 'AcrossWords is a variation on the classic Crosswords game. Players are provided with a clue and a limited amount of time to fill out as many words as possible. The next word is always generated such that it overlaps with one to three letters of the beginning or end of the previous word',
    info2: 'Tech stack: React, Redux, ExpressJS, NodeJS, MongoDB',
    url: 'https://acrosswords.herokuapp.com/#/',
    repo: 'https://github.com/jacobprall/CrossWords',
  },
  {
    id: nanoid(),
    img: 'projects/css-challenge-2_fylo.gif',
    title: 'CSS Challenges',
    info: 'Every week, I send out a new animation to a Slack group for folks to try to replicate in CSS. I use Storybook to compile the animations and allow for changing some properties on the fly.',
    info2: 'Tech stack: React, Storybook, JavaScript, SASS',
    url: 'https://philgresh.github.io/css-challenge/',
    repo: 'https://github.com/philgresh/css-challenge/',
  },
  {
    id: nanoid(),
    img: 'projects/spacejunk.png',
    title: 'Space Junk Eliminator',
    info: 'This JavaScript game takes inspiration from an article I read discussing propositions to clear the nearby space of debris from launches and dead satellites.',
    info2: 'Fully JavaScript with a few helper libraries: JQuery, PaperJS, Webpack',
    url: 'https://philgresh.github.io/space_junk/',
    repo: 'https://github.com/philgresh/space_junk',
  },
];

export const skillsData: Skill[] = [
  {
    id: nanoid(),
    name: 'JavaScript',
    src: javascript,
    devIcon: 'javascript',
  },
  {
    id: nanoid(),
    name: 'Ruby',
    devIcon: 'ruby',
  },
  {
    id: nanoid(),
    name: 'React',
    faIcon: 'react',
    devIcon: 'react',
  },
  {
    id: nanoid(),
    name: 'HTML5',
    faIcon: 'html5',
    devIcon: 'html5',
  },
  {
    id: nanoid(),
    name: 'CSS3',
    faIcon: 'css3-alt',
    devIcon: 'css3_full',
  },
  {
    id: nanoid(),
    name: 'NodeJS',
    src: nodejs,
    devIcon: 'nodejs',
  },
  {
    id: nanoid(),
    name: 'MongoDB',
    src: mongodb,
    devIcon: 'mongodb',
  },
  {
    id: nanoid(),
    name: 'PostgreSQL',
    src: postgresql,
    devIcon: 'postgresql',
  },
  {
    id: nanoid(),
    name: 'AWS',
    faIcon: 'aws',
    devIcon: 'aws',
  },
  {
    id: nanoid(),
    name: 'Google Cloud Platform',
    src: googlecloud,
    devIcon: 'google-cloud-platform',
  },
  {
    id: nanoid(),
    name: 'Github',
    faIcon: 'github',
    devIcon: 'github',
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
