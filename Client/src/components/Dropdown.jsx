import React, { useState } from "react";

export default function Dropdown() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <hr className="hr" />
      <li>로그아웃</li>
    </>
  );
}
