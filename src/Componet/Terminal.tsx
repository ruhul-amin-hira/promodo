import React from "react";
import { useContext } from "react";
import { TimerContext } from "../hook/TimerContext";
import { tab } from "../utility/TabData";

interface Props {}

const Terminal = (props: Props) => {
  const { currentBtnObj, finalObj } = useContext(TimerContext);

  let title: string, time: number;
  if (currentBtnObj.btn == tab[0].id) {
    time = finalObj.pomodoro;
    title = "pomodoro";
  } else if (currentBtnObj.btn == tab[1].id) {
    time = finalObj.shortBreak;
    title = "short break";
  } else {
    time = finalObj.longBreak;
    title = "long break";
  }

  return (
    <div className="text-center">
      <p>Currently running...{title}</p>
      <p>{time} minutes</p>
    </div>
  );
};

export default Terminal;
