import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TimerContext } from "../hook/TimerContext";
import { tab } from "../utility/TabData";
import Timer from "./Timer";
import TimerBtn from "./TimerBtn";

interface Props {}

const TimerCon = () => {
  return (
    <div className="_timer-con px-3 md:px-6 py-8 rounded-lg">
      <TimerBtn />
      <Timer />
    </div>
  );
};

export default TimerCon;
