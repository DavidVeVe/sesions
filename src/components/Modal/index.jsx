import { useState } from "react";
import Backdrop from "./Backdrop";
import "./modal.scss"

export default function Modal({children, isVisible, showModalHandler }) {
  return (
    <>
      {isVisible && (
        <Backdrop onClick={showModalHandler} isVisible={isVisible}>
          <section className="modal__container">{children}</section>
        </Backdrop>
      )}
    </>
  );
}
