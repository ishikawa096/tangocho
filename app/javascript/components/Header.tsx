import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <h1>
        <Link to="/">Tangocho</Link>
      </h1>
    </div>
    <div>
      {/* ※三⇨in前ログイン・みんなの単語帳→in後 アイコン、名前、マイ単語帳、みんなの単語帳、ログアウト */}
    </div>
  </header>
);

export default Header;
