import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Fahad",
  lastName: "Mushtaq",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/fahad.jpg",
  email: "fahadmushtaqwork12@gmail.com",
  phone: "+966 556 513 647",
  location: "Riyadh, Saudi	Arabia", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
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
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/",
  // },
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
    name: "+92 340 0503319",
    icon: "phone",
    link: `tel:${person.phone}`,
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
      I'm Fahad Mushtaq, a software engineer, I ensure
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
        experience in SQL	Server,	SQL	query	execution,	database	troubleshooting,	
        incident	management,	user support,	transaction	issue	resolution,	and	application	support.	
        Skilled	at	investigating	production	issues,	analyzing database	records,	maintaining	data	accuracy,	
        and	working	closely	with	development	and	QA	teams.	
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Payactiv SDSIT ",
        timeframe: "Apr 2024 - Oct 2025",
        role: "Database Support Engineer",
        achievements: [
          <>
            Provided	production	database	support	for	enterprise	applications.
          </>,
          <>
            Investigated	application	issues	using	SQL	Server.
          </>,
          <>Executed	SQL	queries	to	verify	and	troubleshoot	production	data.</>,
          <>Analyzed	user-reported	database	issues	and	provided	timely	resolutions.</>,
      
          <>Assisted	in	resolving	transaction-related	issues.</>,
      
          <>Supported	application	login,	account	access,	and	user	management.</>,
      
          <>Worked	with	development	teams	to	identify	database-related	defects.</>,
      
          <>Validated	database	records	for	accuracy	and	consistency.</>,
      
          <>Performed	data	verification	before	and	after	production	updates.</>,
      
          <>Performed	data	verification	before	and	after	production	updates.</>,
      
          <>Monitored	database	performance	and	system	health. </>,
      <>Maintained	incident	records	and	documented	issue	resolutions. </>,
      <>Supported	daily	operational	database	activities. </>,
      <>Escalated	critical	database	issues	whenever	required.</>,
      <>Assisted	QA	and	business	teams	during	production	issue	investigations. </>,
      <>Maintained	high	service	quality	while	meeting	SLA	requirements. </>,
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
      // {
      //   company: "CodHunt",
      //   timeframe: "July 2023 - August 2023",
      //   role: "Frontend Developer Intern",
      //   achievements: [
      //     <>
      //       Assisted in building websites and learning web development
      //       workflows.
      //     </>,
      //   ],
      //   images: [],
      // },
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
        description: <>• SQL Programming</>,
        images: [],
      },
      {
        title: "",
        description: <>• Java(Basic)</>,
        images: [],
      },
      {
        title: "",
        description: <>• Operating Systems</>,
        images: [],
      },
      {
        title: "",
        description: <>• Windows tools</>,
        images: [],
      },
      {
        title: "",
        description: <>• SQL	Server	Management	Studio	(SSMS)</>,
        images: [],
      },
      {
        title: "",
        description: <>• Microsoft Excel</>,
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
        description: <>• Documentation	(Latex)</>,
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
