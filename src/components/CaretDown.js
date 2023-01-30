import React from 'react';
import {View} from 'react-native';

function CaretDown({...rest}) {
  return (
    <View
      {...rest}
      className="w-4 h-4 border-t-[16px] border-l-8 border-r-8 border-t-sky-400 shadow-md border-l-transparent border-r-transparent"
    />
  );
}

export default CaretDown;
