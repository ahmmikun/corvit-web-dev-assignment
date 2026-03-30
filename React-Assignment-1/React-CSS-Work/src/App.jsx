import React from "react";
import Resume from "./components/Resume";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import RegistrationForm from "./components/RegistrationForm";
import Flags from "./components/Flags";
import ChessBoard from "./components/ChessBoard";
import Ludo from "./components/Ludo";
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
      
    </div>
  );
}