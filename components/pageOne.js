import React from "react";
import Footer from "./footer";

function PageOne() {
  const links = [
    {
      url: "https://google.com",
      name: "Google"
    },
    {
      url: "https://yahoo.com",
      name: "Yahoo"
    },
    {
      url: "https://amazon.com",
      name: "Amazon"
    }
  ];

  return (
    <div className="Page">
      <h1>This is page1</h1>

      <h2>Amid AOC pressure</h2>
      <p>
        Amid AOC pressure, Pelosi suggests impeachment back on the table to
        address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi
        suggests impeachment back on the table to address 'grave new chapter of
        lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
        table to address 'grave new chapter of lawlessness'Amid AOC pressure,
        Pelosi suggests impeachment back on the table to address 'grave new
        chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment
        back on the table to address 'grave new chapter of lawlessness'Amid AOC
        pressure, Pelosi suggests impeachment back on the table to address
        'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests
        impeachment back on the table to address 'grave new chapter of
        lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
        table to address 'grave new chapter of lawlessness'Amid AOC pressure,
        Pelosi suggests impeachment back on the table to address 'grave new
        chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment
        back on the table to address 'grave new chapter of lawlessness'Amid AOC
        pressure, Pelosi suggests impeachment back on the table to address
        'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests
        impeachment back on the table to address 'grave new chapter of
        lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the
        table to address 'grave new chapter of lawlessness'
      </p>
      <Footer links={links} />
    </div>
  );
}

export default PageOne;
