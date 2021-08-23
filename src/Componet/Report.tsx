import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TimerContext } from "../hook/TimerContext";
import { tab } from "../utility/TabData";

interface Props {}

interface TotalTime {
  working: number;
  short: number;
  long: number;
}

const Report = (props: Props) => {
  let isStorage = localStorage.getItem("totalTime");
  // console.log(typeof isStorage);
  let localSt: TotalTime = {
    working: 0,
    short: 0,
    long: 0,
  };
  if (typeof isStorage === "string") {
    localSt = JSON.parse(isStorage);
  }

  const { setIsOpen, resultBtn, finalObj } = useContext(TimerContext);

  const [clear, setClear] = useState(false);
  console.log(resultBtn);
  useEffect(() => {
    if (resultBtn.remainingTime.length >= 0) {
      if (resultBtn.btn == tab[0].id && resultBtn.remainingTime.length == 0) {
        localSt.working = localSt.working + finalObj.pomodoro;
      }
      if (resultBtn.btn == tab[0].id && resultBtn.remainingTime.length != 0) {
        localSt.working = localSt.working + resultBtn.remainingTime[0];
      }

      if (resultBtn.btn == tab[1].id && resultBtn.remainingTime.length == 0) {
        localSt.short = localSt.short + finalObj.shortBreak;
      }
      if (resultBtn.btn == tab[1].id && resultBtn.remainingTime.length != 0) {
        localSt.short = localSt.short + resultBtn.remainingTime[0];
      }

      if (resultBtn.btn == tab[2].id && resultBtn.remainingTime.length == 0) {
        localSt.long = localSt.long + finalObj.longBreak;
      }
      if (resultBtn.btn == tab[2].id && resultBtn.remainingTime.length != 0) {
        localSt.long = localSt.long + resultBtn.remainingTime[0];
      }
      localStorage.setItem("totalTime", JSON.stringify(localSt));
    }
  }, [resultBtn]);

  const handleClear = () => {
    localSt = {
      working: 0,
      short: 0,
      long: 0,
    };
    localStorage.setItem("totalTime", JSON.stringify(localSt));
    setClear(!clear);
  };

  return (
    <div
      className="md:max-w-screen-md w-11/12 _timer-con p-4 md:p-7 mx-auto rounded-md
    "
    >
      <div className="flex justify-between items-center border-b border-opacity-20 border-black pb-3">
        <h2 className=" font-semibold text-base md:text-lg m-0 text-gray-400">
          Report
        </h2>
        <i
          className="fas fa-times cursor-pointer text-lg"
          onClick={() => setIsOpen(false)}
        ></i>
      </div>
      <div className="w-full pt-4 mx-auto rounded-md flex items-center flex-col">
        <div className="inline-block text-left">
          <h2 className="font-semibold text-base md:text-lg m-0">
            Total working time:{" "}
            <span className="logo">{localSt.working} minutes </span>
          </h2>
          <h2 className="font-semibold text-base md:text-lg m-0">
            Total short break time:{" "}
            <span className="logo">{localSt.short} minutes </span>
          </h2>
          <h2 className="font-semibold text-base md:text-lg m-0">
            Total long break time:{" "}
            <span className="logo">{localSt.long} minutes </span>
          </h2>
        </div>
      </div>
      <div className="flex justify-end   pt-4">
        <button
          className=" px-4 py-1 rounded text-base bg-gray-900 hover:bg-gray-600 "
          onClick={() => {
            handleClear();
          }}
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default Report;
