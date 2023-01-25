/* eslint-disable prettier/prettier */
import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {countDecrease, countIncrease} from '../redux/features/testCount';

const Test = () => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.count);
  return (
    <View className="space-y-4 space-x-3 mt-5">
      <Text className="text-center mx-auto w-56 p-3 bg-red-900 text-white font-bold text-3xl">
        {count}
      </Text>
      <View className="mb-5">
        <Button title="increase" onPress={() => dispatch(countIncrease())} />
      </View>
      <Button title="Decrease" onPress={() => dispatch(countDecrease())} />
    </View>
  );
};

export default Test;
