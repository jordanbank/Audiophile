module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Title",
  },
  plugins: [
      {
        resolve:`gatsby-plugin-offline`,
        options:{

        }
      },
      {
        resolve:`gatsby-source-filesystem`,
        options:{
            name:`data`,
            path:`${__dirname}/src/data/`
        }
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-react-helmet`,
      {
        resolve:`gatsby-plugin-sharp`,
        options:{
            defaults: {},
            failOnError: true,
            base64Width: 20,
            forceBase64Format: `png`,
            useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
            stripMetadata: true,
            defaultQuality: 50,
        }
      },
      `gatsby-plugin-sitemap`,
      `gatsby-transformer-json`
  ],
};
