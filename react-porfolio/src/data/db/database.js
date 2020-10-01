import Mock from "../mock";

const database = {
  information: {
    name: "Jeancarlos Perez",
    aboutContent: "Full Stack Developer.",
    aboutContentTwo: "Bacholers & Masters in Computer Engineering.",
    aboutContentThree: "Specializing in SPA & Cross Platform Solutions.",
    age: 27,
    phone: "(786) 521-3511",
    nationality: "",
    language: "English, Spanish",
    email: "Jeanp3rez@hotmail.com",
    address: "Orlando, FL",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/jeancarlosp/",
      dribbble: "",
      github: "https://github.com/Jpere547/",
    },
    brandImage: "/images/brand-image.png",
    aboutImage: "/images/aboutMe.png",
    aboutImageLg: "/images/aboutMe.png",
    cvfile: "/files/empty.pdf",
  },
  services: [
    {
      title: "Web Development",
      icon: "color-pallet",
      details:
        "Background with Wordpress, Wix, and building Single Page Apps. ",
    },
    {
      title: "Mobile & Web Apps",
      icon: "code",
      details:
        "Experienced with Flutter and React-Native for all your cross platform solutions.",
    },
    {
      title: "Hardware & IT",
      icon: "mobile",
      details:
        "Computer Hardware Experience and Background. Built my first PC at the age of 12.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "React",
      value: 90,
      icon: "React",
    },
    {
      title: "NodeJS",
      value: 90,
      icon: "nodejs",
    },
    {
      title: "Javascript",
      value: 100,
      icon: "javascript",
    },
    {
      title: "MongoDB",
      value: 80,
      icon: "mongodb",
    },
    {
      title: "Angular",
      value: 70,
      icon: "angular",
    },
    {
      title: "Java",
      value: 80,
      icon: "java",
    },
    {
      title: "C++",
      value: 85,
      icon: "C++",
    },
    {
      title: "Firebase",
      value: 85,
      icon: "firebase",
    },
    {
      title: "Heroku",
      value: 65,
      icon: "heroku",
    },
    {
      title: "GraphQL",
      value: 80,
      icon: "graphql",
    },
    {
      title: "Apollo",
      value: 80,
      icon: "apollo",
    },
    {
      title: "SASS",
      value: 70,
      icon: "sass",
    },
  ],
  tools: [
    {
      title: "Visual Studio Code",
      value: 90,
      icon: "vsco",
    },
    {
      title: "XCode",
      value: 60,
      icon: "xcode",
    },
    {
      title: "Intellij Idea",
      value: 90,
      icon: "intellijidea",
    },
    {
      title: "Atom",
      value: 90,
      icon: "atom",
    },
    {
      title: "Docker",
      value: 70,
      icon: "docker",
    },
    {
      title: "Notion",
      value: 65,
      icon: "notion",
    },
    {
      title: "Git",
      value: 100,
      icon: "git",
    },
    {
      title: "Photoshop",
      value: 65,
      icon: "photoshop",
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
      githubUrl: "",
      projectType: "Course",
      tags: ["react", "graphql", "firebase"],
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
      githubUrl: "",
      projectType: "Freelance",
      tags: ["react", "graphql", "firebase"],
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
      githubUrl: "",
      projectType: "Hobby",
      tags: ["react", "graphql", "firebase"],
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
      githubUrl: "",
      projectType: "Course",
      tags: ["react", "graphql", "firebase"],
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "June 2020 - Present",
        position: "Senior Lead Developer",
        company: "Bandit Gym",
        companyUrl: "https://www.banditgym.com/",
        details: [
          "Working as a Senior Lead Developer on with a small startup to bring a new user experience to the company’s product.",
          "Aiding in bringing their current workout application from a Cordova Platform to a React-Native Solution.",
          "Leading and building a Scrum Team with Sprints and Epics to meet deadlines.",
          "Developing a SPA using the MERN Stack to achieve a cross-platform solution between Mobile Application and Web Application.",
          "Using Firebase as the main deployment to store user data, authenticate users, and capture workout data.",
        ],
      },
      {
        id: 2,
        year: "March 2018 - Present",
        position: "Full Stack Engineer",
        company: "Northrop Grumman",
        companyUrl: "https://www.NorthropGrumman.com",
        details: [
          "Developing in a Scrum environment with Daily Stand-ups, issue tracking, and source control using Atlassian Tools Suite.",
          "Teaching the team how to efficiently get started with GraphQL using Java and how to create simple Queries and Mutations.",
          "Working on SATCOM technologies with other Northrop Grumman teams to provide feedback and test functionalities.",
          "Developed in a Scrum environment with Daily Stand-ups, issue tracking, and source control using Atlassian Tools Suite; Jira, Confluence, BitBucket, and Stash.",
          "Built a Web GUI Tools Set Suite for the ISRM SNA program to provide support to the different tools. ",
          "These Web GUI Tools were created with a Full-Stack Development approach which includes using C++ embedded with CivetWeb Server on the Backend. And using AngularJS, Bootstrap, and HTML for the Front-End GUI.",
          "The Web GUI utilized the Leaflet JS Library to plot and generate interactive Map GUI.",
          "Created Test Cases and ran tests using Jenkins in order to properly verify new releases.",
          "Reviewed pull-requests and peer reviews within the team to maintain and improve velocity and development results through the use of BitBucket, Crucible, and Fisheye.",
          "Worked with C++ and Qt5 Creator to create filtering software for WireShark package capture files.",
          "Utilized SonarQube-Scanner to ensure quality code, track down issues, fix vulnerabilities, and manage team velocity.",
          "Worked closely with a small team to divide the Tickets and generate different tools for the MAF DMO.",
          "Built unit tests using Google Test Frameworks in Qt5 for a variety of kinematical filters.",
          "Developed in a Scrum environment with Daily Stand-ups, issue tracking, and source control using GitLab.",
          "Worked with the CHORD system to provide support and development on the architecture.",
          "Designed the CHORD Pipeline components in a virtual environment using RedHat.",
          "Managed task and feedback within a scrum environment. Using the Atlassian tool sets, Jira, Confluence, Crowd, BitBucket, and Stash. Daily Stand-Ups.",
          "Used a variety of tools such as Mobaxterm, PuTTY, IntelliJ IDEA, Git, Gradle, C++, Java, Bash, and more. ",
        ],
      },
      {
        id: 3,
        year: "May 2016 – Feb 2018",
        position: "Systems Integration & Test Engineer",
        company: "Harris Corporation",
        companyUrl: "https://www.harris.com/",
        details: [
          "Cleared for a FAA Public Trust information and granted access to work on the CSS-Wx Program.",
          "Used Linux based server, tested many functionalities of the CSS-Wx system using VMs, TeraTerm, and Xming.",
          "As well as using the Atlassian tools such as JIRA, Bitbucket, and Confluence to track tasks and complete tests.",
          "Developed software using Java, Groovy, and C++ to use towards testing scripts and automating tasks.",
          "Used Jenkins as an automation testing platform to stress test and quality control scripts.",
          "Worked with the NEXRAD Weather Simulator and Servers in verifying their functionality and installation.",
          "Automated and updated the TWDR Simulator within the CSSWx system test environment.",
          "Used the Harris Automation Tool, created automated scripts using Java in order to automate, test, and sell off requirements for customers.",
          "Worked in a Scrum and Agile environment to create tasks, meet deadlines, complete sell offs, and organize work within the team every day.",
        ],
      },
      {
        id: 4,
        year: "Aug 2015 - May 2016",
        position: "Hardware Engineer",
        company: "SkyPatrol",
        companyUrl: "https://www.skypatrol.com/",
        details: [
          "Developed scripts using Python for GPS systems used in fleet vehicles, dealership cars, and personal assets.",
          "Interning as a Hardware Engineer, learning from some of the best in the business.",
          "Designed programs that allow access to configuration files in GPS devices and firmware.",
          "Used QT5 to create and design GPS program GUI and developed the backend using Python. I worked in a Linux environment to use these tools.",
        ],
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2017 - 2019",
        graduation: "Master of Science in Computer Engineering",
        university: "University of Central Florida",
        universityUrl: "https://www.ucf.edu/",
        details: [
          "Areas of Focus: Computer Systems and Very Large-Scale Integration (CS/VLSI)",
        ],
      },
      {
        id: 2,
        year: "2012 - 2016",
        graduation: "Bachelor of Science in Computer Engineering",
        university: "Florida International University",
        universityUrl: "https://www.fiu.edu/",
        details: [
          "Areas of Focus: Computer Architecture, Microprocessor Design, and Embedded Systems.",
        ],
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["+1-786-521-3511"],
    emailAddress: ["Jeanp3rez@hotmail.com"],
    address: "Orlando, FL, USA",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/tools").reply((config) => {
  const response = database.tools;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
