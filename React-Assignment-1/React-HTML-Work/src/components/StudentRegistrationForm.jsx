function StudentRegistrationForm() {
  return (
    <div>
      <h1>Student Registration Form</h1>

      <form>
        {/* First Name */}
        <label>First Name:</label>
        <input type="text" maxLength="30" />
        (max 30 characters a-z and A-Z)
        <br />

        {/* Last Name */}
        <label>Last Name:</label>
        <input type="text" maxLength="30" />
        (max 30 characters a-z and A-Z)
        <br />

        {/* Date of Birth */}
        <label>Date of Birth:</label>

        <select>
          <option>Day</option>
        </select>

        <select>
          <option>Month</option>
        </select>

        <select>
          <option>Year</option>
        </select>
        <br />

        {/* Email */}
        <label>Email ID:</label>
        <input type="email" />
        <br />

        {/* Mobile */}
        <label>Mobile Number:</label>
        <input type="text" maxLength="10" />
        (10 digit number)
        <br />

        {/* Gender */}
        <label>Gender:</label>
        Male <input type="radio" name="gender" />
        Female <input type="radio" name="gender" />
        <br />

        {/* Address */}
        <label>Address:</label>
        <textarea rows="4" cols="30"></textarea>
        <br />

        {/* City */}
        <label>City:</label>
        <input type="text" maxLength="30" />
        (max 30 characters a-z and A-Z)
        <br />

        {/* Pin Code */}
        <label>Pin Code:</label>
        <input type="text" maxLength="6" />
        (6 digit number)
        <br />

        {/* State */}
        <label>State:</label>
        <input type="text" maxLength="30" />
        (max 30 characters a-z and A-Z)
        <br />

        {/* Country */}
        <label>Country:</label>
        <input type="text" defaultValue="Pakistan" />
        <br />

        {/* Hobbies */}
        <label>Hobbies:</label>
        Drawing <input type="checkbox" />
        Singing <input type="checkbox" />
        Dancing <input type="checkbox" />
        Sketching <input type="checkbox" />
        Others <input type="checkbox" /> <input type="text" />
        <br />

        {/* Qualification */}
        <label>Qualification:</label>

        <table border="1">
          <thead>
            <tr>
              <th>Sl.No</th>
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

        <br />

        {/* Courses */}
        <label>Courses Applied For:</label>
        BCA <input type="radio" name="course" />
        B.Com <input type="radio" name="course" />
        B.Sc <input type="radio" name="course" />
        B.A <input type="radio" name="course" />

        <br />

        {/* Buttons */}
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default StudentRegistrationForm;