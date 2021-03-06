export interface SittingTimer {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  autoStartBreak: boolean;
  autoStartPomo: boolean;
  longBreakInterval: number;
  notification: boolean;
}

export interface colorType {
  colorBlue: string;
  colorDarkBlue: string;
  colorPink: string;
}

export interface TimerObj {
  btn: string;
  timeNow: number;
  color: string;
}

export interface ResutBtn {
  btn: string;
  remainingTime: number[];
}

export interface TimerType {
  currentTime: number;
  isOpen: boolean;
  setIsOpen: any;
  rorSetting: string;
  setRorSetting: any;
  color1: colorType;
  finalObj: SittingTimer;
  currentBtn: string;
  setCurrentBtn: any;
  update: boolean;
  setUpdate: any;
  currentInterval: number;
  setCurrentInterval: any;
  resultBtn: ResutBtn;
  setResultBtn: any;
  notification: boolean;
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  currentBtnObj: TimerObj;
  setCurrentBtnObj: any;
}
