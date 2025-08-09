import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Fahad",
  lastName: "Mushtaq",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/fahad.jpg",
  email: "fahadmushtaq742@gmail.com",
  phone: "+92 340 0503319",
  location: "Pakistan", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu", "Pahari"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fahad-mushtaq-95667519b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Phone: +92 340 0503319",
    icon: "phone",
    link: `phoneto:${person.phone}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Driven by Curiosity, Powered by Problem-Solving</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Fahad Mushtaq, a software engineer at Payactiv, where I ensure
      reliable, high-performance database operations and deliver responsive,
      user-friendly digital solutions. With experience in SQL Server
      optimization, frontend development, and cross-functional collaboration, I
      bridge technical precision with practical problem-solving to create
      technology that works flawlessly.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Enthusiastic and dedicated Software Engineer with professional
        experience in both frontend development and technical support. Skilled
        in SQL Server, responsive UI design, and solving real world problems
        through technology. Committed to continuous improvement, teamwork, and
        creating user-centric digital solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Payactiv SDSIT ",
        timeframe: "April 2024 - Present",
        role: "Technical Support Engineer",
        achievements: [
          <>
            Provided technical support for database-related issues using SQL
            Server.
          </>,
          <>
            Designed and executed complex queries, handled performance
            optimization.
          </>,
          <>Assisted in data backup and restoration processes.</>,
          <>Trained users in database usage and ensured high uptime.</>,
        ],
        images: [],
      },
      {
        company: "CodHunt",
        timeframe: "November 2023 - April 2024",
        role: "Frontend Developer",
        achievements: [
          <>Developed and maintained interactive web applications.</>,
          <>
            Translated designs into responsive HTML/CSS and integrated
            JavaScript functionalities.
          </>,
          <>Collaborated with teams to ensure seamless user experience.</>,
        ],
        images: [],
      },
      {
        company: "CodHunt",
        timeframe: "July 2023 - August 2023",
        role: "Frontend Developer Intern",
        achievements: [
          <>
            Assisted in building websites and learning web development
            workflows.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Mirpur University of Science and Technology",
        description: <>Studied software engineering.</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "",
        description: <>• SQL Server</>,
        images: [],
      },
      {
        title: "",
        description: <>• Database Queries</>,
        images: [],
      },
      {
        title: "",
        description: <>• Optimization</>,
        images: [],
      },
      {
        title: "",
        description: <>• HTML & CSS</>,
        images: [],
      },
      {
        title: "",
        description: <>• JavaScript</>,
        images: [],
      },
      {
        title: "",
        description: <>• React</>,
        images: [],
      },
      {
        title: "",
        description: <>• Documentation (LaTeX)</>,
        images: [],
      },
      {
        title: "",
        description: <>• Manual Testing</>,
        images: [],
      },
      {
        title: "",
        description: <>• Data Analysis</>,
        images: [],
      },
      {
        title: "",
        description: <>• Auditing</>,
        images: [],
      },
      {
        title: "",
        description: <>• Quality Assurance</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
