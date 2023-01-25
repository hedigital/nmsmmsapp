/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DropDown from './DropDown';
import CalenderComponent from './Calender';
import CustomDropDown from './CustomDropDown';

const HomeFilter = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Android', value: 'android'},
    {label: 'BlackBerry', value: 'black'},
    {label: 'Windows Phone', value: 'aa'},
    {label: 'a', value: 'a'},
    {label: 'b', value: 'b'},
    {label: 'c', value: 'c'},
    {label: 'd', value: 'd'},
    {label: 'e', value: 'e'},
    {label: 'f', value: 'f'},
    {label: 'g', value: 'g'},
    {label: 'h', value: 'h'},
    {label: 'i', value: 'i'},
    {label: 'j', value: 'j'},
    {label: 'k', value: 'k'},
    {label: 'l', value: 'l'},
    {label: 'm', value: 'm'},
    {label: 'n', value: 'n'},
    {label: 'o', value: 'o'},
  ]);

  //   date selection
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  //   custom dropdown content state
  const [locationExpand, setLocationExpand] = useState(false);
  const [isLocationCorrect, setIsLocationCorrect] = useState('');

  const [statusExpand, setStatusExpand] = useState(false);
  const [status, setStatus] = useState('');

  return (
    <View className="mt-3 space-y-2">
      <View className="flex-row justify-between px-2">
        <View className="basis-[24%]">
          <DropDown
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="পয়েন্ট"
          />
        </View>

        <View className="basis-[24%]">
          <DropDown
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="সি এম নেম"
          />
        </View>

        <View className="basis-[24%]">
          <CalenderComponent
            placeholder={startDate ? startDate : 'শুরু তারিখ'}
            date={startDate}
            setDate={setStartDate}
          />
        </View>

        <View className="basis-[24%]">
          <CalenderComponent
            placeholder={endDate ? endDate : 'শেষ তারিখ'}
            date={endDate}
            setDate={setEndDate}
          />
        </View>
      </View>

      <View className="flex-row justify-between px-2">
        <View className="basis-[24%]">
          <CustomDropDown
            placeholder={isLocationCorrect || 'লোকেশন সঠিক?'}
            setValue={setIsLocationCorrect}
            visible={locationExpand}
            setVisible={setLocationExpand}
          />
        </View>

        <View className="basis-[24%]">
          <CustomDropDown
            placeholder={status || 'স্ট্যাটাস'}
            setValue={setStatus}
            visible={statusExpand}
            setVisible={setStatusExpand}
          />
        </View>

        <View className="basis-[24%]">
          <CalenderComponent
            placeholder={startDate ? startDate : 'শুরু তারিখ'}
            date={startDate}
            setDate={setStartDate}
          />
        </View>

        <View className="basis-[24%]">
          <CalenderComponent
            placeholder={endDate ? endDate : 'শেষ তারিখ'}
            date={endDate}
            setDate={setEndDate}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeFilter;
