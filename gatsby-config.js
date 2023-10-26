module.exports = {
  siteMetadata: {
    title: `Stephanie Shields Portfolio`,
    siteUrl: `https://stephanie-shields.github.io/stephanie-shields-portfolio`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: ['gatsby-source-filesystem', 'gatsby-omni-font-loader'],
    options: {
      "name": "images",
      "path": "./src/images/",
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `PT Serif`,
          file: `https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap`,
        },
      ],
    },
    __key: "images"
  }],
  pathPrefix: "/stephanie-shields-portfolio"
};