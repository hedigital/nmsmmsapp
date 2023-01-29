/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
  modalType,
  search,
  isWidth,
}) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={placeholder}
      autoScroll
      listMode={modalType}
      searchable={search}
      searchPlaceholder="Search..."
      style={{borderColor: 'gray', width: isWidth ? 120 : '100%'}}
      containerStyle={{width: isWidth ? 120 : '100%'}}
      searchContainerStyle={{
        borderBottomColor: '#dfdfdf',
      }}
      searchTextInputStyle={{
        borderColor: 'gray',
      }}
      listParentLabelStyle={{
        fontWeight: 'semibold',
        fontSize: 22,
      }}
    />
  );
};

export default DropDown;
