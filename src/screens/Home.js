/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import SideBar from '../components/SideBar';
import HomeFilter from '../components/HomeFilter';

const Home = () => {
  return (
    <View className="">
      <View className="flex-row">
        {/* sidebar start */}
        <View className="basis-[18%]">
          <SideBar />
        </View>
        {/* sidebar end */}

        <View className="basis-[82%]">
          {/* home page filter list section start*/}
          <View className="w-full">
            <HomeFilter />
          </View>
          {/* home page filter list section end*/}
        </View>
      </View>
    </View>
  );
};

export default Home;
