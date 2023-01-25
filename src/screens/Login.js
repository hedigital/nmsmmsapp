/* eslint-disable prettier/prettier */
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Login = () => {
  return (
    <View className="flex-1 bg-yellow-500">
      <ScrollView contentContainerStyle="grow" className="">
        <View className="flex-1 mt-16 justify-center items-center bg-yellow-500">
          <View className="w-[40%] bg-white h-[400px] rounded-lg">
            <View className="mx-auto mt-3">
              <Image
                className="w-[120px] h-32"
                resizeMode="contain"
                source={require('../assets/logo.jpg')}
              />
            </View>
            <View className="mx-auto w-[80%] space-y-4 mt-8">
              <TextInput
                className="w-full px-4 rounded-md bg-sky-400/10 border border-gray-300 placeholder:text-xl placeholder:font-semibold"
                //   onChangeText={text => {
                //     setUsername(text);
                //     if (isIncorrect || error) {
                //       setIsIncorrect(false);
                //       setError(false);
                //     }
                //   }}
                //   value={username}
                placeholder="ইউজার নেম"
                placeholderTextColor={'#00000080'}
              />
              <TextInput
                className="w-full px-4 rounded-md border border-gray-300 bg-sky-400/10 placeholder:text-xl placeholder:font-semibold"
                //   onChangeText={text => {
                //     setPassword(text);
                //     if (isIncorrect || error) {
                //       setIsIncorrect(false);
                //       setError(false);
                //     }
                //   }}
                //   value={password}
                placeholder="পাসওয়ার্ড"
                placeholderTextColor={'#00000080'}
              />
            </View>
            <View className="mt-8">
              <TouchableOpacity className="mx-auto">
                <Text className="text-xl text-center text-white font-semibold bg-sky-300 p-2 w-[150px] rounded">
                  লগ ইন
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
