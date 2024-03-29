import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Code } from "./src/components/page-elements";

const components = {
  h2: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
  "p.inlineCode": (props) => (
    <code style={{ backgroundColor: "lightgrey" }} {...props}></code>
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
