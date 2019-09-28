import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Header = ({ title }) => (
  <div className="Header">
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Hello, a very awesome description here"
      />
      <meta name="keywords" content="awesome,seo,react" />
    </Head>

    <Nav />
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
      html,
      body {
        font-family: "Work Sans", sans-serif;
        min-height: 100vh;
        background-color: #282c34;
        color: #fff;
      }

      body {
        border-top: 5px solid #09d3ac;
        margin: 0;
      }

      .Page {
        padding: 0 50px;
        font-size: calc(10px + 2vmin);
        color: white;
        padding: 0 50px;
      }

      .App-link {
        color: #09d3ac;
        text-decoration: none;
        padding: 10px;
      }

      .App-link.active {
        color: #fff;
        background-color: #09d3ac;
      }

      footer nav {
        text-align: center;
      }

      nav {
        text-align: right;
      }

      nav ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      nav ul li {
        margin: 5px;
        display: inline-block;
      }
    `}</style>
  </div>
);

export default Header;
