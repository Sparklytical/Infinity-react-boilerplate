import React from 'react';
import './Header.scss';

// components

// icons

// Images

import Banner from '../common/assets/images/Main.png';

function Header() {
  return (
    <div>
      <a href="https://github.com/EvilSpark/react-redux-boilerplate/">
        <img src={Banner} alt="react-boilerplate - Logo" />
      </a>
    </div>
  );
}

export default Header;
