import React, {useState} from "react"

function Modal() {
  return (
    <div className="Modalcontainer">모달rrrrrrrrrr 내용</div>
  )
}

export default function Dropdown() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    console.log("List item clicked!")
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <hr className="hr" />
      <li onClick={showModal}>마이페이지</li>
      <li onClick={showModal}>로그아웃</li>

      {isModalVisible && (
        <>
          <Modal />
          <button className="ModalClose" onClick={closeModal}>X</button>
        </>
      )}
    </>
  )
}