import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import { Prism as PrismSyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

export const SyntaxHighlighter = React.memo<
  React.ComponentProps<typeof PrismSyntaxHighlighter>
>(({ language = "tsx", children, ...props }) => {
  const [copied, setCopied] = React.useState(false);

  const code = React.useMemo(
    () =>
      typeof children === "string"
        ? children
        : React.Children.map(children, (child) =>
            typeof child === "string" ? child : "",
          ).join(""),
    [children],
  );

  const handleCopy = React.useCallback(async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      prompt("Failed to copy code to clipboard. Please copy manually.", code);
    }
  }, [code]);

  const isJustOneLine = React.useMemo(
    () => code.split("\n").length === 1,
    [code],
  );

  return (
    <div className="relative">
      <Button
        type="button"
        size="icon"
        variant="secondary"
        aria-label={copied ? "Copied!" : "Copy code"}
        onClick={handleCopy}
        className={cn(
          "absolute z-1",
          isJustOneLine ? "top-5 right-2" : "top-2 right-2",
        )}
      >
        <AnimatePresence mode="popLayout">
          {copied ? (
            <motion.span
              key="copied"
              initial={{ opacity: 0, scale: 0, filter: "blur(2px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0, filter: "blur(2px)" }}
            >
              <Check />
              <span className="sr-only">Copied!</span>
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0, filter: "blur(2px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0, filter: "blur(2px)" }}
            >
              <Copy />
              <span className="sr-only">Copy code</span>
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      <PrismSyntaxHighlighter
        language={language}
        style={materialOceanic}
        className="rounded-xl !font-mono"
        codeTagProps={{
          style: {
            fontFamily: "var(--font-mono)",
          },
        }}
        {...props}
      >
        {code}
      </PrismSyntaxHighlighter>
    </div>
  );
});
SyntaxHighlighter.displayName = "SyntaxHighlighter";
