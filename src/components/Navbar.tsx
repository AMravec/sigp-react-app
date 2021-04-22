/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes.config';

const Navbar: React.FC = () => {
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const toggleBurger = useCallback((event) => {
    event.preventDefault();
    setShowBurger((v) => !v);
  }, []);

  return (<nav className="navbar" role="navigation">
    <div className="navbar-brand">
      <span className="navbar-item is-size-3">
        OMDb
      </span>

      <a onClick={toggleBurger} role="button" className={`navbar-burger ${showBurger ? "is-active" : ""}`}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className={`navbar-menu ${showBurger ? "is-active": ""}`}>
      <div className="navbar-start">
        <Link onClick={() => setShowBurger(false)} to={routes.search} className="navbar-item">Search</Link>
        <Link onClick={() => setShowBurger(false)} to={routes.favorite} className="navbar-item">Favorite</Link>
      </div>
    </div>
  </nav>)
};

export default Navbar;
