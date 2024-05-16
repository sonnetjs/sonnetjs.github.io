import React, { useState } from 'react';
import { CopyIcon, SquarePatterns, TickIcon } from '../assets/Icons';
import Link from '@docusaurus/Link';

const NPX_COMMAND = 'npx create-sonnet-app@latest';

export default function HeroSection() {
  const [isCopied, setIsCopied] = useState(false)

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
        <div className="flex items-center justify-center gap-2 py-1 pl-1 pr-2 text-sm bg-white border border-solid rounded-full cursor-pointer select-none border-neutral-300 hover:border-neutral-400">
          <div className="px-2 py-1 text-white rounded-full bg-neutral-900">
            Sonnet
          </div>
          <div className="text-neutral-900">Compose Web with native APIs</div>
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
          <Link
            href="/docs/getting-started/overview"
            target="blank"
            className="px-5 py-2 text-sm font-medium text-white rounded-md bg-neutral-950 hover:bg-neutral-800 hover:text-white hover:no-underline"
          >
            Overview
          </Link>
          <Link
            href="/docs/getting-started/quick-start"
            target="blank"
            className="px-5 py-2 text-sm font-medium bg-white border rounded-md text-neutral-900 hover:bg-neutral-50 hover:text-neutral-800 hover:no-underline"
          >
            Quick Start
          </Link>
        </div>
        <div className="flex items-center gap-2 font-mono rounded">
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
