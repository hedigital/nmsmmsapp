/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCallType} from '../redux/features/callTypeSlice';

let time;

const SideBar = ({setDashboardActive}) => {
  const dispatch = useDispatch();
  const {callType} = useSelector(state => state.callType);
  const [active, setActive] = useState(1);

  const [NavData, setNavData] = useState([
    {
      key: 1,
      title: 'মার্কেট ভিজিট কল',
    },
    {
      key: 2,
      title: 'ভার্চুয়াল কল',
    },
    {
      key: 3,
      title: 'সারসংক্ষেপ',
    },
  ]);

  const changeNavItem = v => {
    time = new Date().getTime();

    setActive(v);
    if (v === 1) {
      dispatch(setCallType('marketVisitCall'));
      setDashboardActive(false);
    }
    if (v === 2) {
      dispatch(setCallType('virtualCall'));
      setDashboardActive(false);
    }
    if (v === 3) {
      setDashboardActive(true);
    }
  };

  useEffect(() => {
    console.log(new Date().getTime() - time);
  }, [callType]);

  return (
    <View className="h-full w-full bg-gray-800">
      <View className="px-2 mt-3">
        <FlatList
          data={NavData}
          keyExtractor={item => item.key + item.title}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => changeNavItem(item.key)}
              className={`px-1 py-3 ${
                active === item.key ? 'bg-yellow-500' : 'bg-white'
              } rounded mt-3`}>
              <View>
                <Text
                  className={`${
                    active === item.key ? 'text-white' : 'text-gray-700'
                  } text-center text-base`}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SideBar;
