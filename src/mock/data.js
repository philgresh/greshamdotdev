import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Phil Gresham | Fullstack software engineer',
  lang: 'en',
  description: 'Personal website of Phil Gresham',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Phil Gresham',
  subtitle: "I'm a software engineer, geographer, and woodworker.",
  cta: 'Learn more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  imgClassname: 'rounded shadow-lg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://drive.google.com/file/d/1Vh4ArxgnH9nS7z1-57lXq4G_8J6g2BKZ/view?usp=sharing', // if no resume, the button will not show up
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

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
