import React from "react";
import Resume from "./components/Resume";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import RegistrationForm from "./components/RegistrationForm";
import Flags from "./components/Flags";
import ChessBoard from "./components/ChessBoard";
import Ludo from "./components/Ludo";
import WebCSS from "./components/WebCSS";
import Snake from "./components/Snake";

import "./App.css";

export default function App() {
  return (
    <div className="app">

      <h1>Resume Assignment</h1>
      <Resume />
      <Hobbies />
      <Contact />
      <hr />
      <h1>Registration Form Assignment</h1>
      <RegistrationForm />
      <hr />
      <Flags />
      <hr />
      <h1>Chess Board Assignment</h1>
      <ChessBoard />
      <hr />
      <h1>Ludo Board Assignment</h1>
      <Ludo />
      <hr />
      <h1>Web Homepage Css Assignment</h1>
      <WebCSS />
      <hr />
      <h1>Snake & Ladder Game Assignment</h1>
      <Snake />
      <hr />
      <footer>
        <p>&copy; 2023 Salman CSS Projects. All rights reserved.</p>
      </footer>
    </div>
  );
}