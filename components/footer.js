import React from "react";

function Footer({ links }) {
  return (
    <footer>
      <nav>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={`${link.url}`} className="App-link">
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
