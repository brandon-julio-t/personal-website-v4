"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { CodeHighlight } from "./code-highlighter";
import { Button } from "./ui/button";
import { Table, TableCell, TableHead, TableRow } from "./ui/table";

interface MarkdownProps {
  content: string;
}

const getHeadingId = (children: React.ReactNode) => {
  return children?.toString()?.toLowerCase().replaceAll(" ", "-");
};

const Markdown = React.memo<MarkdownProps>(({ content }) => {
  return (
    <>
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ className, id, ...props }) => (
            <h1
              id={id || getHeadingId(props.children)}
              className={cn("text-2xl font-medium", className)}
              {...props}
            />
          ),
          h2: ({ className, id, ...props }) => (
            <h2
              id={id || getHeadingId(props.children)}
              className={cn("text-xl font-medium", className)}
              {...props}
            />
          ),
          h3: ({ className, id, ...props }) => (
            <h3
              id={id || getHeadingId(props.children)}
              className={cn("text-lg font-medium", className)}
              {...props}
            />
          ),
          h4: ({ className, id, ...props }) => (
            <h4
              id={id || getHeadingId(props.children)}
              className={cn("text-base font-medium", className)}
              {...props}
            />
          ),
          p: ({ className, ...props }) => (
            <p className={cn("text-sm", className)} {...props} />
          ),
          small: ({ className, ...props }) => (
            <small className={cn("text-xs", className)} {...props} />
          ),
          a: ({ className, href, ...props }) => (
            <Button
              variant="link"
              asChild
              className={cn("h-auto p-0", className)}
              size="sm"
            >
              <Link href={href ?? "#"} {...props} />
            </Button>
          ),
          ul: ({ className, ...props }) => (
            <ul className={cn("ml-6 list-disc", className)} {...props} />
          ),
          ol: ({ className, ...props }) => (
            <ol className={cn("ml-6 list-decimal", className)} {...props} />
          ),
          li: ({ className, ...props }) => (
            <li className={cn("", className)} {...props} />
          ),
          blockquote: ({ className, ...props }) => (
            <blockquote
              className={cn(
                "border-muted text-muted-foreground border-l-4 pl-4 italic",
                className,
              )}
              {...props}
            />
          ),
          img: ({ className, ...props }) => (
            // Using regular img tag for markdown content as the src URLs come from user content
            // and may be external URLs that Next.js Image component doesn't support without configuration
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className={cn("max-w-full rounded-md", className)}
              alt={props.alt ?? ""}
              {...props}
            />
          ),
          code: CodeHighlight,
          pre: "pre",
          hr: (props) => <hr className="border-muted" {...props} />,
          table: ({ className, ...props }) => (
            <Table className={cn("", className)} {...props} />
          ),
          tr: ({ className, ...props }) => (
            <TableRow className={cn("", className)} {...props} />
          ),
          th: ({ className, ...props }) => (
            <TableHead className={cn("", className)} {...props} />
          ),
          td: ({ className, ...props }) => (
            <TableCell className={cn("", className)} {...props} />
          ),
          strong: ({ className, ...props }) => (
            <strong className={cn("font-semibold", className)} {...props} />
          ),
          em: ({ className, ...props }) => (
            <em className={cn("italic", className)} {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </>
  );
});

Markdown.displayName = "Markdown";

export { Markdown };
