import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../components";

export const query = graphql`
  query INDIVIDUALPOST($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
      }
      body
    }
  }
`;

function BlogPost({ data, pageContext }) {
  console.log("pageContext:", pageContext);
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export default BlogPost;
