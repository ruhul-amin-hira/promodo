import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { TimerContext } from "../hook/TimerContext";
import { SittingTimer } from "../utility/interface";

interface Props {}

const Setting = (props: Props) => {
  const {
    finalObj,
    setIsOpen,
    isOpen,
    setUpdate,
    rorSetting,
    update,
    setNotification,
    notification,
  } = useContext(TimerContext);
  const pomoRef = useRef<HTMLInputElement | null>(null);
  const shortRef = useRef<HTMLInputElement | null>(null);
  const longRef = useRef<HTMLInputElement | null>(null);
  const breakRef = useRef<HTMLInputElement | null>(null);
  const autoPomoRef = useRef<HTMLInputElement | null>(null);
  const breakInerRef = useRef<HTMLInputElement | null>(null);
  const notificationRef = useRef<HTMLInputElement | null>(null);

  let newObj = finalObj;

  const handleClick = () => {
    if (
      typeof pomoRef.current?.valueAsNumber === "number" &&
      pomoRef.current?.valueAsNumber !== undefined &&
      pomoRef.current.value !== "Nan" &&
      pomoRef.current.valueAsNumber !== 0
    ) {
      newObj.pomodoro = pomoRef.current?.valueAsNumber;
    } else newObj.pomodoro = finalObj.pomodoro;

    if (
      typeof shortRef.current?.valueAsNumber === "number" &&
      shortRef.current?.valueAsNumber !== undefined &&
      shortRef.current.value !== "Nan" &&
      shortRef.current.valueAsNumber !== 0
    ) {
      newObj.shortBreak = shortRef.current?.valueAsNumber;
    } else newObj.shortBreak = finalObj.shortBreak;

    if (
      typeof longRef.current?.valueAsNumber === "number" &&
      longRef.current?.valueAsNumber !== undefined &&
      longRef.current.value !== "Nan" &&
      longRef.current.valueAsNumber !== 0
    ) {
      newObj.longBreak = longRef.current?.valueAsNumber;
    } else newObj.longBreak = finalObj.longBreak;

    if (
      typeof breakInerRef.current?.valueAsNumber === "number" &&
      breakInerRef.current?.valueAsNumber !== undefined &&
      breakInerRef.current.value !== "Nan" &&
      breakInerRef.current.valueAsNumber !== 0
    ) {
      newObj.longBreakInterval = breakInerRef.current?.valueAsNumber;
    } else newObj.longBreakInterval = finalObj.longBreakInterval;

    newObj.autoStartBreak = breakRef.current?.checked!;
    newObj.autoStartPomo = autoPomoRef.current?.checked!;
    newObj.notification = notification;
    // console.log(newObj);
    localStorage.setItem("setting", JSON.stringify(newObj));
    setIsOpen(false);
    if (isOpen && rorSetting == "setting") {
      setUpdate(!update);
    }
  };

  const handleNotificationBtn = async () => {
    if (!Notification) {
      alert(
        "Desktop notifications not available in your browser. Try Chromium."
      );
      setNotification(false);
      return;
    }
    if (
      Notification.permission === "denied" ||
      Notification.permission === "default"
    ) {
      // setNotification(notificationRef.current.checked);
      let a = await Notification.requestPermission();
      if (a === "granted") {
        setNotification(true);
      } else {
        setNotification(false);
      }
    } else {
      if (notificationRef.current) {
        if (notificationRef.current.checked) {
          setNotification(true);
        } else {
          setNotification(false);
        }
      }
    }
  };

  // console.log(pomo);

  return (
    <div
      className="md:max-w-screen-md w-11/12 _timer-con p-4 md:p-7 mx-auto rounded-md
    "
    >
      <div className="flex justify-between items-center border-b border-opacity-20 border-black pb-3">
        <h2 className=" font-semibold text-base md:text-lg m-0 text-gray-400">
          Setting Timer
        </h2>
        <i
          className="fas fa-times cursor-pointer text-lg"
          onClick={() => setIsOpen(false)}
        ></i>
      </div>
      <div className=" border-b border-opacity-20 border-black py-4">
        <h2 className="font-semibold text-base md:text-lg m-0">
          Time (minutes)
        </h2>
        <div className="flex justify-between">
          <div className="w-1/7">
            <p className="font-semibold text-gray-400 pb-1">Pomodoro</p>
            <input
              type="number"
              name="pomodoro"
              ref={pomoRef}
              step="1"
              min="1"
              max="240"
              defaultValue={finalObj.pomodoro}
              className="text-white p-1 px-2 text-base md:text-lg rounded-sm bg-gray-500 w-full"
            />
          </div>
          <div className="w-1/7">
            <p className="font-semibold text-gray-400 pb-1">Short Break</p>
            <input
              type="number"
              name="pomodoro"
              step="1"
              min="1"
              max="240"
              ref={shortRef}
              defaultValue={finalObj.shortBreak}
              className="text-white p-1 px-2 text-base md:text-lg rounded-sm bg-gray-500 w-full"
            />
          </div>
          <div className="w-1/7">
            <p className="font-semibold text-gray-400 pb-1">Long Break</p>
            <input
              type="number"
              name="pomodoro"
              step="1"
              min="1"
              max="240"
              ref={longRef}
              defaultValue={finalObj.longBreak}
              className="text-white p-1 px-2 text-base md:text-lg rounded-sm bg-gray-500 w-full"
            />
          </div>
        </div>
      </div>
      <div className="border-b border-opacity-20 border-black py-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-base md:text-lg m-0">
            Auto start Breaks?
          </h2>
          <div className=" transform -translate-x-7">
            <label className="check-label">
              <input
                ref={breakRef}
                type="checkbox"
                defaultChecked={finalObj.autoStartBreak}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="border-b border-opacity-20 border-black py-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-base md:text-lg m-0">
            Auto start Pomodoros?
          </h2>
          <div className=" transform -translate-x-7">
            <label className="check-label">
              <input
                ref={autoPomoRef}
                type="checkbox"
                defaultChecked={finalObj.autoStartPomo}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="border-b border-opacity-20 border-black py-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-base md:text-lg m-0">
            Long Break interval
          </h2>
          <div className="w-1/3">
            <input
              type="number"
              name="pomodoro"
              step="1"
              min="1"
              max="240"
              ref={breakInerRef}
              defaultValue={finalObj.longBreakInterval}
              className="text-white py-1  px-2 text-lg rounded-sm bg-gray-500 w-full"
            />
          </div>
        </div>
      </div>

      <div className="border-b border-opacity-20 border-black py-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-base md:text-lg m-0">
            Notification{" "}
            <span className="font-semibold text-gray-400 text-base">
              (20% before end of time)
            </span>
          </h2>
          <div className=" transform -translate-x-7">
            <label className="check-label">
              <input
                ref={notificationRef}
                type="checkbox"
                // defaultChecked={finalObj.notification}
                defaultChecked={finalObj.notification}
                onChange={handleNotificationBtn}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end   pt-4">
        <button
          className=" px-4 py-1 rounded text-base bg-gray-900 hover:bg-gray-600 "
          onClick={handleClick}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default Setting;
