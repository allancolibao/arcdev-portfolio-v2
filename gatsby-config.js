require('dotenv').config({ path: '.env' })

module.exports = {
  siteMetadata: {
    title: `Allan Colibao`,
    description: `Front-End Software Engineer`,
    author: `@allancolibao`,
    menuLinks:[
        {
          name:'Home',
          link:'#home'
        },
        {
          name:'Projects',
          link:'#projects'
        },
        {
          name:'Repository',
          link:'#repository'
        },
        {
          name:'Blog',
          link:'#blog'
        },
        {
          name:'About',
          link:'#about'
        }
      ]
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/arcdev-logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
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
          appId: process.env.GATSBY_FIREBASE_APP_ID
        }
      }
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
          rootMargin: '0% 50%',
          
      }
    },
    `gatsby-plugin-transition-link`,
  ],
}
