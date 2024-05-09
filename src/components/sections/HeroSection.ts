import { $component, SonnetComponent } from '@sonnetjs/core';
import { TickIcon, CopyIcon, SquarePatterns } from '../assets';

const NPX_COMMAND = 'npx create-sonnet-app';

class HeroSection extends SonnetComponent {
  public script() {
    const copyEl = document.getElementById('copy') as HTMLDivElement;
    copyEl.onclick = () => {
      navigator.clipboard.writeText(`${NPX_COMMAND}@latest`);
      copyEl.innerHTML = TickIcon();
      setTimeout(() => {
        copyEl.innerHTML = CopyIcon();
      }, 3000);
    };
  }

  public get() {
    return /*html*/ `
      <section class="relative overflow-hidden">
        <div class="container relative z-10 min-h-[calc(100vh-115px)] flex gap-y-6 justify-center items-center flex-col">
          <div class="flex gap-2 justify-center bg-white items-center rounded-full border py-1 pl-1 pr-2 hover:border-black cursor-pointer select-none text-sm">
            <div class="bg-black text-white rounded-full py-1 px-2">Sonnet</div>
            <div>Compose Web with native APIs</div>
          </div>
          <div class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center max-w-5xl mx-auto font-extrabold">Connect Your Ideas With Chain</div>
          <div class="text-neutral-600 text-sm sm:py-4 md:py-8 sm:text-base md:text-lg lg:text-xl text-center">An opinionated framework for writing clean and organized Vanilla JavaScript code</div>
          <div class="flex gap-4">
            <a href="https://github.com/sonnnetjs/sonnet/tree/main/packages/sonnet-core" target="blank" class="bg-black rounded-md text-sm font-medium text-white hover:bg-black/80 px-5 py-2">Learn More</a>
            <a href="https://github.com/sonnetjs/sonnet/tree/main/examples/basic" target="blank" class="bg-white rounded-md text-sm font-medium text-black hover:bg-neutral-50 border px-5 py-2">Examples</a>
          </div>
          <div class="flex items-center gap-2 font-mono text-gray-700 rounded">
            <div>~ ${NPX_COMMAND}</div>
            <div id="copy" class="w-4 h-4 cursor-pointer">${CopyIcon()}</div>
          </div>
        </div>
        <div>${SquarePatterns()}</div>
      </section>
    `;
  }
}

export default $component(HeroSection);
