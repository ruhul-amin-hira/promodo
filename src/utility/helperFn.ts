
  export const removeActive = (a: NodeListOf<HTMLElement>, b: string): void => {
    a.forEach((el) => {
      el.classList.remove(b);
    });
  };

  export const visibility = (a: NodeListOf<HTMLElement>) => {
    a.forEach((el) => {
      if (el.classList.contains("_visible")) {
        el.classList.add("_invisible");
      }
      el.classList.remove("_visible");
    });
  };