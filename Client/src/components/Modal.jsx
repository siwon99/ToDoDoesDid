import React from "react";

const Modal = ({ open, close, header, children }) => {
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <div className="Modalheadertitle">일정 만들기</div>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{children}</main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;