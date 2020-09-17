import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <form>
        <Header />
        <Main />
        <Footer />
      </form>
    </div>
  );
}

export default App;
