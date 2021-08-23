import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface circleProp {
  time: number;
  startTime: number;
  unit: string;
  color: string;
}

const Circle: React.FC<circleProp> = ({ time, startTime, unit, color }) => {
  let percent = Math.floor((100 * time) / startTime);

  return (
    <div className="p-2">
      <CircularProgressbarWithChildren
        value={percent}
        strokeWidth={4}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: `${color}`,
        })}
      >
        <h1 className="font-bold font-digital text-6xl sm:text-8xl">
          {time.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </h1>
        <p className="text-base md:text-lg md:pt-2">{unit}</p>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Circle;
