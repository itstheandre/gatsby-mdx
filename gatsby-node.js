const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/blogPost.jsx");

  return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      throw res.errors;
    }

    const posts = res.data.allMdx.nodes;
    posts.forEach((post, i) => {
      const previous = i === posts.length - 1 ? null : posts[i + 1];
      const next = i === 0 ? null : posts[i - 1];
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          next,
          previous,
        },
      });
    });
  });
};
