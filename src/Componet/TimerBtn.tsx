import React, { useContext } from "react";
import { useEffect } from "react";
import { tab } from "../utility/TabData";
import { TimerContext } from "../hook/TimerContext";

const TimerBtn = () => {
  const {
    currentBtn,
    finalObj,
    color1,
    update,
    setCurrentBtnObj,
    currentBtnObj,
  } = useContext(TimerContext);

  const updateObj = (a: string) => {
    switch (a) {
      case tab[0].id:
        setCurrentBtnObj({
          btn: a,
          timeNow: finalObj.pomodoro,
          color: color1.colorBlue,
        });
        //  console.log("case pomodo");
        break;
      case tab[1].id:
        setCurrentBtnObj({
          btn: a,
          timeNow: finalObj.shortBreak,
          color: color1.colorDarkBlue,
        });
        //  console.log("case short");
        break;
      default:
        setCurrentBtnObj({
          btn: a,
          timeNow: finalObj.longBreak,
          color: color1.colorPink,
        });
      // console.log("case long");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let a = e.currentTarget.id;
    if (!e.currentTarget.classList.contains("active-btn")) {
      updateObj(a);
    }
  };

  useEffect(() => {
    updateObj(currentBtn);
    // setCurrentBtn(currentActive.id);
  }, [update, currentBtn]);

  return (
    <div>
      <div className="flex justify-center">
        {tab.map((el) => {
          return (
            <button
              key={el.id}
              id={el.id}
              onClick={(e) => handleClick(e)}
              className={`${
                el.id
              } mx-1 text-xs md:text-base px-4 py-1 rounded ${
                el.id == currentBtnObj.btn ? "active-btn" : null
              }`}
            >
              {el.tabName}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(TimerBtn);
