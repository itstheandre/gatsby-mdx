import { graphql, useStaticQuery } from "gatsby";

export function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SITE {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);
  return site.siteMetadata;
}
