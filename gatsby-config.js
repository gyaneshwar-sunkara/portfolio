module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Gyaneshwar Sunkara',
    // Main Site Title
    title: `Gyaneshwar Sunkara | Software Developer`,
    // Description that goes under your name in main bio
    description: `Experienced software engineer pioneering in multiple domains.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/gyani-sunkara`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/gyani-sunkara`,
    // Optional: Resume URL
    resume: `https://www.google.drive.com/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'BHIM',
        description:
          'Bharat Interface for Money is a UPI (Unified Payment Interface) enabled initiative to facilitate safe, easy and instant digital payments through mobile phones.',
        link:
          'https://play.google.com/store/apps/details?id=in.org.npci.upiapp',
      },
      {
        name: 'Repeat Bucket',
        description:
          'Quick grocery delivery platform with a suite of mobile applications for customers, delivery agents, and product suppliers made using React Native for Android and IOS, connected to a NodeJS backend with MongoDB database. The landing page for the platform was built using a NextJS template.',
        link: 'https://play.google.com/store/apps/details?id=com.repeatbucket',
      },
      {
        name: 'Highway Asset Tracker',
        description:
          'A custom object tracking software that detects and tracks highway assets like signboards, streetlights, kilometer stones, etc. Location coordinates of unique assets are recorded for maintenance purposes. Built using python and supporting frameworks uses YOLOv5 for object detection and a modified SORT algorithm for object tracking.',
        link:
          'https://drive.google.com/file/d/1nCER06ZRmSpdKCq4czaqMsTpQ2x-wEtL/view?usp=sharing',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Winjit Technologies',
        role: 'Senior Software Engineer, July 2022 - Present',
        description: 'sfasdfa',
        link: 'https://drive.google.com/file/d/1FdQsG6SkqpKZWh9RwQ-s6OlCUY6LEab7/view?usp=sharing',
      },
      {
        name: 'Cube Highways',
        role: 'Software Developer, January 2021 - July 2022',
        description: 'hhhhhhhhhh nnnnnnnnnnnn uuuuuuuuu',
        link: 'https://drive.google.com/file/d/1xI1XNk3e8d7LcPRPYtRcP2wG_XZyDCTc/view?usp=sharing',
      },
      {
        name: 'Inroads Software',
        role: 'Software Developer Intern, July 2019 - January 2021',
        description: 'iiiiiiiiiii hhhhhhhhhhhhhh pppppppppoooooooooo  ',
        link: 'https://drive.google.com/file/d/1FlMyz8u1evJZYikD9L6erPBjbejhGCuN/view?usp=sharing',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
    // Optional: List your tests, they must have `name`, `score` and `link`.
    tests: [
      {
        name: 'IELTS',
        description: 'Overall : 8.0, Listening: 8.5, Reading: 8.5, Writing: 7.0, Speaking: 7.0',
        link: 'https://drive.google.com/file/d/13fJjjAiqBPyYP-Jle0QMpOFwjOKwzz9L/view?usp=sharing',
      },
      {
        name: 'GRE',
        description: 'Total: 311, Verbal: 152, Quantitative: 159',
        link: 'https://drive.google.com/file/d/10XPs52jqN_dtluFUhoqRl4RkZoBrB0zJ/view?usp=sharing',
      },
    ],
    // Optional: List your certifications, they must have `name`,  `description` and `link`.
    certifications: [
      {
        name: 'Machine Learning',
        description: '8.0',
        link: 'https://www.coursera.org/account/accomplishments/verify/WY6A79WYKC84',
      },
      {
        name: 'Deep Learning',
        description: '311',
        link: 'https://www.coursera.org/account/accomplishments/specialization/HLVKU38SP4DP',
      },
    ],
    // Optional: List your accolades, they must have `name`, `description` and `link`.
    accolades: [
      {
        name: 'Department Topper',
        description: 'Awarded academic excellence for securing First Rank(Computer Science and Engineering Department) in the Sophomore year of my Bachelor’s Degree',
        link: 'https://drive.google.com/file/d/1o1WfjyAnEzKitujql4pSa14bQxDH63um/view?usp=sharing',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
