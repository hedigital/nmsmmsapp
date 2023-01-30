/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CaretDown from './CaretDown';
import IconButton from './IconButton';

const imageNotAvailableURL =
  'https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png';

function OldDropdown({items, title, selected, setSelected, modal, ...rest}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setSelected(item.title);
          setModalVisible(!modalVisible);
        }}>
        <View
          className={`bg-blue-600/10 border border-gray-200 px-4 py-3 rounded-md flex-row justify-between items-center ${
            selected === item.title && 'bg-gray-500'
          } ${index !== 0 && 'mt-2'}`}>
          <Text className="text-lg text-gray-800 font-semibold">
            {item.title}
          </Text>
          {modal && item.imageURL && (
            <IconButton
              onPress={() => {
                setImageURL(item.imageURL);
                setImageModal(!imageModal);
              }}
              className="w-7 h-7"
              source={require('../assets/gallery.jpg')}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View {...rest}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View className="px-4 py-3 rounded-md flex-row items-center bg-blue-600/10 border border-gray-200">
          <Text
            className={`text-lg ${
              selected ? 'text-gray-800' : 'text-gray-600'
            } font-semibold`}>
            {(selected && selected) || title}
          </Text>
          <CaretDown className="ml-auto" />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View className="flex-1 bg-black/50 justify-center">
          <View className="m-4 p-8 bg-white rounded-md shadow-lg">
            <FlatList data={items} renderItem={renderItem} />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={imageModal}
        onRequestClose={() => {
          setImageModal(!imageModal);
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setImageModal(!imageModal);
          }}>
          <View className="flex-1 items-center justify-center bg-black/50">
            <View
              className={
                'm-4 p-8 bg-white rounded-md shadow-lg w-80 aspect-square'
              }>
              <Image
                className="w-full h-full rounded"
                resizeMode="contain"
                source={{
                  uri: imageURL || imageNotAvailableURL,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

export default OldDropdown;
