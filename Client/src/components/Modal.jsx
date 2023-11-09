import React from "react"

export default function Modal() {

  const closeModal = () => {
    setModalOpen(false);
  };

    return (
        <div className="container">
            <button className="close" onClick={closeModal}>X</button>
            <p>모달창입니다.</p>
        </div>
    );
}