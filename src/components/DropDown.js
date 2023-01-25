/* eslint-disable prettier/prettier */
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
      listMode="MODAL"
      searchable={true}
      searchPlaceholder="Search..."
      style={{borderColor: 'gray'}}
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
