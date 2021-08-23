import { url } from "inspector";

export const notifyMe = (
  time: number,
  currentBtn: string,
  units: string,
  a: HTMLMediaElement
) => {
  var notification = new Notification("Promodoro", {
    body: `${time} ${units} remaining of ${currentBtn}`,
    icon: "../image/circular-clock.png",
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
