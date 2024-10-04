import CodeComparison from "../ui/code-comparison";

const beforeCode = `import { $component, SonnetComponent } from '@sonnetjs/core';

class Counter extends SonnetComponent {
  counter = 0;

  public script() {
    const counterButton = document.getElementById(
      'counter',
    ) as HTMLButtonElement;
    counterButton.addEventListener('click', () => {
      this.counter += 1;
      counterButton.innerText = \`count is \${this.counter}\`;
    });
  }

  public get() {
    return /*html*/ \`
    <div>
      <h1>Sonnet JS Counter</h1>
      <div class="card">
        <button 
          id="counter" 
          type="button" 
          class="btn"
        >
          count is \${this.counter}
        </button>
      </div>
    </div>
    \`;
  }
}

export default $component(Counter);`;

const afterCode = `import { $component, SonnetComponent } from '@sonnetjs/core';
import { div, h1, button } from '@sonnetjs/dom';

class Counter extends SonnetComponent {
  counter = 0;

  public script() {
    const counterButton = document.getElementById(
      'counter',
    ) as HTMLButtonElement;
    counterButton.addEventListener('click', () => {
      this.counter += 1;
      counterButton.innerText = \`count is \${this.counter}\`;
    });
  }

  public get() {
    return ( 
      div().children([
        h1().innerText('Sonnet JS Counter').get(),
        div().class('card').children([
          button()
            .id('counter')
            .type('button')
            .class('btn')
            .innerText(\`count is \${this.counter}\`)
            .get(),
        ]).get(),
      ]).get()
    );
  }
}

export default $component(Counter);`;

export function Code() {
  return (
    <CodeComparison
      beforeCode={beforeCode}
      afterCode={afterCode}
      language="typescript"
      filename="App.ts"
      lightTheme="github-light"
      darkTheme="github-dark"
    />
  );
}
