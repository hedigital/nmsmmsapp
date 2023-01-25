/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
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
    <View className="space-y-2 bg-gray-400/10 p-2">
      <View className="flex-row justify-between">
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

      <View className="flex-row justify-between">
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
          <TextInput
            placeholderTextColor="#374151"
            className="border px-3 border-gray-500 rounded-lg text-gray-700  bg-white"
            placeholder="Outlet Code"
          />
        </View>

        <View className="basis-[24%]">
          <Pressable
            className="bg-yellow-500 rounded-lg px-3 h-[50px] items-center justify-center"
            android_ripple={{color: '#ca8a04', borderless: false}}>
            <View className="flex-row w-full justify-center items-center">
              <Image
                source={require('../assets/search.png')}
                resizeMode="contain"
                className="w-[22px] mr-3"
              />
              <Text className="text-center text-white text-lg font-semibold">
                খুঁজুন
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeFilter;
