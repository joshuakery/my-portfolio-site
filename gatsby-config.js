/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Joshua Kery`,
    description: `Portfolio Website`,
    author: `Joshua Kery`,
  },
  plugins: [
    

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/post_images`,
      },
    },
    //https://www.gatsbyjs.org/packages/gatsby-image/ and also....
    //https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
    `gatsby-transformer-sharp`,
    //https://www.gatsbyjs.org/packages/gatsby-remark-images/
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          //https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files/?=copy-
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          //https://www.gatsbyjs.org/packages/gatsby-remark-table-of-contents/
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 1,
              toHeading: 1
            },
          },
          //https://www.gatsbyjs.org/packages/gatsby-remark-autolink-headers/
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: false,
            },
          },
          //https://www.gatsbyjs.org/packages/gatsby-remark-embed-video/?=video
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            }
          },
          {
            resolve: "gatsby-remark-embed-soundcloud",
            options: {
              width: 800, // default is "100%"
              height: 500, // default is 300
              color: "#ff00ff", // default is #ff5500
              autoplay: true, // default is false
            }
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              showCaptions: true,
              maxWidth: 1500,
            },
          },
        ],
      },
    },
    //https://www.gatsbyjs.org/tutorial/part-eight/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
