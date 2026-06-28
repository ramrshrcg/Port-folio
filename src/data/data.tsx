import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';



import {SiReact, SiTypescript, SiNodedotjs, SiFlutter, SiMongodb,SiNumpy, SiPandas,SiPython} from 'react-icons/si';
import {MdInsertChart, MdAnalytics} from 'react-icons/md';
import {BsDatabaseFill} from 'react-icons/bs';


import porfolioImage1 from '../images/portfolio/Asymmetrical Fringe Cut.png';
import porfolioImage2 from '../images/portfolio/hugging-face-dataset-preview.png';

//certificate images
import certificateImage1 from '../images/certificates/Associate_Data_Engineer_in_SQL.png';
import certificateImage2 from '../images/certificates/NAAMI.png';
import certificateImage3 from '../images/certificates/Hackathone_ACES.png';
import certificateImage4 from '../images/certificates/courseera_machinelearning.png';







import profilepic from '../images/RAM_pp.png';

// import testimonialImage from '../images/testimonial.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
  certificateItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ram Chandra Ghimire | Computer Engineer',
  description: "Ram Chandra Ghimire's personal website.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Certificates: 'certificates',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ram Chandra Ghimire.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
     Computer Engineering student with a strong interest in data science, machine learning, and low-resource language processing. Experienced in data analysis, SQL, and visualization, with hands-on project work in AI applications. A fast learner with a passion for building practical and impactful technology solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/cv.pdf?v=2',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      newTab: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Computer Engineering student with a strong interest in data science, machine learning, and low-resource language processing. Experienced in data analysis, SQL, and visualization, with hands-on project work in AI applications. A fast learner with a passion for building practical and impactful technology solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Kathmandu, Nepal', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Nepali', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'Tribhuvan University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Student / Freelancer', Icon: BuildingOffice2Icon},
  ],
};



/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  // {
  //   name: 'Spoken languages',
  //   skills: [
  //     {
  //       name: 'English',
  //       icon: MdLanguage,
  //     },
  //   ],
  // },
  {
    name: 'Web development',
    skills: [
      {
        name: 'React',
        icon: SiReact,
      },
      {
        name: 'Typescript',
        icon: SiTypescript,
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        icon: SiFlutter,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'SQL',
        icon: BsDatabaseFill,
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
      },
    ],
  },
  {
  name: 'Data science',
  skills: [
    {
      name: 'Python',
      icon: SiPython,
    },
    {
      name: 'NumPy',
      icon: SiNumpy,
    },
    {
      name: 'Pandas',
      icon: SiPandas,
    },
    {
      name: 'Data visualization',
      icon: MdInsertChart,
    },
    {
      name: 'Data analytics',
      icon: MdAnalytics,
    },
  ],
},
];
/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Aura Match',
    description: 'A web application that uses machine learning to match users based on their personality traits and preferences. Built with React, Node.js, and TensorFlow. i have collected from internet using scripts and categorized them into different categories like oval, round, square, heart, diamond, etc. and used for recommender system',
    url: 'https://github.com/ramrshrcg/AuraMatch',
    image: porfolioImage1,
  },
  {
    title: 'Nepali Corpus and Dataset',
    description: 'A collection of Nepali language datasets and corpora for natural language processing tasks. This project includes a variety of text data, such as news articles, social media posts, and conversational data, which can be used for training and evaluating machine learning models for Nepali language processing.',
    url: 'https://huggingface.co/datasets/gluclose-D/nepali-news-scraped',
    image: porfolioImage2, 
  }
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: ' 2026',
    location: 'Tribhuvan University',
    title: 'Bachelor in Computer Engineering',
    content: <p></p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const certificates: certificateItem[] = [
  {
    date: '9 Jan 2026',
    title: 'Associate Data Engineer in SQL - DataCamp',
    content: <p>  </p>,
    image: certificateImage1,
  },
  {
    date: '20 Jan 2025',
    title: 'ANAIS - NAAMI AI School',
    content: <p>Certificate of Participation</p>,
    image: certificateImage2,
  },
  {
    date: '2022',
    title: 'Hackathone ACES',
    content: <p>First Hackathone</p>,
    image: certificateImage3,
  },
  {
    date: '10 May 2026',
    title: 'Machine Learning',
    content: <p>   </p>,
    image: certificateImage4,
  }
];

//experiences
export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
/*
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

*/


//links of social media and contact
const href={
    mail_href:'mailto:ramrshrcg@gmail.com',
    location_href: 'https://www.google.ca/maps/place/Kathmandu,+Nepal/@27.7172451,85.3241866,12z/data=!3m1!4b1!4m5!3m4!1s0x39eb190e419d9c8f:0x2d2cfcaa7a9e6c8c!8m2!3d27.7172451!4d85.3239605',
    insta_href: 'https://www.instagram.com/ghimire_ramesh__/',
    github_href: 'https://github.com/ramrshrcg',
    linkedin_href: 'https://www.linkedin.com/ram-chandra-ghimire-14b31516b/'
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is the best way to reach me. Just send me an email and I will get back to you as soon as I can.',
  items: [
    {
      type: ContactType.Email,
      text: 'ramrshrcg@gmail.com',
      href: href.mail_href,
    },
    {
      type: ContactType.Location,
      text: 'Kathmandu, Nepal',
      href: href.location_href,
    },
      
    {
      type: ContactType.Instagram,
      text: '@ghimire_ramesh__',
      href: href.insta_href,
      
    },
    {
      type: ContactType.Github,
      text: 'ramrshrcg',
      href: href.github_href,
     
    },
    {
      type: ContactType.LinkedIn,
      text: 'ram-chandra-ghimire-14b31516b',
      href: href.linkedin_href,
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: href.github_href},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: href.linkedin_href},
  {label: 'Instagram', Icon: InstagramIcon, href: href.insta_href},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
