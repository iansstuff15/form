import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Services } from "./Services";
import { Notes } from "./Notes";

import "./App.css";

export const Main = () => {
  return (
    <div className="flex">
      <PersonalInfo />
      <Services />
      <Notes />
    </div>
  );
};
