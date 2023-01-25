/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const CustomDropDown = ({placeholder, setValue, visible, setVisible}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => setVisible(prev => !prev)}
        className="w-full flex-row bg-white border-gray-500 h-[50px] rounded-lg border items-center justify-between px-3">
        <Text className="text-sm text-gray-700">{placeholder}</Text>
        <Image
          source={require('../assets/down-arrow.png')}
          className="w-[18px]"
          resizeMode="contain"
        />
      </TouchableOpacity>
      {visible ? (
        <View className="w-full bg-white border border-gray-400 mt-1 rounded">
          <Pressable
            onPress={() => {
              setVisible(false);
              setValue('হ্যাঁ');
            }}>
            <Text className="text-center text-lg p-2 text-white border-b-[1px] border-gray-800 bg-yellow-500">
              হ্যাঁ
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setVisible(false);
              setValue('না');
            }}>
            <Text className="text-center text-lg p-2 text-white bg-yellow-500 ">
              না
            </Text>
          </Pressable>
        </View>
      ) : null}
    </>
  );
};

export default CustomDropDown;
