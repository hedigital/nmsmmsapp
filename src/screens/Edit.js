/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import DropDown from '../components/DropDown';

const Edit = () => {
  const [pmmNameDropdownOpen, setPmmNameDropdownOpen] = useState(false);
  const [pmmNameValue, setPmmNameValue] = useState([
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
  ]);

  const [pmmName, setPmmName] = useState({label: 'B', value: 'B'});

  return (
    <View className="m-3">
      <View className="flex-row justify-between bg-white rounded px-3 py-1">
        <View className="basis-1/3">
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              পয়েন্ট:{' '}
            </Text>
            <Text className="text-base text-gray-600">Dhaka</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              সিএম নাম:{' '}
            </Text>
            <Text className="text-base text-gray-600">Nayem</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              আউটলেট নাম:{' '}
            </Text>
            <Text className="text-base text-gray-600">Rasel Store</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              আউটলেট কোড:{' '}
            </Text>
            <Text className="text-base text-gray-600">DHK-01-0000</Text>
          </View>
        </View>

        <View className="border-l-[1px] border-gray-500 pl-2 basis-1/3">
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              ক্লাস্টার:{' '}
            </Text>
            <Text className="text-base text-gray-600">Dhaka</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              মোবাইল:{' '}
            </Text>
            <Text className="text-base text-gray-600">01571322757</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">রুট: </Text>
            <Text className="text-base text-gray-600">72A</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              লোকেশন সঠিক?:{' '}
            </Text>
            <Text className="text-base text-gray-600">No</Text>
          </View>
        </View>

        <View className="border-l-[1px] border-gray-500 pl-2 basis-1/3">
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">সময়: </Text>
            <Text className="text-base text-gray-600">10.20 AM</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-gray-700">
              তারিখ:{' '}
            </Text>
            <Text className="text-base text-gray-600">22-01-2022</Text>
          </View>
        </View>
      </View>

      {/* current edit title start */}
      <View className="bg-yellow-500 rounded px-3 py-1 w-full mt-2">
        <Text className="text-xl text-center text-white">
          মার্চেন্ডাইজিং এর উপস্থিতি
        </Text>
      </View>
      {/* current edit title end */}

      {/* edit content start */}
      <View>
        <View className="flex-row">
          <View>
            <View className="flex-row items-center">
              <Text className="text-base font-semibold text-gray-700">
                পিএমএম:{' '}
              </Text>
              <Text className="text-base text-gray-600">1</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-base font-semibold text-gray-700">
                পিএমএম ওনার:{' '}
              </Text>
              <Text className="text-base text-gray-600">BATB</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-base font-semibold text-gray-700">
                পিএমএম নাম:{' '}
              </Text>
              <DropDown
                open={pmmNameDropdownOpen}
                value={pmmName}
                items={pmmNameValue}
                setItems={setPmmNameValue}
                setValue={setPmmName}
                placeholder="Select"
                setOpen={setPmmNameDropdownOpen}
                modalType="SCROLLVIEW"
                search={false}
                isWidth={true}
              />
            </View>
            <View className="flex-row items-center">
              <Text className="text-base font-semibold text-gray-700">
                পিএমএম ধরন:{' '}
              </Text>
              <Text className="text-base text-gray-600">BATB</Text>
            </View>
          </View>

          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      {/* edit content end */}
    </View>
  );
};

export default Edit;
