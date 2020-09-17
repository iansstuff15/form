import React from "react";
import "./App.css";
export const Notes = () => {
  return (
    <div className="notes">
      <h3>Notes</h3>
      <textarea value="notes" name="notes">
        {" "}
      </textarea>
    </div>
  );
};
