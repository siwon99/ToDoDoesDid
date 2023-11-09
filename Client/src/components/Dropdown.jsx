import React, {useState} from "react"
import Modal from "./Modal.jsx"

export default function Dropdown() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <hr className="hr" />
      <button onClick={showModal}>
        마이페이지
        {modalOpen && (
          <Modal closeModal={closeModal} />
        )}
      </button>
      <li onClick={showModal}>로그아웃</li>


    </>
  )
}