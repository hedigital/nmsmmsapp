/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Touchable,
  TouchableHighlight,
  Pressable,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import MerchandisingPresence from './MerchandisingPresence';
import MerchandisingOpportunity from './MerchandisingOpportunity';
import PmmMaintenance from './PmmMaintenance';

const SurveyItems = () => {
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const [expandContent, setExpandContent] = useState('');

  function renderItem(str) {
    let content;
    if (str === 'presence') {
      content = <MerchandisingPresence />;
    } else if (str === 'opportunity') {
      content = <MerchandisingOpportunity />;
    } else if (str === 'maintenance') {
      content = <PmmMaintenance />;
    } else {
      return null;
    }
    return content;
  }

  return (
    <View className="bg-white rounded p-1 mb-1">
      <Modal
        visible={imageModalVisible}
        transparent
        animationType="slide"
        hardwareAccelerated
        onRequestClose={() => setImageModalVisible(false)}>
        <View className="flex-1 justify-center items-center bg-gray-900/50">
          <View className="w-[450px] h-[400px] bg-white rounded-lg">
            <Image
              source={{uri: modalImageUrl}}
              resizeMode="contain"
              className="w-full h-full"
            />
          </View>
        </View>
      </Modal>
      <View className="flex-row justify-between">
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

        <View className="flex-row border-l-[1px] border-gray-500 pl-2 justify-end basis-1/3">
          <View>
            <View className="flex-row justify-end">
              <Pressable
                className="bg-yellow-500 rounded items-center justify-center py-[1px]"
                android_ripple={{color: '#ca8a04', borderless: false}}>
                <View className="flex-row w-full justify-center items-center">
                  <Text className="text-center text-white text-lg font-semibold">
                    মূল্যায়ন
                  </Text>
                </View>
              </Pressable>
              <TouchableHighlight
                onPress={() => console.log('press')}
                className="bg-gray-800 rounded p-1 ml-3 items-center justify-center">
                <Image
                  source={require('../assets/location-pin.png')}
                  resizeMode="contain"
                  className="w-[28px] h-[20px]"
                />
              </TouchableHighlight>
            </View>
            <View className="flex-row items-center my-1">
              <Text className="text-base font-semibold text-gray-700">
                তারিখ:{' '}
              </Text>
              <Text className="text-base text-gray-600">
                22-01-2022 10.20 AM
              </Text>
            </View>
            <View className="flex-wrap w-full flex-row gap-1 justify-end">
              <Pressable
                onPress={() => {
                  setModalImageUrl(
                    'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-26/MerchandisingOpportunity_POSM_CTG-24-20960_1_1_Jan-26-2023.png',
                  );
                  setImageModalVisible(true);
                }}>
                <Image
                  source={require('../assets/MerchandisingOpportunity-POSM-SYL-15-02968-1-1.png')}
                  className="w-[52px] h-[52px] rounded"
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalImageUrl(
                    'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-26/MerchandisingOpportunity_POSM_CTG-24-20960_1_1_Jan-26-2023.png',
                  );
                  setImageModalVisible(true);
                }}>
                <Image
                  source={require('../assets/MerchandisingOpportunity-POSM-SYL-15-02968-1-1.png')}
                  className="w-[52px] h-[52px] rounded"
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalImageUrl(
                    'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-26/MerchandisingOpportunity_POSM_CTG-24-20960_1_1_Jan-26-2023.png',
                  );
                  setImageModalVisible(true);
                }}>
                <Image
                  source={require('../assets/MerchandisingOpportunity-POSM-SYL-15-02968-1-1.png')}
                  className="w-[52px] h-[52px] rounded"
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalImageUrl(
                    'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-26/MerchandisingOpportunity_POSM_CTG-24-20960_1_1_Jan-26-2023.png',
                  );
                  setImageModalVisible(true);
                }}>
                <Image
                  source={require('../assets/MerchandisingOpportunity-POSM-SYL-15-02968-1-1.png')}
                  className="w-[52px] h-[52px] rounded"
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalImageUrl(
                    'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-26/MerchandisingOpportunity_POSM_CTG-24-20960_1_1_Jan-26-2023.png',
                  );
                  setImageModalVisible(true);
                }}>
                <Image
                  source={require('../assets/MerchandisingOpportunity-POSM-SYL-15-02968-1-1.png')}
                  className="w-[52px] h-[52px] rounded"
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalImageUrl(
                    'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-26/MerchandisingOpportunity_POSM_CTG-24-20960_1_1_Jan-26-2023.png',
                  );
                  setImageModalVisible(true);
                }}>
                <Image
                  source={require('../assets/MerchandisingOpportunity-POSM-SYL-15-02968-1-1.png')}
                  className="w-[52px] h-[52px] rounded"
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalImageUrl(
                    'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-26/MerchandisingOpportunity_POSM_CTG-24-20960_1_1_Jan-26-2023.png',
                  );
                  setImageModalVisible(true);
                }}>
                <Image
                  source={require('../assets/MerchandisingOpportunity-POSM-SYL-15-02968-1-1.png')}
                  className="w-[52px] h-[52px] rounded"
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row gap-1 mt-1">
        <Pressable
          onPress={() =>
            setExpandContent(prev => (prev === 'presence' ? '' : 'presence'))
          }
          className="bg-yellow-500 rounded items-center justify-center w-56"
          android_ripple={{color: '#ca8a04', borderless: false}}>
          <View className="flex-row w-full justify-center items-center">
            <Text className="text-center text-white text-lg font-semibold mr-2">
              মার্চেন্ডাইজিং এর উপস্থিতি
            </Text>
            {expandContent === 'presence' ? (
              <Image
                source={require('../assets/down-arrow-white.png')}
                className="w-[18px]"
                resizeMode="contain"
              />
            ) : null}
          </View>
        </Pressable>

        <Pressable
          onPress={() =>
            setExpandContent(prev =>
              prev === 'opportunity' ? '' : 'opportunity',
            )
          }
          className="bg-blue-500 rounded items-center justify-center w-56"
          android_ripple={{color: '#1e40af', borderless: false}}>
          <View className="flex-row w-full justify-center items-center">
            <Text className="text-center text-white text-lg font-semibold mr-2">
              মার্চেন্ডাইজিং এর সুযোগ
            </Text>
            {expandContent === 'opportunity' ? (
              <Image
                source={require('../assets/down-arrow-white.png')}
                className="w-[18px]"
                resizeMode="contain"
              />
            ) : null}
          </View>
        </Pressable>

        <Pressable
          onPress={() =>
            setExpandContent(prev =>
              prev === 'maintenance' ? '' : 'maintenance',
            )
          }
          className="bg-green-500 rounded items-center justify-center w-52"
          android_ripple={{color: '#065f46', borderless: false}}>
          <View className="flex-row w-full justify-center items-center">
            <Text className="text-center text-white text-lg font-semibold mr-2">
              পিএমএম মেইনটেনেন্স
            </Text>
            {expandContent === 'maintenance' ? (
              <Image
                source={require('../assets/down-arrow-white.png')}
                className="w-[18px]"
                resizeMode="contain"
              />
            ) : null}
          </View>
        </Pressable>
      </View>
      <View className="">
        {renderItem(expandContent)}
        {/* <MerchandisingPresence /> */}
        {/* <MerchandisingOpportunity /> */}
        {/* <PmmMaintenance /> */}
      </View>
    </View>
  );
};

export default SurveyItems;