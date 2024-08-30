import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextProps,
  TextInputProps,
} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/Variables';
import {responsiveSize} from '@/helpers';

interface FormInputProps {
  label: string;
  labelProps?: TextProps;
  inputProps: TextInputProps;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  labelProps,
  inputProps,
}) => {
  return (
    <View>
      <Text
        style={[styles.heading, {color: THEME.COLORS.BLUE}, labelProps?.style]}>
        {label}
      </Text>
      <TextInput
        placeholderTextColor={THEME.COLORS.BLACK}
        style={[styles.input, THEME.MARGIN_V_SMALL, inputProps?.style]}
        {...inputProps}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  heading: {
    fontSize: responsiveSize(16),
    fontWeight: '600',
    color: THEME.COLORS.LIGHT_GREY,
  },
  input: {
    backgroundColor: THEME.COLORS.WHITE,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 50,
    color: THEME.COLORS.BLUE,
    textTransform: 'lowercase',
  },
});
