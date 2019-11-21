import React from 'react';
import './Header.scss';

// components

// icons

// Images

import Banner from '../common/assets/images/Main.png';

function Header() {
  return (
    <div className="Header">
      <a href="https://github.com/EvilSpark/react-redux-boilerplate/">
        <img src={Banner} alt="react-boilerplate - Logo" />
      </a>

      <ul>
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="https://github.com/EvilSpark/react-redux-boilerplate">
          Github
        </a>
      </ul>
    </div>
  );
}

export default Header;
