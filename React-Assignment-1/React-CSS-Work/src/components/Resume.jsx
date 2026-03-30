import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <section className="resume-page" id="home">
      <h1>My Resume</h1>

      <nav className="resume-nav">
        <a href="#home">Home</a> | <a href="#hobbies">Hobbies</a> |{" "}
        <a href="#contact">Contact</a> | <a href="#registration">Registration</a>
      </nav>

      <hr />

      <h2>Profile Photo</h2>
      <div className="profile-image-box">
        <img src="./salman.png" alt="My Profile Photo" className="profile-image" />
      </div>

      <h2>Personal Information</h2>
      <ul>
        <li>Name: Salman Ahmad</li>
        <li>Father Name: Kashif Ali Sheikh</li>
        <li>City: Lahore</li>
        <li>Email: salmansheikh2500@gmail.com</li>
        <li>Phone: 0334-4870484</li>
      </ul>

      <h2>Education</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Grade</th>
            <th>Start Year</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Secondary Education</td>
            <td>Royal Heaven Cambridge School</td>
            <td>A+</td>
            <td>2019</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Intermediate</td>
            <td>Punjab College AIT Branch</td>
            <td>A</td>
            <td>2022</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>BS (Continue)</td>
            <td>Government Graduate Science College</td>
            <td>B</td>
            <td>2024</td>
            <td>2028</td>
          </tr>
          <tr>
            <td>WEB DEV COURSE</td>
            <td>Corvit</td>
            <td>-</td>
            <td>2026</td>
            <td>2026</td>
          </tr>
        </tbody>
      </table>

      <h2>Skills</h2>
      <ul>
        <li>Chat Bot Development</li>
        <li>Rest API Development</li>
        <li>Gen AI</li>
        <li>Complexity Analysis O(n²)</li>
        <li>Scientific Computing (H₂O)</li>
      </ul>

      <h2>Experience</h2>
      <ul>
        <li>WhatsApp & Discord Bot Development (WebSocket)</li>
        <li>Open Source Contributions (GitHub)</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            XLICON-V2-MD
          </a>
          <p>
            A WhatsApp bot built with Node.js and the Baileys library. It offers
            features like media downloading, group management, and fun commands.
          </p>
        </li>
        <li>
          <a href="https://api.salmanahmad.tech" target="_blank" rel="noreferrer">
            REST API Site
          </a>
          <p>
            A REST API platform that provides multiple endpoints for different
            functionalities.
          </p>
        </li>
        <li>
          <a href="https://keys-monitor.vercel.app" target="_blank" rel="noreferrer">
            Keys Monitor Site
          </a>
          <p>
            A web app that monitors gaming keyboard keys and provides real-time
            detection.
          </p>
        </li>
      </ul>

      <h2>Assignments</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Assignment 1</td>
            <td>Things I've Learned.</td>
            <td><a href="#">View</a></td>
          </tr>
          <tr>
            <td>Assignment 2</td>
            <td>Use of unordered lists and ordered lists.</td>
            <td><a href="#">View</a></td>
          </tr>
          <tr>
            <td>Assignment 3</td>
            <td>Use of superscript and subscript(Math Formula).</td>
            <td><a href="#">View</a></td>
          </tr>
          <tr>
            <td>Assignment 4</td>
            <td>Use of superscript and subscript(Chemical Formula).</td>
            <td><a href="#">View</a></td>
          </tr>
          <tr>
            <td>Assignment 5</td>
            <td>Simple Registration Form.</td>
            <td><a href="#">View</a></td>
          </tr>
          <tr>
            <td>Assignment 6</td>
            <td>Advance Html Form.</td>
            <td><a href="#">View</a></td>
          </tr>
          <tr>
            <td>Assignment 7</td>
            <td>Minerals Content Table.</td>
            <td><a href="#">View</a></td>
          </tr>
        </tbody>
      </table>

      <h2>Awards</h2>
      <ul>
        <li>Laptop Award From Government</li>
        <li>Student of the year Award</li>
      </ul>

      <h2>Certifications</h2>
      <ul>
        <li>Prompt Engineering - Udemy</li>
        <li>Gen AI Certification - Oracle</li>
      </ul>

      <hr />
      <footer>© 2026 - Salman Ahmad</footer>
    </section>
  );
}