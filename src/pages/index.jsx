import { graphql, Link } from "gatsby";
import React from "react";
import { Layout } from "../components";
import styled from "styled-components";
export const query = graphql`
  query MyQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;
const IndexWrapper = styled.main``;

const PostWrapper = styled.article``;

function HomePage({ data }) {
  console.log("dat:", data);
  return (
    <Layout>
      <IndexWrapper>
        {data.allMdx.nodes.map(
          (el) =>
            console.log(el) || (
              <PostWrapper key={el.id}>
                <Link to={el.fields.slug}>
                  <h1>{el.frontmatter.title}</h1>
                  <p>{el.frontmatter.date}</p>
                  <p>{el.excerpt}</p>
                </Link>
              </PostWrapper>
            )
        )}
      </IndexWrapper>
    </Layout>
  );
}

export default HomePage;
// export default () => {
//   const meta = useSiteMetadata()
//   console.log('meta:', meta)
//   return (
//     <Layout>
//     {/* <StyledH1>{meta.title}</StyledH1> */}
//     <p>{meta.description}</p>
//     </Layout>
//   )
// };
