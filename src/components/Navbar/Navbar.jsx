import React from "react";
import { NavItems } from  './nav-data.js';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
        <Link class="uk-navbar-item uk-logo" to="/">IMAN OTHMAN</Link>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {NavItems.map((items, index) => {
              return (
                <li className={items.cName} key={'nav-'+index}>
                  <Link to={items.url}>{items.title}</Link>
                </li>)
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
