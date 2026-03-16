function generatePassword() {
      let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let lower = "abcdefghijklmnopqrstuvwxyz";
      let numbers = "0123456789";
      let special = "!@#$%^&*()_+[]{}|;:,.<>?";
      let allChars = upper + lower + numbers + special;

      let password = "";
      password += upper[Math.floor(Math.random() * upper.length)];
      password += lower[Math.floor(Math.random() * lower.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += special[Math.floor(Math.random() * special.length)];

      for (let i = 4; i < 12; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
      }

      password = password.split('').sort(() => Math.random() - 0.5).join('');

      document.getElementById("password").value = password;
      validatePassword();
    }

    function validatePassword() {
      let password = document.getElementById("password").value;

      let hasLength = password.length >= 8;
      let hasUpper = /[A-Z]/.test(password);
      let hasLower = /[a-z]/.test(password);
      let hasNumber = /[0-9]/.test(password);
      let hasSpecial = /[^A-Za-z0-9]/.test(password);

      updateRule("length", hasLength);
      updateRule("uppercase", hasUpper);
      updateRule("lowercase", hasLower);
      updateRule("number", hasNumber);
      updateRule("special", hasSpecial);

      let passed = 0;
      if (hasLength) passed++;
      if (hasUpper) passed++;
      if (hasLower) passed++;
      if (hasNumber) passed++;
      if (hasSpecial) passed++;

      let strengthText = "Strength: ";
      if (passed <= 2) {
        strengthText += "Weak";
        document.getElementById("strength").style.color = "red";
      } else if (passed === 3 || passed === 4) {
        strengthText += "Medium";
        document.getElementById("strength").style.color = "orange";
      } else {
        strengthText += "Strong";
        document.getElementById("strength").style.color = "green";
      }

      document.getElementById("strength").innerText = strengthText;
    }

    function updateRule(id, isValid) {
      let element = document.getElementById(id);
      if (isValid) {
        element.classList.remove("invalid");
        element.classList.add("valid");
      } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
      }
    }

    function copyPassword() {
      let passwordField = document.getElementById("password");
      passwordField.select();
      passwordField.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("Password copied!");
    }