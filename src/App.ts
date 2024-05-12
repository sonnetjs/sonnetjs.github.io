import { $component, SonnetComponent } from '@sonnetjs/core';
import { Header, Footer } from './components/shared';
import { HeroSection, TextSection } from './components/sections';

class App extends SonnetComponent {
  public get() {
    return /*html*/ `
      <div>
        ${Header()}
        <main>
          ${HeroSection().get()}
          ${TextSection().children("No Extra Runtime Compiler Required").get()}
          ${TextSection().children("JavaScript Framework for Structured Code").get()}
          ${TextSection().children("As fast as Native JavaScript").get()}
          ${TextSection().children("Composable and Reusable Components").get()}
        </main>
        ${Footer()}
      </div>
    `;
  }
}

export default $component(App);
