import React from "react";
import "./index.css";
export const PersonalInfo = () => {
  return (
    <div className="personalInfo">
      <h3>PERSONAL INFO</h3>
      <p>
        first name: <input type="text" name="firstname" required />
      </p>
      <p>
        last name: <input type="text" name="lasttname" required />
      </p>
      <p>
        mobile number: <input type="number" name="number" required />
      </p>
      <p>
        birthday: <input type="date" name="birthday" required />
      </p>

      <p>
        gender:
        <input type="radio" name="gender" value="male" required /> male
        <input type="radio" name="gender" value="female" required />
        female
        <input type="radio" name="gender" required />
        other
      </p>
      <p>
        email: <input type="email" required name="email" />
      </p>
      <p>
        password:
        <input type="password" min="8" name="password" id="pass" required />
      </p>
      <p>
        confirm password:
        <input
          type="password"
          min="8"
          name="confirm password"
          id="confirmPass"
          required
        />
      </p>
    </div>
  );
};
