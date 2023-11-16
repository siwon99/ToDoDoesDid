import React, { useState } from "react";
import axios from 'axios';
import Modal from "../Modal";
import DatePicker from './DatePicker';
import DateColor from './DateColor';
import { IoMdColorWand } from "react-icons/io";

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

export default function TaskModal() {
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
    color: ""
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //날짜변경
  const handleDateChange = ({ startDate, endDate }) => {
    setScheduleInfo((prevInfo) => ({
      ...prevInfo,
      startTime: startDate,
      endTime: endDate,
    }));
  };

  //색상변경
  const handleUpdateColor = (newColor) => {
    setColorInfo((prevData) => ({
      ...prevData,
      color: newColor,
    }));
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
          <DatePicker onDateChange={handleDateChange} />
          <IoMdColorWand className="DateColor" />
          <DateColor onUpdateColor={handleUpdateColor} />
        </div>
      </Modal>
    </React.Fragment>
  );
}
