import React, { useEffect } from "react";

import { useState } from "react";
import Circle from "./Componet/Circle";
import Navbar from "./Componet/Navbar";
import TimerCon from "./Componet/TimerCon";
import TimerContextProvider from "./hook/TimerContext";
import ShowTitle from "./Componet/ShowTitle";
import Terminal from "./Componet/Terminal";
import ModalCon from "./Componet/ModalCon";
import About from "./Componet/About";

const App: React.FC = () => {
  return (
    <TimerContextProvider>
      <div className="wrapper">
        <div className="md:max-w-screen-md max-w-full mx-auto h-screen">
          <Navbar />
          <TimerCon />
          <ShowTitle />
          <Terminal />
          <ModalCon />
          <About />
          <div className="text-center pt-6">
            <div className="">
              <a
                href="https://github.com/ruhul-amin-hira"
                target="blank"
                className="text-2xl mr-3"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.behance.net/ruhulaminhira"
                target="blank"
                className="text-2xl ml-1"
              >
                <i className="fab fa-behance-square"></i>
              </a>
            </div>
            <p>Created by Ruhul Amin</p>
          </div>
        </div>
      </div>
    </TimerContextProvider>
  );
};

export default App;
