import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page" id="contact">
      <h1>Contact Me</h1>

      <nav className="contact-nav">
        <a href="#home">Home</a> | <a href="#hobbies">Hobbies</a> |{" "}
        <a href="#contact">Contact</a> | <a href="#registration">Registration</a>
      </nav>

      <hr />

      <h2>Contact Details</h2>
      <ul>
        <li>Email: salmansheikh2500@gmail.com</li>
        <li>Phone: 0334-4870484</li>
        <li>Address: Lahore, Pakistan</li>
      </ul>

      <h2>Send a Message</h2>
      <form className="contact-form">
        <label>Full Name:</label>
        <input type="text" />

        <label>Email:</label>
        <input type="email" />

        <label>Phone:</label>
        <input type="text" />

        <label>Gender:</label>
        <div className="inline-group">
          <label><input type="radio" name="gender" /> Male</label>
          <label><input type="radio" name="gender" /> Female</label>
        </div>

        <label>Reason for Contact:</label>
        <select>
          <option>General Inquiry</option>
          <option>Hiring</option>
          <option>Feedback</option>
        </select>

        <label>Message:</label>
        <textarea rows="5"></textarea>

        <label className="checkbox-row">
          <input type="checkbox" /> Subscribe to Newsletter
        </label>

        <div className="btns">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>

      <hr />
      <footer>© 2026 - Salman Ahmad</footer>
    </section>
  );
}