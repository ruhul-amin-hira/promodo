import React from "react";
import { useContext } from "react";
import { TimerContext } from "../hook/TimerContext";
import Report from "./Report";
import Setting from "./Setting";

const Modal = () => {
  const { isOpen, rorSetting, setIsOpen } = useContext(TimerContext);

  const handleCick = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log(e);
    let a = e.target as Element;
    if (a.classList.contains("_backdrop")) {
      setIsOpen(false);
      // console.log(e.target);
    }
  };

  return (
    <div
      onClick={(e) => {
        handleCick(e);
      }}
      className={` fixed left-0 top-0 z-20 bg-black bg-opacity-75 _backdrop ${
        isOpen ? "w-full h-full" : "w-0 h-0 hidden "
      }`}
    >
      <div
        className={`flex items-center _backdrop  ${
          isOpen && rorSetting == "setting"
            ? "w-full h-full"
            : "w-0 h-0 hidden "
        }`}
      >
        <Setting />
      </div>
      <div
        className={`flex items-center _backdrop  ${
          isOpen && rorSetting == "report" ? "w-full h-full" : "w-0 h-0 hidden "
        }`}
      >
        <Report />
      </div>
    </div>
  );
};

export default Modal;
