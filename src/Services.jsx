import React from "react";
import "./App.css";
export const Services = () => {
  return (
    <div className="services">
      <h3>service to avail</h3>
      <p>
        <input type="checkbox" value="webinars" name="webinars" /> webinars
      </p>
      <p>
        <input
          type="checkbox"
          value="training session"
          name="training session"
        />{" "}
        training session
      </p>
      <p>
        <input
          type="checkbox"
          value="programming challenges"
          name="programming challenges"
        />{" "}
        programming challenges
      </p>
      <p>
        <input type="checkbox" value="newsletter" name="newsletter" />{" "}
        newsletter
      </p>
      <p>
        <input type="checkbox" value="tech magazines" name="tech magazines" />{" "}
        tech magazines
      </p>
    </div>
  );
};
