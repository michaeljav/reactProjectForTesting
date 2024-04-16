/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Select, { ActionMeta } from 'react-select';
// Import your custom CSS file

interface valueObject {
  value: string;
  label: string;
}
function CustomSelect() {
  const [isFocused, setIsFocused] = useState(false);

  const [selectedOption, setSelectedOption] = useState<valueObject>(
    {} as valueObject
  );

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  const btnOnchange = () => {
    setSelectedOption({ value: 'option2', label: 'Option 2 label' });
  };

  useEffect(() => {
    setSelectedOption({ value: 'option2', label: 'Option 2 label' });
  }, []);
  return (
    <div className={`custom-select ${isFocused ? 'focused' : ''}`}>
      <Select
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        onChange={handleChange}
        placeholder='Select an option'
        options={[
          { value: 'option1', label: 'Option 1 label' },
          { value: 'option2', label: 'Option 2 label' },
          { value: 'option3', label: 'Option 3 label' },
        ]}
        value={selectedOption}
        // defaultInputValue='opti'
      />
      <button onClick={btnOnchange}>Predefinido option 2</button>
    </div>
  );
}

export default CustomSelect;
