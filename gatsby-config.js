const path = require("path");
module.exports = {
  siteMetadata: {
    title: "Its the blog",
    description: "This is my coding blog",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, ".md"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, "posts"),
        name: "posts",
      },
    },
  ],
};
