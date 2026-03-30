import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>
        <u>My Resume</u>
      </h1>

      <p>
        <button>Home</button> | <button>Hobbies</button> | <button>Contact</button>
      </p>

      <hr />

      <h2>Profile Photo</h2>
      <img src="/salman.png" alt="My Profile Photo" width="150" />

      <h2>Personal Information</h2>
      <ul>
        <li>
          <b>Name:</b> Salman Ahmad
        </li>
        <li>
          <b>Father Name:</b> Kashif Ali Sheikh
        </li>
        <li>
          <b>City:</b> Lahore
        </li>
        <li>
          <b>Email:</b> salmansheikh2500@gmail.com
        </li>
        <li>
          <b>Phone:</b> 0334-4870484
        </li>
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
          <b>XLICON-V2-MD:</b> A WhatsApp bot built with Node.js and the Baileys
          library. It offers features like media downloading, group management,
          and fun commands.
        </li>
        <li>
          <b>REST API Site:</b> A REST API platform that provides multiple
          endpoints for different functionalities.
        </li>
        <li>
          <b>Keys Monitor Site:</b> A web app that monitors gaming keyboard keys
          and provides real-time detection of faulty and working keys.
        </li>
      </ul>

      <h2>Assignments</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Assignment 1</td>
            <td>Things I've Learned.</td>
          </tr>
          <tr>
            <td>Assignment 2</td>
            <td>Use of unordered lists and ordered lists.</td>
          </tr>
          <tr>
            <td>Assignment 3</td>
            <td>Use of superscript and subscript (Math Formula).</td>
          </tr>
          <tr>
            <td>Assignment 4</td>
            <td>Use of superscript and subscript (Chemical Formula).</td>
          </tr>
          <tr>
            <td>Assignment 5</td>
            <td>Simple Registration Form.</td>
          </tr>
          <tr>
            <td>Assignment 6</td>
            <td>Advance Html Form.</td>
          </tr>
          <tr>
            <td>Assignment 7</td>
            <td>Minerals Content Table.</td>
          </tr>
        </tbody>
      </table>

      <h2>Awards</h2>
      <ul>
        <li>Laptop Award From Government</li>
        <li>Student of the Year Award</li>
      </ul>

      <h2>Certifications</h2>
      <ul>
        <li>Prompt Engineering - Udemy</li>
        <li>Gen AI Certification - Oracle</li>
      </ul>

      <hr />

      <h1>
        <u>My Hobbies</u>
      </h1>

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

      <h1>
        <u>Contact Me</u>
      </h1>

      <h2>Contact Details</h2>
      <ul>
        <li>
          <b>Email:</b> salmansheikh2500@gmail.com
        </li>
        <li>
          <b>Phone:</b> 0334-4870484
        </li>
        <li>
          <b>Address:</b> Lahore, Pakistan
        </li>
      </ul>

      <h2>Send a Message</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Full Name:</label>
              </td>
              <td>
                <input type="text" name="fullname" required />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input type="email" name="email" required />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone:</label>
              </td>
              <td>
                <input type="tel" name="phone" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Gender:</label>
              </td>
              <td>
                Male <input type="radio" name="gender" value="male" /> Female{" "}
                <input type="radio" name="gender" value="female" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Reason for Contact:</label>
              </td>
              <td>
                <select name="reason">
                  <option value="general">General Inquiry</option>
                  <option value="hire">Hiring</option>
                  <option value="feedback">Feedback</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Message:</label>
              </td>
              <td>
                <textarea name="message" rows="5" cols="30"></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" name="subscribe" id="subscribe" />
                <label htmlFor="subscribe"> Subscribe to Newsletter</label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <br />
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <hr />

      <p>
        <b>Footer:</b> © 2026 - Salman Ahmad
      </p>
    </div>
  );
}