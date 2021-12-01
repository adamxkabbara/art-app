import React from "react";
import { NavItems } from  './nav-data.js';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="uk-navbar-container" data-uk-navbar>
        <a class="uk-navbar-item uk-logo" href="#">IMAN OTHMAN</a>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {NavItems.map((items, index) => {
              return (
                <li className={items.cName} key={'nav-'+index}>
                  <a href={items.url}>{items.title}</a>
                </li>)
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
