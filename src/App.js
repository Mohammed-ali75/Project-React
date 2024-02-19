import React from "react";
import End from "./Pages/end";
import Data from "./Pages/data";
import Skills from "./Pages/skills";
import Header from "./Pages/header";
import Introduction from "./Pages/introduction";
import Certificates from "./Pages/certificates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Pages/projects";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Introduction />
        <Skills />
        <Certificates />
        <Routes>
          <Route path="/Project-React" element={<Projects />}>
            <Route path="/" element={<Projects />} />
            <Route path="/2nd-Section" element={<></>} />
            <Route
              path="/3rd-Section"
              element={
                <p className="pApp">
                  my name is Mohammed, I live in the pyramid gardens, this is my
                  1st project in react dev.
                </p>
              }
            />
          </Route>
        </Routes>
        <Data />
        <End />
      </Router>
    </>
  );
}

export default App;
