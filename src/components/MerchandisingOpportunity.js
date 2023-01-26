/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';

const MerchandisingOpportunity = () => {
  return (
    <View className="flex-row justify-between gap-1 pt-1">
      <View className="basis-1/3">
        <View className="bg-sky-300/20 rounded p-1 mt-1">
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              পিএমএম:{' '}
            </Text>
            <Text className="text-base text-gray-600">1</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              পিএমএম এর নাম:{' '}
            </Text>
            <Text className="text-base text-gray-600">In Store</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              পিএমএম এর লোকেশন:{' '}
            </Text>
            <Text className="text-base text-gray-600">Font</Text>
          </View>
        </View>
      </View>

      <View className="basis-1/3">
        <View className="bg-sky-300/20 rounded p-1 mt-1">
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              পিওএসএম:{' '}
            </Text>
            <Text className="text-base text-gray-600">1</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              প্লেসমেন্ট:{' '}
            </Text>
            <Text className="text-base text-gray-600">L Box</Text>
          </View>

          <View className="flex-row">
            <Text className="text-base font-semibold text-gray-700">ধরন: </Text>
            <Text className="text-base text-gray-600 flex-1 flex-warp">
              Focused Small/c, Lighter Standee, ABC
            </Text>
          </View>
        </View>
      </View>

      <View className="basis-1/3">
        <View className="bg-sky-300/20 rounded p-1 mt-1">
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              প্লানোগ্রাম:{' '}
            </Text>
            <Text className="text-base text-gray-600">1</Text>
          </View>

          <View className="flex-row">
            <Text className="text-base font-semibold text-gray-700">
              প্লেসমেন্ট:{' '}
            </Text>
            <Text className="text-base text-gray-600 flex-1 flex-warp">
              Back Wall, Side Wall
            </Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">রো: </Text>
            <Text className="text-base text-gray-600">5</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              কলাম:{' '}
            </Text>
            <Text className="text-base text-gray-600">10</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MerchandisingOpportunity;
