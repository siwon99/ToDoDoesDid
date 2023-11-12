import React, { useState } from "react";
import axios from 'axios';
import Modal from "./Modal";

function Checkbox({ children, disabled, checked, onChange }) {
  const [importCheck, setImportCheck] = useState(false);

  return (
    <label className="ModalCheck">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      중요
      {children}
    </label>
  );
}

export default function YourComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scheduleInfo, setScheduleInfo] = useState({
    taskName: "",
    allDay: false,
    startTime: "",
    endTime: "",
    location: "",
    alaram: true,
    important: true,
    description: "",
    color: "#a8a8a8"
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //입력변경
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScheduleInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  //일정등록
  const handleScheduleRegistration = async () => {
    try {
      const response = await axios.post('https://api.qushe8r.shop/task', scheduleInfo);
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('에러 발생:', error);
    }
    closeModal();
  };

  return (
    <React.Fragment>
      <button className="AddTaskBtn" onClick={openModal}>추가하기</button>
      <Modal open={modalOpen} close={closeModal}>
        <div className="ModalInfo">
          <div>
            <input
              className="ModalTaskName"
              type="text"
              name="taskName"
              value={scheduleInfo.taskName}
              onChange={handleInputChange}
              placeholder="일정 추가"
            />
            <Checkbox />
            <button className="ModalTaskcloseBtn" onClick={closeModal}>취소하기</button>
            <button className="ModalTaskBtn" onClick={handleScheduleRegistration}>일정 등록</button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}
