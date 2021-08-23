import useTimer from "easytimer-react-hook";
import { Timer as Timerr } from "easytimer.js";

import React, { useCallback, useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TimerContext } from "../hook/TimerContext";
import { notifyMe } from "../utility/notificationFn";
import { tab } from "../utility/TabData";
import useTimerFn from "../utility/timerfn";
import Circle from "./Circle";

const Timer: React.FC = () => {
  let {
    finalObj,
    setCurrentBtn,
    currentInterval,
    setCurrentInterval,
    setResultBtn,
    setRemaining,
    currentBtnObj,
  } = useContext(TimerContext);
  const [value, setValue] = useState(currentBtnObj.timeNow);
  const [isChanged, setIschanged] = useState(true);
  const [isPause, setIsPause] = useState(false);

  let [timer] = useTimer({
    countdown: true,
  });

  const times = [tab[0].id, tab[1].id, tab[2].id];

  let val = timer.getTimeValues().minutes;
  let val2 = timer.getTimeValues().seconds;
  let colorM = currentBtnObj.color;
  let colorS = "rgb(255, 211, 113)";

  const twentyPercent =
    currentBtnObj.timeNow < 5
      ? currentBtnObj.timeNow * 60 * 0.2
      : Math.round(currentBtnObj.timeNow * 0.2);

  const a = document.querySelector("#audio-file") as HTMLMediaElement;
  if (finalObj.notification) {
    if (currentBtnObj.timeNow < 5 && val === 0 && val2 === twentyPercent) {
      notifyMe(val2, currentBtnObj.btn, "seconds", a);
    } else if (currentBtnObj.timeNow >= 5 && val === twentyPercent) {
      notifyMe(val, currentBtnObj.btn, "minutes", a);
    }
  }

  const handleClickStart = (a = currentBtnObj.timeNow) => {
    timer.start({
      startValues: {
        minutes: a,
      },
      target: {
        seconds: 0,
      },
    });
    setIschanged(false);
    if (currentBtnObj.btn == times[0]) {
      setCurrentInterval(currentInterval + 1);
    }
    if (currentInterval == finalObj.longBreakInterval) {
      setCurrentInterval(0);
    }
  };

  const handleClickStop = () => {
    /*  if (currentBtnObj.btn == times[0] && currentInterval != 0) {
      setCurrentInterval(--currentInterval);
    }
 */
    if (
      (val === 0 && val2 === 0) ||
      (!timer.isRunning() && !timer.isPaused())
    ) {
      timer.reset();
      timer.stop();
      setIschanged(true);
    } else {
      timer.pause();
      let confirmation = window.confirm("Do you want to finish early?");
      console.log(confirmation);
      if (confirmation) {
        setResultBtn(currentBtnObj.btn);
        setRemaining([val, val2]);
        timer.reset();
        timer.stop();
        setIschanged(true);
      } else {
        timer.start();
      }
    }
  };

  const handlePause = () => {
    if (timer.isPaused()) {
      timer.start();
      setIsPause(false);
    } else {
      setIsPause(true);
      timer.pause();
    }
  };

  const timerFn = useTimerFn(
    timer,
    currentBtnObj.btn,
    times,
    currentInterval,
    finalObj,
    setCurrentBtn,
    setCurrentInterval,
    handleClickStart,
    handleClickStop,
    setResultBtn,
    setRemaining
  );

  useEffect(() => {
    setValue(currentBtnObj.timeNow);

    timer.addEventListener("targetAchieved", timerFn);
    return () => {
      timer.removeEventListener("targetAchieved", timerFn);
    };
  }, [currentBtnObj]);

  return (
    <div>
      <div className="flex py-6 sm:w-3/4 mx-auto">
        <Circle
          time={isChanged ? value : val}
          startTime={currentBtnObj.timeNow}
          unit={"minute"}
          color={colorM}
        ></Circle>
        <Circle
          time={val2}
          startTime={60}
          unit={"seconds"}
          color={colorS}
        ></Circle>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleClickStart()}
          className={`start text-lg md:text-xl ${
            isChanged ? "px-14 py-2" : "_invisible"
          }  rounded  btn-color`}
        >
          Start
        </button>
        <div
          className={`stop text-lg md:text-xl  ${
            isChanged ? "_invisible" : ""
          }`}
        >
          <button
            className={`"rounded  btn-color ${
              isChanged ? "" : " mr-3 px-12 py-2"
            }`}
            onClick={handlePause}
          >
            {isPause ? "Resume" : "Pause"}
          </button>
          <button
            onClick={() => handleClickStop()}
            className={`${isChanged ? "_invisible" : ""} `}
          >
            <i
              className={`fas fa-step-forward rounded  btn-color  ${
                isChanged ? "" : "px-3 py-3"
              } `}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Timer);
