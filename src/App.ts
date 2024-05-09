import { $component, SonnetComponent } from '@sonnetjs/core';
import { HeroSection } from './components/sections';
import { Header, Footer } from './components/shared';

class App extends SonnetComponent {
  public get() {
    return /*html*/ `
      <div>
        ${Header()}
        <main>
          ${HeroSection().get()}
        </main>
        ${Footer()}
      </div>
    `;
  }
}

export default $component(App);
