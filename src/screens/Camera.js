import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

function Camera({navigation, route}) {
  const [{cameraRef}, {takePicture}] = useCamera({
    type: RNCamera.Constants.Type.back,
  });
  const [isLoading, setIsLoading] = useState(false);
  const takePictureAsync = async () => {
    try {
      setIsLoading(true);
      const {uri} = await takePicture({
        orientation: RNCamera.Constants.Orientation.portrait,
      });
      setIsLoading(false);
      navigation.navigate({
        name: route.params.goBackRouteName,
        params: {path: uri},
        merge: true,
      });
    } catch (error) {}
  };
  return (
    <View className="flex-1">
      <RNCamera ref={cameraRef} className="flex-1 justify-end">
        <View className="flex-row justify-center bg-black py-8">
          <TouchableOpacity disabled={isLoading} onPress={takePictureAsync}>
            <View
              className={`border-4 ${
                isLoading ? 'border-gray-300' : 'border-white'
              } w-20 h-20 rounded-full`}>
              <View
                className={`w-12 h-12 ${
                  isLoading ? 'bg-gray-300' : 'bg-white'
                } rounded-full m-auto`}
              />
            </View>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
}

export default Camera;
