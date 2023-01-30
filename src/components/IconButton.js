import {Image, TouchableWithoutFeedback} from 'react-native';

const IconButton = ({onPress, disabled, ...rest}) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <Image {...rest} />
    </TouchableWithoutFeedback>
  );
};

export default IconButton;
