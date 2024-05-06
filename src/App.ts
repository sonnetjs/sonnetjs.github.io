import { $component, SonnetComponent } from '@sonnetjs/core';
import { div, main } from '@sonnetjs/html';
import HeroSection from './components/sections';
import { Header, Footer } from './components/shared';

class App extends SonnetComponent {
  public get() {
    return div()
      .children(
        Header(),
        main().children(HeroSection().get()).get(),
        Footer(),
      )
      .get();
  }
}

export default $component(App);
