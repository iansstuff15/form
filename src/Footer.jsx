import React from "react";
import "./index.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <input
          class="footerBtn"
          type="submit"
          value="register"
          onclick="checkForm()"
        />
      </footer>
    </div>
  );
};
