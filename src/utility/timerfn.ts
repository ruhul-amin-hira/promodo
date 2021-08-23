import userEvent from "@testing-library/user-event";
import Timer from "easytimer.js";
import { useContext, useEffect, useState } from "react";
import { TimerContext } from "../hook/TimerContext";
import { SittingTimer, TimerType } from "./interface";
import { tab } from "./TabData";

const useTimerFn = (
  timer: Timer,
  currentBtn: string,
  times: string[],
  currentInterval: number,
  finalObj: SittingTimer,
  setCurrentBtn: any,
  setCurrentInterval: any,
  handleClickStart: (a?: number) => void,
  handleClickStop: () => void,
  setResultBtn: any,
  setRemaining: any
) => {
  return () => {
    setResultBtn(currentBtn);
    setRemaining([]);
    /* if (currentBtn == times[0] && currentInterval != 0)
          setCurrentInterval(currentInterval - 1); */

    if (finalObj.autoStartBreak && !finalObj.autoStartPomo) {
      if (currentBtn == times[0]) {
        if (finalObj.longBreakInterval <= currentInterval) {
          setCurrentInterval(0);
          setCurrentBtn(times[2]);
          handleClickStart(finalObj.longBreak);
        } else {
          setCurrentBtn(times[1]);
          handleClickStart(finalObj.shortBreak);
        }
      }

      if (currentBtn == times[1] || currentBtn == times[2]) {
        setCurrentBtn(times[0]);
        handleClickStop();
      }
    }

    ////////////////////////////
    else if (finalObj.autoStartBreak && finalObj.autoStartPomo) {
      if (currentBtn == times[0]) {
        if (finalObj.longBreakInterval <= currentInterval) {
          setCurrentInterval(0);
          setCurrentBtn(times[2]);
          handleClickStart(finalObj.longBreak);
        } else {
          setCurrentBtn(times[1]);
          handleClickStart(finalObj.shortBreak);
        }
      }

      if (currentBtn == times[1] || currentBtn == times[2]) {
        setCurrentBtn(times[0]);
        handleClickStart(finalObj.pomodoro);
      }
    } else if (!finalObj.autoStartBreak && finalObj.autoStartPomo) {
      if (currentBtn == times[0]) {
        if (finalObj.longBreakInterval <= currentInterval) {
          setCurrentInterval(0);
          setCurrentBtn(times[2]);
          handleClickStop();
        } else {
          setCurrentBtn(times[1]);
          handleClickStop();
        }
      }

      if (currentBtn == times[1] || currentBtn == times[2]) {
        setCurrentBtn(times[0]);
        handleClickStart(finalObj.pomodoro);
      }
    } else if (!finalObj.autoStartBreak && !finalObj.autoStartPomo) {
      handleClickStop();
    }
  };
};

export default useTimerFn;
