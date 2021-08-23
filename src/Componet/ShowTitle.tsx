import React, { lazy } from "react";

import pimage from "../image/first.gif";
import simage from "../image/goku.gif";
import limage from "../image/third.gif";
import { useContext } from "react";
import { TimerContext } from "../hook/TimerContext";
import { tab } from "../utility/TabData";
import { useEffect } from "react";

const ShowTitle: React.FC = () => {
  const { currentBtnObj } = useContext(TimerContext);
  let image, title;
  if (currentBtnObj.btn == tab[0].id) {
    image = pimage;
    title = "Time to Work!";
  } else if (currentBtnObj.btn == tab[1].id) {
    image = simage;
    title = "Take a Short Break!";
  } else {
    image = limage;
    title = "Take a Long Break!";
  }

  return (
    <div className="py-6 flex flex-col justify-center items-center">
      <h2 className="text-center font-medium">{title}</h2>
      <img src={image} alt="description" className="w-40" />
    </div>
  );
};

export default ShowTitle;
