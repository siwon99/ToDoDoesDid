import React, { useState } from 'react';

function Checkbox({ children, disabled, checked, onChange }) {
  const [importCheck, setImportCheck] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;

    onChange(isChecked);

    setImportCheck(isChecked);
  };

  return (
    <label className="ModalCheck">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      중요
      {children}
    </label>
  );
}

export default Checkbox;
