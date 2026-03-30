import React from "react";
import "./Hobbies.css";

export default function Hobbies() {
  return (
    <section className="hobbies-page" id="hobbies">
      <h1>My Hobbies</h1>

      <nav className="hobbies-nav">
        <a href="#home">Home</a> | <a href="#hobbies">Hobbies</a> |{" "}
        <a href="#contact">Contact</a> | <a href="#registration">Registration</a>
      </nav>

      <hr />

      <h2>Hobbies List</h2>

      <h3>Top 3 Favorites</h3>
      <ol>
        <li>Coding</li>
        <li>Anime</li>
        <li>Gaming</li>
      </ol>

      <table border="1">
        <thead>
          <tr>
            <th>Hobby</th>
            <th>Description</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Coding</td>
            <td>I enjoy creating WhatsApp Chat Bots and RestFul APIs.</td>
            <td>Pretty High</td>
          </tr>
          <tr>
            <td>Gaming</td>
            <td>I like playing video games, especially Gacha and strategy games.</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Anime</td>
            <td>I am a fan of anime and Japanese culture (Basically Weeb).</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Reading</td>
            <td>I love reading books, especially Quran Tfaswe and fantasy novels.</td>
            <td>Medium</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <footer>© 2026 - Salman Ahmad</footer>
    </section>
  );
}