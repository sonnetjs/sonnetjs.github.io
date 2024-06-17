import React, { useState } from 'react';
import Link from '@docusaurus/Link';

import { Button } from '../ui/button';
import { CopyIcon, SquarePatterns, TickIcon } from '../assets/Icons';
import AnimatedShinyText from '../magicui/animated-shiny-text';
import { cn } from '@site/src/lib/utils';
import { ArrowRight, ArrowRightIcon } from 'lucide-react';
import ShinyButton from '../magicui/shiny-button';

const NPX_COMMAND = 'npx create-sonnet-app@latest';

export default function HeroSection() {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(`${NPX_COMMAND}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 min-h-[calc(100vh-70px)] flex gap-y-6 justify-center items-center flex-col">
        <div
          className={cn(
            'group rounded-full text-sm border border-black/5 bg-neutral-100 text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800',
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center gap-1 py-1 pl-1 pr-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="px-2 py-1 text-white rounded-full bg-neutral-900">
              Sonnet
            </span>
            <span className="text-neutral-900">
              Compose Web with native APIs
            </span>
            <ArrowRight className="w-4 h-4" />
          </AnimatedShinyText>
        </div>
        <div className="space-y-3">
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-fit mx-auto xl:text-[120px] text-center font-extrabold">
            Vanilla JavaScript <br /> in Structured Way
          </div>
          <div className="text-sm text-center sm:py-4 md:py-8 sm:text-base md:text-lg lg:text-2xl xl:text-3xl w-fit">
            An opinionated framework for writing clean and organized JavaScript
            code
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/docs/getting-started/overview" target="blank">
            <Button
              className="px-6"
              variant="gooeyLeft"
            >
              Overview
            </Button>
          </Link>
          <Link href="/docs/getting-started/quick-start" target="blank">
            <ShinyButton text="Quick Start" />
          </Link>
        </div>
        <div className="flex items-start gap-2 font-mono rounded">
          <div>~ {NPX_COMMAND}</div>
          <div className="w-4 h-4 cursor-pointer" onClick={handleCopy}>
            {isCopied ? <TickIcon /> : <CopyIcon />}
          </div>
        </div>
      </div>
      <div>
        <SquarePatterns />
      </div>
    </section>
  );
}
