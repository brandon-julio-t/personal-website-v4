import * as React from "react";

interface ExternalLinkProps {
  underline?: boolean;
}

const ExternalLink: React.FunctionComponent<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & ExternalLinkProps
> = ({ className, underline, ...rest }) => {
  return (
    <a
      {...rest}
      className={`${underline ? "underline" : ""} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default ExternalLink;
