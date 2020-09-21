import { nanoid } from 'nanoid';
import postgresql from '../images/skills/postgresql.png';
import javascript from '../images/skills/javascript.png';
import mongodb from '../images/skills/mongodb.png';
import sqlite from '../images/skills/sqlite.png';
import googlecloud from '../images/skills/googlecloud.svg';
import nodejs from '../images/skills/nodejs.svg';
import redux from '../images/skills/redux.svg';
import rubyOnRails from '../images/skills/rubyOnRails.svg';
import { paragraphOne, paragraphTwo, paragraphThree } from './aboutMeText';

// HEAD DATA
export const headData = {
  title: 'Phil Gresham | Fullstack software engineer',
  lang: 'en',
  description: 'Phil Gresham - Fullstack / frontend software engineer',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Phil Gresham',
  subtitle: "I'm a software engineer, geographer, and woodworker.",
  ctaAbout: 'Learn more about me',
  ctaProjects: 'Check out my projects',
  ctaSkills: 'See what tech I use',
  ctaContact: 'Contact me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  imgClassname: 'rounded shadow-lg',
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  resume:
    'https://drive.google.com/file/d/1Vh4ArxgnH9nS7z1-57lXq4G_8J6g2BKZ/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

export const skillsData = [
  {
    id: nanoid(),
    name: 'React',
    faIcon: 'react',
  },
  {
    id: nanoid(),
    name: 'Redux',
    src: redux,
  },
  {
    id: nanoid(),
    name: 'HTML5',
    faIcon: 'html5',
  },
  {
    id: nanoid(),
    name: 'CSS3',
    faIcon: 'css3-alt',
  },
  {
    id: nanoid(),
    name: 'JavaScript',
    src: javascript,
  },
  {
    id: nanoid(),
    name: 'Ruby on Rails',
    src: rubyOnRails,
  },
  {
    id: nanoid(),
    name: 'NodeJS',
    src: nodejs,
  },
  {
    id: nanoid(),
    name: 'MongoDB',
    src: mongodb,
  },
  {
    id: nanoid(),
    name: 'PostgreSQL',
    src: postgresql,
  },
  {
    id: nanoid(),
    name: 'SQLite3',
    src: sqlite,
  },
  {
    id: nanoid(),
    name: 'AWS',
    faIcon: 'aws',
  },
  {
    id: nanoid(),
    name: 'Google Cloud Platform',
    src: googlecloud,
  },
  {
    id: nanoid(),
    name: 'Github',
    faIcon: 'github',
  },
  // ExpressJS
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work together?',
  btn: 'Send me a note',
  email: 'phil@gresham.dev',
};

// FOOTER DATA
export const footerData = {
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
