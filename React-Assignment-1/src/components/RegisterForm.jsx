function RegisterForm() {
  return (
    <div>
      <h1>Register</h1>

      <form action="">
        <label>First Name:</label>
        <input type="text" />

        <label>Last Name:</label>
        <input type="text" />

        <br />

        Male
        <input type="radio" name="abc" />
        Female
        <input type="radio" name="abc" />
        Other
        <input type="radio" name="abc" />

        <br />

        <label>Email:</label>
        <input type="email" required />

        <label>Password:</label>
        <input type="password" required />

        <br />

        <label>Birthday:</label>

        <select>
          <option value="">Month</option>
        </select>

        <select>
          <option value="">Day</option>
        </select>

        <select>
          <option value="">Year</option>
        </select>

        <br />

        I agree to the terms and conditions
        <input type="checkbox" />

        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;