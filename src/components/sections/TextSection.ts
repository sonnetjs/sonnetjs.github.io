import { $component, SonnetComponent } from '@sonnetjs/core';

class TextSection extends SonnetComponent {
  public get() {
    return /*html*/ `
      <section class="relative overflow-hidden h-screen flex justify-center items-center">
        <div class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-fit mx-auto xl:text-[120px] text-center font-extrabold !leading-[1.2]">${this.children()}</div>
      </section>
    `;
  }
}

export default $component(TextSection);
