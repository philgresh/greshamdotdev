import { nanoid } from 'nanoid';
import postgresql from '../images/skills/postgresql.png';
import javascript from '../images/skills/javascript.png';
import mongodb from '../images/skills/mongodb.png';
import googlecloud from '../images/skills/googlecloud.svg';
import nodejs from '../images/skills/nodejs.svg';
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
  ctaSkills: 'My tech skills',
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
    img: 'projects/signdocs-screencap-1.png',
    title: 'SignDocs',
    info:
      "This fullstack clone of DocuSign allows users to digitally sign documents, send those documents to others for signature, and track who has not yet signed. A user can create a digital representation of their signature by either using a selection of fonts or by using a trackpad/mouse. To prepare a document for signatures, users can upload a PDF or Word file and then drag and drop different types of fields onto the document for their signatories to fill out. They can then route the signed file directly to their signatories' email and track completion.",
    info2:
      'Tech stack: React, Redux, Ruby on Rails, PostgreSQL, AWS S3, react-pdf, react-signature-canvas',
    url: 'https://signdocs.herokuapp.com/',
    repo: 'https://github.com/philgresh/signdocs',
  },
  {
    id: nanoid(),
    img: 'projects/acrosswords.png',
    title: 'AcrossWords',
    info:
      'AcrossWords is a variation on the classic Crosswords game. Players are provided with a clue and a limited amount of time to fill out as many words as possible. The next word is always generated such that it overlaps with one to three letters of the beginning or end of the previous word',
    info2: 'Tech stack: React, Redux, ExpressJS, NodeJS, MongoDB',
    url: 'acrosswords.herokuapp.com/',
    repo: 'https://github.com/jacobprall/CrossWords',
  },
  {
    id: nanoid(),
    img: 'projects/spacejunk.png',
    title: 'Space Junk Eliminator',
    info:
      'This JavaScript game takes inspiration from an article I read discussing propositions to clear the nearby space of debris from launches and dead satellites.',
    info2:
      'Fully JavaScript with a few helper libraries: JQuery, PaperJS, Webpack',
    url: 'https://philgresh.github.io/space_junk/',
    repo: 'https://github.com/philgresh/space_junk',
  },
];

export const skillsData = [
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
  // {
  //   id: nanoid(),
  //   name: 'Redux',
  //   src: redux,
  //   devIcon: '',
  // },
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
  // {
  //   id: nanoid(),
  //   name: 'Ruby on Rails',
  //   src: rubyOnRails,
  //   devIcon: 'devicon-rails-plain',
  // },
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
