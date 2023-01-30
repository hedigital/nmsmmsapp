/* eslint-disable prettier/prettier */
import {View, Text, Image, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import DropDown from './DropDown';
import CalenderComponent from './Calender';
import CustomDropDown from './CustomDropDown';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCmName,
  setEndDate,
  setLocationCorrect,
  setOutletCode,
  setPoint,
  setStartDate,
  setStatus,
} from '../redux/features/FilterSlice';

const HomeFilter = () => {
  const [open, setOpen] = useState(false);
  const [openCmModal, setOpenCmModal] = useState(false);
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

  // point: '',
  // cmName: '',
  // startDate: '',
  // endDate: '',
  // isLocationCorrect: '',
  // status: '',
  // outletCode: '',

  const [cmList, setCmList] = useState([
    {label: 'aa', value: 'aa'},
    {label: 'll', value: 'll'},
    {label: 'mm', value: 'mm'},
    {label: 'nn', value: 'nn'},
    {label: 'oo', value: 'oo'},
  ]);

  const dispatch = useDispatch();
  const {
    point,
    cmName,
    startDate,
    endDate,
    isLocationCorrect,
    status,
    outletCode,
  } = useSelector(state => state.filter);

  //   custom dropdown content state
  const [locationExpand, setLocationExpand] = useState(false);

  const [statusExpand, setStatusExpand] = useState(false);

  // get point
  const getPointVal = val => {
    dispatch(setPoint(val()));
  };

  // get cm name
  const getCmName = val => {
    dispatch(setCmName(val()));
  };

  // get date and set redux store
  const getDateStartDate = val => {
    dispatch(setStartDate(val));
  };
  const getEndDate = val => {
    dispatch(setEndDate(val));
  };

  // get location value
  const getLocationVal = val => {
    dispatch(setLocationCorrect(val));
  };

  // get status value
  const getStatusVal = val => {
    dispatch(setStatus(val));
  };

  // get outlet code
  const getOutletCode = val => {
    dispatch(setOutletCode(val));
  };

  const searchData = () => {
    console.log(
      point,
      cmName,
      startDate,
      endDate,
      isLocationCorrect,
      status,
      outletCode,
    );
  };

  return (
    <View className="space-y-2 bg-gray-400/10 p-2">
      <View className="flex-row justify-between">
        <View className="basis-[24%]">
          <DropDown
            open={open}
            modalType="MODAL"
            value={point}
            items={items}
            setOpen={setOpen}
            setValue={getPointVal}
            setItems={setItems}
            placeholder="পয়েন্ট"
            search={true}
          />
        </View>

        <View className="basis-[24%]">
          <DropDown
            open={openCmModal}
            modalType="MODAL"
            value={cmName}
            items={cmList}
            setOpen={setOpenCmModal}
            setValue={getCmName}
            setItems={cmList}
            placeholder="সি এম নেম"
            search={true}
          />
        </View>

        <View className="basis-[24%]">
          <CalenderComponent
            placeholder={startDate ? startDate : 'শুরু তারিখ'}
            date={startDate}
            setDate={getDateStartDate}
          />
        </View>

        <View className="basis-[24%]">
          <CalenderComponent
            placeholder={endDate ? endDate : 'শেষ তারিখ'}
            date={endDate}
            setDate={getEndDate}
          />
        </View>
      </View>

      <View className="flex-row justify-between">
        <View className="basis-[24%]">
          <CustomDropDown
            placeholder={isLocationCorrect || 'লোকেশন সঠিক?'}
            setValue={getLocationVal}
            visible={locationExpand}
            setVisible={setLocationExpand}
          />
        </View>

        <View className="basis-[24%]">
          <CustomDropDown
            placeholder={status || 'স্ট্যাটাস'}
            setValue={getStatusVal}
            visible={statusExpand}
            setVisible={setStatusExpand}
          />
        </View>

        <View className="basis-[24%]">
          <TextInput
            onChangeText={getOutletCode}
            placeholderTextColor="#374151"
            className="border px-3 border-gray-500 rounded-lg text-gray-700  bg-white"
            placeholder="Outlet Code"
          />
        </View>

        <View className="basis-[24%]">
          <Pressable
            onPress={searchData}
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
