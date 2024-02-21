import React from 'react';
import Select, { ActionMeta } from 'react-select';
import { ValueType } from 'react-select/src/types';
interface ISelectItem {
  value: string;
  label: string;
}

const ReactSelect: React.FC = () => {
  const handleChange = (
    selectedOption: ValueType<ISelectItem, false>,
    actionMeta: ActionMeta<ISelectItem>
  ) => {
    if (selectedOption) {
      const selectedValue = (selectedOption as ISelectItem).value;
      console.log('Selected Value (Single):', selectedValue);
    } else {
      // Handle clearing the selection (if applicable)
      console.log('Selection Cleared');
    }
  };

  const options: ISelectItem[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // Add more options as needed
  ];

  return (
    <Select
      options={options}
      onChange={handleChange}
    />
  );
};

export default YourComponent;
