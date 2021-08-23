import React, { Dispatch, useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import { createContext } from "react";
import { colorType, SittingTimer, TimerType } from "../utility/interface";
import { tab } from "../utility/TabData";

export const TimerContext = createContext({} as TimerType);

const TimerContextProvider: FC = (props) => {
  let localSt: SittingTimer;
  let isStorage = localStorage.getItem("setting");
  // console.log(typeof isStorage);
  if (typeof isStorage === "string") {
    localSt = JSON.parse(isStorage);
  }

  // console.log(aaa);
  const returnObj = (): SittingTimer => {
    if (isStorage) {
      return localSt;
    } else {
      return {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
        autoStartBreak: false,
        autoStartPomo: false,
        longBreakInterval: 4,
        notification: false,
      };
    }
  };

  const finalObj = returnObj();
  let color1: colorType = {
    colorBlue: "rgb(40, 255, 191)",
    colorDarkBlue: "rgb(61,126,216)",
    colorPink: "rgb(15,239,140)",
  };

  // console.log(finalObj);
  const [currentBtn, setCurrentBtn] = useState(tab[0].id);
  const [currentTime, setCurrentTime] = useState(finalObj.pomodoro);
  const [currentBtnObj, setCurrentBtnObj] = useState({
    btn: tab[0].id,
    timeNow: finalObj.pomodoro,
    color: color1.colorBlue,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [rorSetting, setRorSetting] = useState("");
  const [update, setUpdate] = useState(false);
  const [currentInterval, setCurrentInterval] = useState(0);
  const [resultBtn, setResultBtn] = useState({
    btn: "",
    remainingTime: [],
  });
  const [notification, setNotification] = useState(finalObj.notification);

  const obj: TimerType = {
    currentTime: currentTime,
    finalObj,
    isOpen,
    setIsOpen,
    rorSetting,
    setRorSetting,
    color1,
    currentBtn,
    setCurrentBtn,
    update,
    setUpdate,
    currentInterval,
    setCurrentInterval,
    resultBtn,
    setResultBtn,
    notification,
    setNotification,
    currentBtnObj,
    setCurrentBtnObj,
  };

  return (
    <TimerContext.Provider value={obj}>{props.children}</TimerContext.Provider>
  );
};

export default TimerContextProvider;
