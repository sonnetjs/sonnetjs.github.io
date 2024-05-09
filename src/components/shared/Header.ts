import { Logo } from '../assets';

const Header = () => {
  return /*html*/ `
    <header class="border-b py-4">
      <div class="container flex items-center gap-x-3 sm:gap-x-6 w-full justify-between">
        ${Logo()}
        <nav class="flex-1 flex items-center text-sm font-medium">
          <a href="https://github.com/sonnetjs/sonnet/tree/main/packages/sonnet-core" target="blank">Docs</a>
        </nav>
        <div>
          <a href="https://github.com/sonnetjs/sonnet" target="blank">
            <img src="https://img.shields.io/github/stars/sonnetjs/sonnet">
          </a>
        </div>
      </div>
    </header>
  `;
};

export default Header;
