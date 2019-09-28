import React from "react";
import ActiveLink from "../components/activeLink";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <ActiveLink className="App-link" href="/">
          Page One
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="App-link" href="/inner-page">
          Page Two
        </ActiveLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
