import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import styled from "styled-components";
import { copyToClipboard } from "../../../utils";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  position: relative;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  font-family: "Courier New", "Courier New", Courier, monospace, monospace;
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2.2em;
  user-select: none;
  opacity: 0.7;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25em;
  border: none;
  border-radius: 3px;
  margin: 0.25rem;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

export function Code({ codeString, language, ...props }) {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
  function handleClick() {
    copyToClipboard(codeString);
  }
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
}
