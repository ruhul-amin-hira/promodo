import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

const ModalCon = () => {
  const portal = document.querySelector("#portal") as HTMLDivElement;
  return <div className="relative">{createPortal(<Modal />, portal)}</div>;
};

export default ModalCon;
