import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

const Header = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        <li key={'About'}><Link to ={'/about'}>About</Link></li>
        <li key={'Projects'}><Link to ={'/projects'}>Projects</Link></li>
        <li key="Resume"><a href="https://drive.google.com/open?id=11gCj6NwvS1Xsc0XJyOTh4fdoNXvUN8JF">Resume</a></li>
        <li key={'Contact'}><Link to ={'contact'}>Contact</Link></li>
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Header;
