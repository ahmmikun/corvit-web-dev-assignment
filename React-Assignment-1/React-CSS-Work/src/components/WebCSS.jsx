import React from "react";
import "./WebCSS.css";

export default function WebCSS() {
  return (
    <section className="web-homepage-css-page">
      <header className="whc-header">
        <nav className="whc-nav">
          <ul>
            <li>
              <img
                src="/ollama-icon.png"
                alt="Ollama Icon"
                className="ollama-logo"
              />
            </li>

            <li><a href="#">Models</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Pricing</a></li>

            <li className="search-item">
              <input type="text" placeholder="Search models" />
            </li>

            <li>
              <button className="btn btn-light">Sign in</button>
            </li>

            <li>
              <button className="btn btn-dark">Download</button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="whc-main">
        <img
          src="https://ollama.com/public/hello.png"
          alt="Hello"
          className="main-image"
        />

        <h1>
          Start building with
          <br />
          open models
        </h1>

        <code>irm https://ollama.com/install.ps1 | iex</code>
      </main>
    </section>
  );
}