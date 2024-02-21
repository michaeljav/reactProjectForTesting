import React, { useState } from 'react';
import Select from 'react-select';
// Import your custom CSS file

function CustomSelect() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`custom-select ${isFocused ? 'focused' : ''}`}>
      <Select
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder='Select an option'
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
      />
    </div>
  );
}

export default CustomSelect;
