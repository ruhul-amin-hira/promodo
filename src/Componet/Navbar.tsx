import React from "react";
import { useContext } from "react";
import { TimerContext } from "../hook/TimerContext";

const Navbar: React.FC = () => {
  const { setIsOpen, setRorSetting } = useContext(TimerContext);
  return (
    <div className="flex justify-between item-center pb-4">
      <a href="/" className="logo text-xl font-bold">
        Promodo
      </a>
      <div>
        <button
          className=" text-xs md:text-base px-4 py-1 rounded mx-3 btn-color"
          onClick={() => {
            setIsOpen(true);
            setRorSetting("report");
          }}
        >
          <i className="fas fa-poll pr-1"></i>
          Report
        </button>
        <button
          className="text-xs md:text-base px-4 py-1 rounded btn-color"
          onClick={() => {
            setIsOpen(true);
            setRorSetting("setting");
          }}
        >
          <i className="fas fa-cog pr-1"></i>
          Setting
        </button>
      </div>
    </div>
  );
};

export default Navbar;
