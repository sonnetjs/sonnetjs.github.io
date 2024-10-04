"use client";

import { FileIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import {useColorMode} from '@docusaurus/theme-common';

interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  language: string;
  filename: string;
  lightTheme: string;
  darkTheme: string;
}

export default function CodeComparison({
  beforeCode,
  afterCode,
  language,
  filename,
  lightTheme,
  darkTheme,
}: CodeComparisonProps) {
  const { colorMode } = useColorMode();
  const [highlightedBefore, setHighlightedBefore] = useState("");
  const [highlightedAfter, setHighlightedAfter] = useState("");

  useEffect(() => {
    const selectedTheme = colorMode === "dark" ? darkTheme : lightTheme;

    async function highlightCode() {
      const before = await codeToHtml(beforeCode, {
        lang: language,
        theme: selectedTheme,
      });
      const after = await codeToHtml(afterCode, {
        lang: language,
        theme: selectedTheme,
      });
      setHighlightedBefore(before);
      setHighlightedAfter(after);
    }

    highlightCode();
  }, [
    colorMode,
    beforeCode,
    afterCode,
    language,
    lightTheme,
    darkTheme,
  ]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className="h-full overflow-auto bg-background font-mono text-xs [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className="h-full p-4 overflow-auto font-mono text-xs break-all bg-background text-foreground">
          {code}
        </pre>
      );
    }
  };
  return (
    <div className="container">
      <div className="relative w-full overflow-hidden border rounded-xl border-border">
        <div className="relative grid md:grid-cols-2 md:divide-x md:divide-border">
          <div>
            <div className="flex items-center p-2 text-sm bg-accent text-foreground">
              <FileIcon className="w-4 h-4 mr-2" />
              {filename}
              <span className="ml-auto">before</span>
            </div>
            {renderCode(beforeCode, highlightedBefore)}
          </div>
          <div>
            <div className="flex items-center p-2 text-sm bg-accent text-foreground">
              <FileIcon className="w-4 h-4 mr-2" />
              {filename}
              <span className="ml-auto">after</span>
            </div>
            {renderCode(afterCode, highlightedAfter)}
          </div>
        </div>
        <div className="absolute flex items-center justify-center w-8 h-8 text-xs -translate-x-1/2 -translate-y-1/2 rounded-md left-1/2 top-1/2 bg-accent text-foreground">
          VS
        </div>
      </div>
    </div>
  );
}
