/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';

const CalenderComponent = ({placeholder, setDate}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Modal
        visible={visible}
        animationType="slide"
        transparent
        hardwareAccelerated
        onRequestClose={() => setVisible(false)}>
        <View className="flex-1 justify-center items-center bg-gray-900/50">
          <View className="w-[450px] h-[400px] bg-white rounded-lg">
            <Calendar
              onDayPress={e => {
                setVisible(false);
                setDate(e.dateString);
              }}
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setVisible(prev => !prev)}
        className="w-full flex-row bg-white border-gray-500 h-[50px] rounded-lg border items-center justify-between px-3">
        <Text className="text-sm text-gray-900">{placeholder}</Text>
        <Image
          source={require('../assets/calendar.png')}
          className="w-[22px]"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
};

export default CalenderComponent;
