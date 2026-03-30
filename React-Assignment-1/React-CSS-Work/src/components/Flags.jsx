import React from "react";
import "./Flags.css";

export default function Flags() {
  return (
    <section className="flags-page">
      <h1>Flags Assignment</h1>

      <div className="flag-block">
        <h2>Austria</h2>
        <div className="flag1">
          <div className="part red"></div>
          <div className="part white"></div>
          <div className="part red"></div>
        </div>
      </div>

      <div className="flag-block">
        <h2>Estonia</h2>
        <div className="flag2">
          <div className="part2 blue"></div>
          <div className="part2 black"></div>
          <div className="part2 white"></div>
        </div>
      </div>

      <div className="flag-block">
        <h2>France</h2>
        <div className="flag3">
          <div className="part3 blue"></div>
          <div className="part3 white"></div>
          <div className="part3 red"></div>
        </div>
      </div>
    </section>
  );
}