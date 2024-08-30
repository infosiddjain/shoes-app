import {useNavigation} from '@react-navigation/native';
import {Alert, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const baseWidth = 375;

export const responsiveSize = (baseFontSize: number) => {
  return (baseFontSize * screenWidth) / baseWidth;
};

export const useCustomNavigation = () => {
  const navigation = useNavigation();
  const navigate = (path?: any, data?: any) => {
    navigation.navigate(path, {data});
  };
  return {navigate};
};

export let emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const validFields = (fields: any) => {
  for (const field of fields) {
    if (field.value.trim() === '') {
      Alert.alert(`Enter your ${field.name}`);
      return false;
    } else if (field.regex && !field.regex.test(field.value)) {
      Alert.alert(`Enter a valid ${field.name}`);
      return false;
    }
  }
  return true;
};
