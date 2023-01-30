/* eslint-disable prettier/prettier */
import {View, Text, Pressable, Image, ScrollView} from 'react-native';
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
    <View className="m-3 flex-1">
      <View className="flex-row justify-between bg-white rounded px-3 py-1">
        {/* outlet basic information top section start */}
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
      {/* outlet basic information top section end */}

      {/* current edit title start */}
      <View className="bg-yellow-500 rounded px-3 py-1 w-full my-2">
        <Text className="text-xl text-center text-white">
          মার্চেন্ডাইজিং এর উপস্থিতি
        </Text>
      </View>
      {/* current edit title end */}

      {/* edit content start */}
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="flex-row justify-between">
          {/* pmm edit section start */}
          <View className="basis-1/3">
            {/* pmm 1 */}
            <View className="flex-row border justify-between border-gray-200 bg-white rounded p-2">
              <View className="space-y-1">
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
                  {/* pmm name dropdown here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Dropdown Here
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm name dropdown here end */}
                </View>

                <View className="flex-row items-center">
                  <Text className="text-base font-semibold text-gray-700">
                    পিএমএম ধরন:{' '}
                  </Text>
                  {/* pmm type dropdown here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Dropdown Here
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm type dropdown here end */}
                </View>
              </View>

              {/* pmm image and close section start */}
              <View className="items-end space-y-1">
                <Pressable className="w-8 h-8 rounded-full items-center justify-center bg-gray-600">
                  <Text className="text-white font-bold text-xl">X</Text>
                </Pressable>
                <Pressable>
                  <Image
                    resizeMode="contain"
                    className="w-12 h-12 rounded"
                    source={{
                      uri: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-30/MerchandisingPresence_POSM_JTI_RAJ-36-8487_1_1_Jan-30-2023.png',
                    }}
                  />
                </Pressable>
                <Pressable>
                  <Image
                    resizeMode="contain"
                    className="w-12 h-12 rounded"
                    source={{
                      uri: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-30/PreExecutionPicture_KHU-42-22944_Jan-30-2023.png',
                    }}
                  />
                </Pressable>
              </View>
              {/* pmm image and close section end */}
            </View>
            {/* pmm 2 */}
            <View className="flex-row border justify-between border-gray-200 bg-white rounded p-2">
              <View className="space-y-1">
                <View className="flex-row items-center">
                  <Text className="text-base font-semibold text-gray-700">
                    পিএমএম:{' '}
                  </Text>
                  <Text className="text-base text-gray-600">2</Text>
                </View>

                <View className="flex-row items-start">
                  <Text className="text-base font-semibold text-gray-700">
                    পিএমএম ওনার:{' '}
                  </Text>
                  <Text className="text-base text-gray-600 flex-1 flex-warp">
                    VBP Sponsored-PMM
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <Text className="text-base font-semibold text-gray-700">
                    পিএমএম নাম:{' '}
                  </Text>
                  {/* pmm name dropdown here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Dropdown Here
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm name dropdown here end */}
                </View>

                <View className="flex-row items-center">
                  <Text className="text-base font-semibold text-gray-700">
                    পিএমএম ধরন:{' '}
                  </Text>
                  {/* pmm type dropdown here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Dropdown Here
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm type dropdown here end */}
                </View>

                <View className="flex-row items-center">
                  <Text className="text-base font-semibold text-gray-700">
                    রো:{' '}
                  </Text>
                  {/* pmm row input field here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Input Field
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm row input field here start */}
                </View>

                <View className="flex-row items-center">
                  <Text className="text-base font-semibold text-gray-700">
                    কলাম:{' '}
                  </Text>
                  {/* pmm column input field here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Input Field
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm column input field here start */}
                </View>
              </View>

              {/* pmm image and close section start */}
              <View className="items-end space-y-1">
                <Pressable className="w-8 h-8 rounded-full items-center justify-center bg-gray-600">
                  <Text className="text-white font-bold text-xl">X</Text>
                </Pressable>
                <Pressable>
                  <Image
                    resizeMode="contain"
                    className="w-12 h-12 rounded"
                    source={{
                      uri: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-30/MerchandisingPresence_POSM_JTI_RAJ-36-8487_1_1_Jan-30-2023.png',
                    }}
                  />
                </Pressable>
                <Pressable>
                  <Image
                    resizeMode="contain"
                    className="w-12 h-12 rounded"
                    source={{
                      uri: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-30/PreExecutionPicture_KHU-42-22944_Jan-30-2023.png',
                    }}
                  />
                </Pressable>
              </View>
              {/* pmm image and close section end */}
            </View>
          </View>
          {/* pmm edit section end */}

          {/* posm edit section start */}
          <View className="basis-1/3">
            <View className="flex-row border justify-between border-gray-200 basis-1/3 bg-white rounded p-2">
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
                  {/* pmm name dropdown here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Dropdown Here
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm name dropdown here end */}
                </View>

                <View className="flex-row items-center">
                  <Text className="text-base font-semibold text-gray-700">
                    পিএমএম ধরন:{' '}
                  </Text>
                  {/* pmm type dropdown here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Dropdown Here
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm type dropdown here end */}
                </View>
              </View>

              {/* pmm image and close section start */}
              <View>
                <Pressable className="w-8 h-8 rounded-full items-center justify-center bg-gray-600">
                  <Text className="text-white font-bold text-xl">X</Text>
                </Pressable>
                <View />
              </View>
              {/* pmm image and close section end */}
            </View>
          </View>
          {/* posm edit section end */}

          {/* planogram edit section start */}
          <View className="basis-1/3">
            <View className="flex-row border justify-between border-gray-200 basis-1/3 bg-white rounded p-2">
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
                  {/* pmm name dropdown here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Dropdown Here
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm name dropdown here end */}
                </View>

                <View className="flex-row items-center">
                  <Text className="text-base font-semibold text-gray-700">
                    পিএমএম ধরন:{' '}
                  </Text>
                  {/* pmm type dropdown here start */}
                  <Pressable>
                    <View>
                      <Text className="font-bold text underline">
                        Dropdown Here
                      </Text>
                    </View>
                  </Pressable>
                  {/* pmm type dropdown here end */}
                </View>
              </View>

              {/* pmm image and close section start */}
              <View>
                <Pressable className="w-8 h-8 rounded-full items-center justify-center bg-gray-600">
                  <Text className="text-white font-bold text-xl">X</Text>
                </Pressable>
                <View />
              </View>
              {/* pmm image and close section end */}
            </View>
          </View>
          {/* planogram edit section end */}
        </View>
      </ScrollView>
      {/* edit content end */}
    </View>
  );
};

export default Edit;
