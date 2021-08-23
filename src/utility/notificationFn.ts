import { url } from "inspector";

export const notifyMe = (
  time: number,
  currentBtn: string,
  units: string,
  a: HTMLMediaElement
) => {
  var notification = new Notification("Promodoro", {
    body: `${time} ${units} remaining of ${currentBtn}`,
    icon: "https://img.icons8.com/color/48/000000/clock--v4.png",
  });
  a.play();
  notification.onclick = function () {
    window.parent.focus();
    a.pause();
    a.currentTime = 0;
  };
  setTimeout(() => {
    notification.close();
    a.pause();
    a.currentTime = 0;
  }, 5000);
};
