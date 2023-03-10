/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import SideBar from '../components/SideBar';
import HomeFilter from '../components/HomeFilter';
import SurveyItems from '../components/SurveyItems';
import {ScrollView} from 'react-native';
import Dashboard from '../components/Dashboard';

const Home = () => {
  const [dashboardActive, setDashboardActive] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <View className="">
      <View className="flex-row">
        {/* sidebar start */}
        <View className="basis-[18%]">
          <SideBar
            setLoading={setLoading}
            dashboardActive={dashboardActive}
            setDashboardActive={setDashboardActive}
          />
        </View>
        {/* sidebar end */}

        <View className="basis-[82%]">
          {dashboardActive ? (
            <Dashboard />
          ) : (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              {/* home page filter list section start*/}
              <View className="w-full">
                <HomeFilter />
              </View>
              {/* home page filter list section end*/}

              {/* item render start */}
              <View className="px-2">
                <SurveyItems />
                <SurveyItems />
                <SurveyItems />
              </View>
              {/* item render end */}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

export default Home;
