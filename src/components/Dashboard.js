/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

const Dashboard = () => {
  const [teamData, setTeamData] = useState([
    {
      key: 1,
      cmName: 'Cm 1',
      todaysSurvey: 12,
      totalSurvey: 131,
    },
    {
      key: 2,
      cmName: 'Cm 2',
      todaysSurvey: 15,
      totalSurvey: 130,
    },
    {
      key: 3,
      cmName: 'Cm 3',
      todaysSurvey: 10,
      totalSurvey: 150,
    },
    {
      key: 4,
      cmName: 'Cm 4',
      todaysSurvey: 20,
      totalSurvey: 160,
    },
    {
      key: 5,
      cmName: 'Cm 5',
      todaysSurvey: 11,
      totalSurvey: 131,
    },
    {
      key: 6,
      cmName: 'Cm 6',
      todaysSurvey: 10,
      totalSurvey: 120,
    },
    {
      key: 7,
      cmName: 'Cm 7',
      todaysSurvey: 15,
      totalSurvey: 100,
    },
    {
      key: 8,
      cmName: 'Cm 8',
      todaysSurvey: 2,
      totalSurvey: 137,
    },
    {
      key: 9,
      cmName: 'Cm 9',
      todaysSurvey: 12,
      totalSurvey: 140,
    },
    {
      key: 10,
      cmName: 'Cm 10',
      todaysSurvey: 18,
      totalSurvey: 122,
    },
  ]);
  const [msData, setMsData] = useState([
    {
      key: 1,
      callType: 'মার্কেট ভিজিট কল',
      todaysCall: 12,
      totalCall: 131,
    },
    {
      key: 2,
      callType: 'ভার্চুয়াল কল',
      todaysCall: 15,
      totalCall: 130,
    },
  ]);
  return (
    <View>
      <View className="px-2">
        <Text className="text-2xl text-gray-700 font-bold pt-2">
          আমার সারসংক্ষেপ
        </Text>
        <View className="bg-white rounded  px-3 py-2">
          <View className="flex-row justify-between items-center">
            <Text className="basis-1/3 font-semibold text-gray-700 text-xl">
              কলের ধরন
            </Text>
            <Text className="text-center basis-1/3 font-semibold text-gray-700 text-xl">
              আজকের সার্ভে
            </Text>
            <Text className="basis-1/3 text-center font-semibold text-gray-700 text-xl">
              টোটাল সার্ভে(এমটিডি)
            </Text>
          </View>

          <FlatList
            data={msData}
            keyExtractor={item => item.key + item.callType}
            renderItem={({item}) => (
              <View className="flex-row justify-between items-center">
                <Text className="basis-1/3 text-base text-gray-600 mt-1 ">
                  {item.callType}
                </Text>
                <Text className="text-center basis-1/3 text-base text-gray-600 mt-1">
                  {item.todaysCall}
                </Text>
                <Text className="text-center basis-1/3 text-base text-gray-600 mt-1">
                  {item.totalCall}
                </Text>
              </View>
            )}
          />
        </View>
      </View>

      <View className="px-2">
        <Text className="text-2xl text-gray-700 font-bold pt-2">
          আমার টিমের সারসংক্ষেপ
        </Text>
        <View className="bg-white rounded  px-3 py-2">
          <View className="flex-row justify-between items-center">
            <Text className="basis-1/3 font-semibold text-gray-700 text-xl">
              সি এম নাম
            </Text>
            <Text className="text-center basis-1/3 font-semibold text-gray-700 text-xl">
              আজকের সার্ভে
            </Text>
            <Text className="basis-1/3 text-center font-semibold text-gray-700 text-xl">
              টোটাল সার্ভে(এমটিডি)
            </Text>
          </View>

          <FlatList
            className="h-[220px]"
            data={teamData}
            keyExtractor={item => item.key + item.cmName}
            renderItem={({item}) => (
              <View className="flex-row justify-between items-center">
                <Text className="basis-1/3 text-base text-gray-600 mt-1 ">
                  {item.cmName}
                </Text>
                <Text className="text-center basis-1/3 text-base text-gray-600 mt-1">
                  {item.todaysSurvey}
                </Text>
                <Text className="text-center basis-1/3 text-base text-gray-600 mt-1">
                  {item.totalSurvey}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
