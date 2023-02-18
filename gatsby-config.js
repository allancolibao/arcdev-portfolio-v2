require("dotenv").config({ path: ".env" })

module.exports = {
  siteMetadata: {
    title: `Allan Colibao - Front-end Developer`,
    description: `I'm Allan Reyes Colibao. I am a design-oriented front-end developer who loves to build complex interactive web applications. Welcome to my portfolio version II`,
    author: `@allancolibao`,
    siteUrl: `https://arcdev.me`,
    image: `/arcdev.png`,
    backgroundColor: `#ffffff`,
    keywords: `Allan Colibao, Arcdev, Arcdev Portfolio, Allan Colibao Portfolio, Personal Portfolio, Front-end Developer, Web Developer, Software Engineer`,
    fbAppID: process.env.GATSBY_FB_APP_ID,
    menuLinks: [
      {
        name: "Home",
        link: "#home",
      },
      {
        name: "Projects",
        link: "#projects",
      },
      {
        name: "Repository",
        link: "#repository",
      },
      {
        name: "Blog",
        link: "#blog",
      },
      {
        name: "About",
        link: "#about",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arcdev Portfolio V2`,
        short_name: `arcdev-v2`,
        start_url: `/`,
        background_color: `#211c42`,
        theme_color: `#211c42`,
        display: `minimal-ui`,
        icon: `src/images/arcdev-logo.png`,
        icons: [
          {
            src: `favicons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ]
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, 
        develop: false,
        tailwind: true, 
        ignore: ['/custom.css', 'node_modules/gatsby-plugin-transition-link/style.css', 'node_modules/sal.js/dist/sal.css'], 
        purgeCSSOptions: {
          safelist: ['animate-spin'],
        },
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          firestore: true,
        },
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.2,
        once: true,
        disable: false,
        rootMargin: "0% 50%",
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://arcdev.me`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://arcdev.me",
        sitemap: "https://arcdev.me/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
