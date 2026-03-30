import React from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  return (
    <section className="registration-page" id="registration">
      <h1>STUDENT REGISTRATION FORM</h1>

      <form className="registration-form">
        <label>FIRST NAME (max 30 characters a-z and A-Z)</label>
        <input type="text" />

        <label>LAST NAME (max 30 characters a-z and A-Z)</label>
        <input type="text" />

        <label>DATE OF BIRTH</label>
        <div className="dob-row">
          <select>
            <option>Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>

          <select>
            <option>Month</option>
            {[
              "January","February","March","April","May","June",
              "July","August","September","October","November","December"
            ].map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>

          <select>
            <option>Year</option>
            {Array.from({ length: 22 }, (_, i) => (
              <option key={2005 + i}>{2005 + i}</option>
            ))}
          </select>
        </div>

        <label>EMAIL ID</label>
        <input type="email" />

        <label>MOBILE NUMBER (10 digit number)</label>
        <input type="text" />

        <label>GENDER</label>
        <div className="radio-row">
          <label><input type="radio" name="gender" /> Male</label>
          <label><input type="radio" name="gender" /> Female</label>
        </div>

        <label>ADDRESS</label>
        <textarea rows="4"></textarea>

        <label>CITY (max 30 characters a-z and A-Z)</label>
        <input type="text" />

        <label>PIN CODE (6 digit number)</label>
        <input type="text" />

        <label>STATE (max 30 characters a-z and A-Z)</label>
        <input type="text" />

        <label>COUNTRY</label>
        <input type="text" />

        <label>HOBBIES</label>
        <div className="checkbox-group">
          <label><input type="checkbox" /> Drawing</label>
          <label><input type="checkbox" /> Singing</label>
          <label><input type="checkbox" /> Dancing</label>
          <label><input type="checkbox" /> Sketching</label>
          <label><input type="checkbox" /> Others</label>
        </div>

        <h2>QUALIFICATION</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Sl.No.</th>
              <th>Examination</th>
              <th>Board</th>
              <th>Percentage</th>
              <th>Year of Passing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Class X</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Class XII</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Graduation</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Masters</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>

        <label>COURSES APPLIED FOR</label>
        <div className="radio-row">
          <label><input type="radio" name="course" /> BCA</label>
          <label><input type="radio" name="course" /> B.Com</label>
          <label><input type="radio" name="course" /> B.Sc</label>
          <label><input type="radio" name="course" /> B.A</label>
        </div>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </section>
  );
}