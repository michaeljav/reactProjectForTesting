import React, { CSSProperties, useState } from 'react';

import Select, { IndicatorSeparatorProps, StylesConfig } from 'react-select';

const options = [
  { value: 'place', label: 'Place' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
interface item {
  value: string;
  label: string;
}

const colourStyles: StylesConfig<item> = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'transparent',
    position: 'relative',
    width: '100%',
    borderColor: '#003876',
    outline: 'none',
    transition: '0.1s ease',
    '&:hover': {
      border: '1px solid rgba(0, 56, 118, 0.5) ',
    },
    boxShadow: state.isFocused ? 'none' : 'none',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#FFFFFF' : undefined,
      color: isFocused ? '#DE1C28' : '#003876',
      borderBottom: `2px solid #F0F0F0`,
      padding: '0px 10px 20px 10px',
      height: '30px',
    };
  },

  singleValue: (styles, { data }) => ({
    ...styles,
    color: '#003876',
  }),
  menu: (provided, state) => ({
    ...provided,
    top: 32,
  }),
  menuList: (provided, state) => ({
    ...provided,
    margin: '5px !important',
    padding: '5px !important',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#003876',
    '&:hover': {
      color: 'rgba(0, 56, 118, 0.5) ',
    },
  }),
  input: (provided) => ({
    ...provided,
    color: '#003876', // Change this to the desired text color
  }),
};

interface props {
  placeholder?: string;
  name: string;
}

export default function SelectDropdown({
  placeholder = 'INSTITUCIÓN',
  name = 'instituciones',
}: props) {
  const [labelMessage, setLabelMessage] = useState(placeholder);

  const [labelIsTop, setLabelToTop] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const style: { [key: string]: CSSProperties } = {
    label: {
      top: '10px',
      position: 'absolute',
      backgroundColor: '#F0F0F0',
      color: '#707070',
      left: '10px',
      fontSize: '.75rem',
    },
    labeltop: {
      position: 'absolute',
      left: '2px',
      transform: 'translate(5px, -11px) scale(0.88)',
      zIndex: 3111,
      backgroundColor: '#F0F0F0',
      color: '#003876',
      padding: '0 4px',
      fontSize: '1rem',
      fontWeight: '400',
      letterSpacing: '0.15px',
    },
  };

  const handleBlur = () => {
    if (!selectedValue) {
      setLabelToTop(false);
    }
  };
  const handleChange = (item) => {
    setSelectedValue(item);
  };
  const handleFOCUS = (item) => {
    setLabelToTop(true);
  };

  const indicatorSeparatorStyle = {
    alignSelf: 'stretch',
    backgroundColor: '#003876',
    marginBottom: 8,
    marginTop: 8,
    width: 1,
  };

  const IndicatorSeparator = ({
    innerProps,
  }: IndicatorSeparatorProps<item, true>) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  return (
    <div className=' relative mt-1'>
      {labelIsTop ? (
        <label style={style.labeltop}>{labelMessage}</label>
      ) : (
        <label style={style.label}>{labelMessage}</label>
      )}

      <Select
        isClearable
        value={selectedValue}
        onChange={handleChange}
        onFocus={handleFOCUS}
        onBlur={handleBlur}
        name={name}
        placeholder=''
        options={options}
        styles={colourStyles}
        components={{ IndicatorSeparator }}
      />
    </div>
  );
}
