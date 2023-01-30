/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import pmmData from './MerchandisingPresencePmm.json';
import posmData from './MerchandisingPresencePosm.json';
import DropDown from '../components/DropDown';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import OldDropdown from '../components/OldDropdown';
import useStateCallback from '../hooks/useStateCallback';
import useUploadImage from '../hooks/useUploadImage';
import {useNavigation, useRoute} from '@react-navigation/native';

const Edit = () => {
  const [pmmNameDropdownOpen, setPmmNameDropdownOpen] = useState(false);
  const [pmmNameValue, setPmmNameValue] = useState([
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
  ]);

  const [pmmName, setPmmName] = useState({label: 'B', value: 'B'});

  const [pmm, setPMM] = useState([
    {
      pmmOwner: 'BATB',
      pmmName: 'In store',
      pmmType: 'Silverline Instore',
      imageURLs: [
        {
          name: 'MerchandisingPresence_PMM_BATB_RAJ-32-06902_1_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_PMM_BATB_RAJ-32-06902_1_Jan-22-2023.png',
          _id: '63cc9ae23faea6d9262862d5',
        },
        {
          name: 'MerchandisingPresence_PMM_BATB_RAJ-32-06902_Blanks_1_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_PMM_BATB_RAJ-32-06902_Blanks_1_Jan-22-2023.png',
          _id: '63cc9ae23faea6d9262862d6',
        },
      ],
      _id: '63cc9ae23faea6d9262862d4',
    },
    {
      pmmOwner: 'VBP SPONSOR',
      pmmName: 'Street Kiosk',
      pmmType: 'VBP Sponsor Street Kiosk',
      rowAndColumn: {
        Row: '2',
        Column: '10',
      },
      haveRailing: 'No',
      imageURLs: [
        {
          name: 'MerchandisingPresence_PMM_VBP SPONSOR_CTG-20-11270_1_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_PMM_VBP SPONSOR_CTG-20-11270_1_Jan-22-2023.png',
          _id: '63ccb7693faea6d92628f534',
        },
        {
          name: 'MerchandisingPresence_PMM_VBP SPONSOR_CTG-20-11270_Blanks_1_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_PMM_VBP SPONSOR_CTG-20-11270_Blanks_1_Jan-22-2023.png',
          _id: '63ccb7693faea6d92628f535',
        },
      ],
      _id: '63ccb7693faea6d92628f535',
    },
  ]);

  const [posm, setPOSM] = useState([
    {
      posmOwner: 'BATB',
      posmType: 'Table Top',
      imageURLs: [
        {
          name: 'MerchandisingPresence_POSM_BATB_SYL-09-03413_1_1_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_POSM_BATB_SYL-09-03413_1_1_Jan-22-2023.png',
          _id: '63cce5e33faea6d9262cf319',
        },
      ],
      _id: '63cce5e33faea6d9262cf318',
    },
    {
      posmOwner: 'BATB',
      posmType: 'Modular',
      imageURLs: [
        {
          name: 'MerchandisingPresence_POSM_BATB_SYL-09-03413_1_2_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_POSM_BATB_SYL-09-03413_1_2_Jan-22-2023.png',
          _id: '63cce5e33faea6d9262cf31b',
        },
      ],
      _id: '63cce5e33faea6d9262cf31a',
    },
    {
      posmOwner: 'BATB',
      posmType: 'AFU',
      imageURLs: [
        {
          name: 'MerchandisingPresence_POSM_BATB_SYL-09-03413_1_3_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_POSM_BATB_SYL-09-03413_1_3_Jan-22-2023.png',
          _id: '63cce5e33faea6d9262cf31d',
        },
      ],
      _id: '63cce5e33faea6d9262cf31c',
    },
    {
      posmOwner: 'BATB',
      posmType: 'Surface Hanger',
      imageURLs: [
        {
          name: 'MerchandisingPresence_POSM_BATB_SYL-09-03413_1_4_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_POSM_BATB_SYL-09-03413_1_4_Jan-22-2023.png',
          _id: '63cce5e33faea6d9262cf31f',
        },
      ],
      _id: '63cce5e33faea6d9262cf31e',
    },
    {
      posmOwner: 'BATB',
      posmType: 'Table Top',
      imageURLs: [
        {
          name: 'MerchandisingPresence_POSM_BATB_SYL-09-03413_5_1_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_POSM_BATB_SYL-09-03413_5_1_Jan-22-2023.png',
          _id: '63cce5e33faea6d9262cf321',
        },
      ],
      _id: '63cce5e33faea6d9262cf320',
    },
    {
      posmOwner: 'BATB',
      posmType: 'Modular',
      imageURLs: [
        {
          name: 'MerchandisingPresence_POSM_BATB_SYL-09-03413_5_2_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_POSM_BATB_SYL-09-03413_5_2_Jan-22-2023.png',
          _id: '63cce5e33faea6d9262cf323',
        },
      ],
      _id: '63cce5e33faea6d9262cf322',
    },
    {
      posmOwner: 'BATB',
      posmType: 'AFU',
      imageURLs: [
        {
          name: 'MerchandisingPresence_POSM_BATB_SYL-09-03413_5_3_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_POSM_BATB_SYL-09-03413_5_3_Jan-22-2023.png',
          _id: '63cce5e33faea6d9262cf325',
        },
      ],
      _id: '63cce5e33faea6d9262cf324',
    },
    {
      posmOwner: 'BATB',
      posmType: 'Lighter Standee',
      imageURLs: [
        {
          name: 'MerchandisingPresence_POSM_BATB_SYL-09-03413_5_4_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_POSM_BATB_SYL-09-03413_5_4_Jan-22-2023.png',
          _id: '63cce5e33faea6d9262cf327',
        },
      ],
      _id: '63cce5e33faea6d9262cf326',
    },
  ]);

  const [planogram, setPlanogram] = useState([
    {
      planogramOwner: 'BATB',
      rowAndColumn: {
        Row: '2',
        Column: '10',
      },
      imageURLs: [
        {
          name: 'MerchandisingPresence_Planogram_BATB_SYL-09-26296_1_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_Planogram_BATB_SYL-09-26296_1_Jan-22-2023.png',
          _id: '63ccc5973faea6d92629ffb0',
        },
      ],
      _id: '63ccc5973faea6d92629ffaf',
    },
    {
      planogramOwner: 'BATB',
      rowAndColumn: {
        Row: '2',
        Column: '10',
      },
      imageURLs: [
        {
          name: 'MerchandisingPresence_Planogram_BATB_SYL-09-26296_2_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_Planogram_BATB_SYL-09-26296_1_Jan-22-2023.png',
          _id: '63ccc5973faea6d92629ffb2',
        },
      ],
      _id: '63ccc5973faea6d92629ffb1',
    },
    {
      planogramOwner: 'BATB',
      rowAndColumn: {
        Row: '2',
        Column: '10',
      },
      imageURLs: [
        {
          name: 'MerchandisingPresence_Planogram_BATB_SYL-09-26296_3_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_Planogram_BATB_SYL-09-26296_3_Jan-22-2023.png',
          _id: '63ccc5973faea6d92629ffb4',
        },
      ],
      _id: '63ccc5973faea6d92629ffb3',
    },
    {
      planogramOwner: 'BATB',
      rowAndColumn: {
        Row: '2',
        Column: '10',
      },
      imageURLs: [
        {
          name: 'MerchandisingPresence_Planogram_BATB_SYL-09-26296_4_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_Planogram_BATB_SYL-09-26296_3_Jan-22-2023.png',
          _id: '63ccc5973faea6d92629ffb6',
        },
      ],
      _id: '63ccc5973faea6d92629ffb5',
    },
    {
      planogramOwner: 'BATB',
      rowAndColumn: {
        Row: '2',
        Column: '10',
      },
      imageURLs: [
        {
          name: 'MerchandisingPresence_Planogram_BATB_SYL-09-26296_5_Jan-22-2023',
          url: 'https://hedigital.sgp1.digitaloceanspaces.com/national-survey/images/2023-01-22/MerchandisingPresence_Planogram_BATB_SYL-09-26296_5_Jan-22-2023.png',
          _id: '63ccc5973faea6d92629ffb8',
        },
      ],
      _id: '63ccc5973faea6d92629ffb7',
    },
  ]);

  const navigation = useNavigation();

  const {name, params} = useRoute();

  const [convertingImage, setConvertingImage] = useState(false);

  const [uploadImage, setUploadImage] = useStateCallback({
    type: '',
    currentIndex: 0,
    imageIndex: 0,
    name: '',
  });

  const [imageURL, isLoading] = useUploadImage(
    (params && params.uri) || '',
    uploadImage.name,
    () => {
      Alert.alert(
        'Alert',
        'Uploading the image to the server failed, please try again.',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => navigation.setParams({uri: ''}),
          },
        ],
      );
    },
  );

  useEffect(() => {
    if (uploadImage.type && imageURL) {
      if (uploadImage.type === 'pmm') {
        setPMM(prev => {
          const prevParsed = JSON.parse(JSON.stringify(prev));
          const image =
            prevParsed[uploadImage.currentIndex]['imageURLs'][
              uploadImage.imageIndex
            ];

          image.name = uploadImage.name;
          image.url = imageURL;
        });
      } else if (uploadImage.type === 'posm') {
        setPOSM(prev => {
          const prevParsed = JSON.parse(JSON.stringify(prev));
          const image =
            prevParsed[uploadImage.currentIndex]['imageURLs'][
              uploadImage.imageIndex
            ];

          image.name = uploadImage.name;
          image.url = imageURL;
        });
      } else if (uploadImage.type === 'planogram') {
        setPlanogram(prev => {
          const prevParsed = JSON.parse(JSON.stringify(prev));
          const image =
            prevParsed[uploadImage.currentIndex]['imageURLs'][
              uploadImage.imageIndex
            ];

          image.name = uploadImage.name;
          image.url = imageURL;
        });
      }
    }
  }, [uploadImage, imageURL]);

  useEffect(() => {
    (async function () {
      if (params?.path) {
        setConvertingImage(true);
        const {uri} = await ImageResizer.createResizedImage(
          params.path,
          960,
          1280,
          'JPEG',
          80,
          0,
        );
        setConvertingImage(false);
        const URI = await readFile(uri, 'base64');
        setUploadImage(
          uploadImage => ({...uploadImage, [uploadImage.currentIndex]: URI}),
          () => {
            navigation.setParams({
              uri: URI,
              path: '',
            });
          },
        );
      }
    })();
  }, [params]);

  const onCamera = (type, currentIndex, imageIndex) => {
    navigation.setParams({
      uri: '',
      path: '',
    });

    let currentImageName = pmm[currentIndex]['imageURLs'][imageIndex].name;
    currentImageName = currentImageName
      .split('_')
      .slice(0, -1)
      .concat(new Date().toDateString().split(' ').slice(1).join('-'))
      .join('_');

    setUploadImage(
      {...uploadImage, type, currentIndex, imageIndex, name: currentImageName},
      () => {
        navigation.navigate({
          name: 'Camera',
          params: {goBackRouteName: name},
          merge: true,
        });
      },
    );
  };

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
            {pmm.map((o, i) => {
              return (
                <View
                  className="flex-row border justify-between border-gray-200 bg-white rounded p-2"
                  key={o._id}>
                  <View className="space-y-1">
                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        পিএমএম: {i}
                      </Text>
                      <Text className="text-base text-gray-600">1</Text>
                    </View>

                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        পিএমএম ওনার: {o.pmmOwner}
                      </Text>
                      <Text className="text-base text-gray-600">BATB</Text>
                    </View>

                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        পিএমএম নাম: {o.pmmName}
                      </Text>
                      {/* pmm name dropdown here start */}
                      <OldDropdown
                        items={Object.keys(pmmData[o.pmmOwner]).map(
                          (title, id) => ({id, title}),
                        )}
                        selected={o.pmmName}
                        setSelected={pmmName => {
                          setPMM(prev => {
                            const prevParsed = JSON.parse(JSON.stringify(prev));
                            prevParsed[i]['pmmName'] = pmmName;
                            return prevParsed;
                          });
                        }}
                      />
                      {/* pmm name dropdown here end */}
                    </View>

                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        পিএমএম ধরন: {o.pmmType}
                      </Text>
                      {/* pmm type dropdown here start */}
                      <OldDropdown
                        items={pmmData[o.pmmOwner][o.pmmName].map((o, id) => ({
                          ...o,
                          id,
                        }))}
                        selected={o.pmmType}
                        setSelected={pmmType => {
                          setPMM(prev => {
                            const prevParsed = JSON.parse(JSON.stringify(prev));
                            prevParsed[i]['pmmType'] = pmmType;
                            return prevParsed;
                          });
                        }}
                      />
                      {/* pmm type dropdown here end */}
                    </View>

                    {o.pmmOwner === 'VBP SPONSOR' && (
                      <>
                        <View className="flex-row items-center">
                          <Text className="text-base font-semibold text-gray-700">
                            রো:{' '}
                          </Text>
                          {/* pmm row input field here start */}
                          <TextInput
                            value={o.rowAndColumn.Row}
                            onChangeText={text => {
                              setPMM(prev => {
                                const prevParsed = JSON.parse(
                                  JSON.stringify(prev),
                                );
                                prevParsed[i]['rowAndColumn']['Row'] = text;
                                prevParsed;
                              });
                            }}
                          />
                          {/* pmm row input field here start */}
                        </View>

                        <View className="flex-row items-center">
                          <Text className="text-base font-semibold text-gray-700">
                            কলাম:{' '}
                          </Text>
                          {/* pmm column input field here start */}
                          <TextInput
                            value={o.rowAndColumn.Column}
                            onChangeText={text => {
                              setPMM(prev => {
                                const prevParsed = JSON.parse(
                                  JSON.stringify(prev),
                                );
                                prevParsed[i]['rowAndColumn']['Column'] = text;
                                prevParsed;
                              });
                            }}
                          />
                          {/* pmm column input field here start */}
                        </View>
                      </>
                    )}
                  </View>

                  {/* pmm image and close section start */}
                  <View className="items-end space-y-1">
                    <Pressable
                      onPress={() => {
                        setPMM(prev => {
                          return [...prev.slice(0, i), ...prev.slice(i + 1)];
                        });
                      }}
                      className="w-8 h-8 rounded-full items-center justify-center bg-gray-600">
                      <Text className="text-white font-bold text-xl">X</Text>
                    </Pressable>
                    {o.imageURLs.map((o, index) => {
                      return (
                        <Pressable
                          disabled={convertingImage || isLoading}
                          onPress={() => onCamera('pmm', i, index)}
                          key={o._id}>
                          <Image
                            resizeMode="contain"
                            className="w-12 h-12 rounded"
                            source={{
                              uri: o.url,
                            }}
                          />
                        </Pressable>
                      );
                    })}
                  </View>
                  {/* pmm image and close section end */}
                </View>
              );
            })}
            {/* pmm 1 */}

            {/* pmm 2 */}
          </View>
          {/* pmm edit section end */}

          {/* posm edit section start */}
          <View className="basis-1/3">
            {posm.map((o, i) => {
              return (
                <View
                  className="flex-row border justify-between border-gray-200 bg-white rounded p-2"
                  key={o._id}>
                  <View className="space-y-1">
                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        পিওএসএম: {i}
                      </Text>
                      <Text className="text-base text-gray-600">1</Text>
                    </View>

                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        পিওএসএম ওনার: {o.posmOwner}
                      </Text>
                      <Text className="text-base text-gray-600">BATB</Text>
                    </View>

                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        পিওএসএম ধরন: {o.posmType}
                      </Text>
                      {/* pmm type dropdown here start */}
                      <OldDropdown
                        items={posmData[o.posmOwner].map((o, id) => ({
                          ...o,
                          id,
                        }))}
                        selected={o.posmType}
                        setSelected={posmType => {
                          setPOSM(prev => {
                            const prevParsed = JSON.parse(JSON.stringify(prev));
                            prevParsed[i]['posmType'] = posmType;
                            return prevParsed;
                          });
                        }}
                      />
                      {/* pmm type dropdown here end */}
                    </View>
                  </View>

                  {/* pmm image and close section start */}
                  <View className="items-end space-y-1">
                    <Pressable
                      onPress={() => {
                        setPOSM(prev => {
                          return [...prev.slice(0, i), ...prev.slice(i + 1)];
                        });
                      }}
                      className="w-8 h-8 rounded-full items-center justify-center bg-gray-600">
                      <Text className="text-white font-bold text-xl">X</Text>
                    </Pressable>
                    {o.imageURLs.map((o, index) => {
                      return (
                        <Pressable
                          disabled={convertingImage || isLoading}
                          onPress={() => onCamera('posm', i, index)}
                          key={o._id}>
                          <Image
                            resizeMode="contain"
                            className="w-12 h-12 rounded"
                            source={{
                              uri: o.url,
                            }}
                          />
                        </Pressable>
                      );
                    })}
                  </View>
                  {/* pmm image and close section end */}
                </View>
              );
            })}
            {/* pmm 1 */}

            {/* pmm 2 */}
          </View>
          {/* posm edit section end */}

          {/* planogram edit section start */}
          <View className="basis-1/3">
            {planogram.map((o, i) => {
              return (
                <View
                  className="flex-row border justify-between border-gray-200 bg-white rounded p-2"
                  key={o._id}>
                  <View className="space-y-1">
                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        প্লানোগ্রাম: {i}
                      </Text>
                      <Text className="text-base text-gray-600">1</Text>
                    </View>

                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        প্লানোগ্রাম ওনার: {o.planogramOwner}
                      </Text>
                      <Text className="text-base text-gray-600">BATB</Text>
                    </View>

                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        রো:{' '}
                      </Text>
                      {/* pmm row input field here start */}
                      <TextInput
                        value={o.rowAndColumn.Row}
                        onChangeText={text => {
                          setPlanogram(prev => {
                            const prevParsed = JSON.parse(JSON.stringify(prev));
                            prevParsed[i]['rowAndColumn']['Row'] = text;
                            prevParsed;
                          });
                        }}
                      />
                      {/* pmm row input field here start */}
                    </View>

                    <View className="flex-row items-center">
                      <Text className="text-base font-semibold text-gray-700">
                        কলাম:{' '}
                      </Text>
                      {/* pmm column input field here start */}
                      <TextInput
                        value={o.rowAndColumn.Column}
                        onChangeText={text => {
                          setPlanogram(prev => {
                            const prevParsed = JSON.parse(JSON.stringify(prev));
                            prevParsed[i]['rowAndColumn']['Column'] = text;
                            prevParsed;
                          });
                        }}
                      />
                      {/* pmm column input field here start */}
                    </View>
                  </View>

                  {/* pmm image and close section start */}
                  <View className="items-end space-y-1">
                    <Pressable
                      onPress={() => {
                        setPlanogram(prev => {
                          return [...prev.slice(0, i), ...prev.slice(i + 1)];
                        });
                      }}
                      className="w-8 h-8 rounded-full items-center justify-center bg-gray-600">
                      <Text className="text-white font-bold text-xl">X</Text>
                    </Pressable>
                    {o.imageURLs.map((o, index) => {
                      return (
                        <Pressable
                          disabled={convertingImage || isLoading}
                          onPress={() => onCamera('planogram', i, index)}
                          key={o._id}>
                          <Image
                            resizeMode="contain"
                            className="w-12 h-12 rounded"
                            source={{
                              uri: o.url,
                            }}
                          />
                        </Pressable>
                      );
                    })}
                  </View>
                  {/* pmm image and close section end */}
                </View>
              );
            })}
            {/* pmm 1 */}

            {/* pmm 2 */}
          </View>
          {/* planogram edit section end */}
        </View>
      </ScrollView>
      {/* edit content end */}
    </View>
  );
};

export default Edit;
