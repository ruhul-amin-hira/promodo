

 export interface Tab {
  tabName: string;
  id: string;
  fromwh: string;
}
export const tab: Tab[] = [
  {
    tabName: "Pomodoro",
    id: "pomodoro",
    fromwh: "tab1",
  },
  {
    tabName: "Short Break",
    id: "short_break",
    fromwh: "tab-2",
  },
  {
    tabName: "Long Break",
    id: "long_break",
    fromwh: "tab3",
  },
];