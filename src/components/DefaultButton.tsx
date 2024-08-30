import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/Variables';
import {responsiveSize} from '@/helpers';
import {Text} from 'react-native-paper';

type button = {
  onPress: () => void;
  title: string;
  button?: any;
  style?: any;
  textStyle?: any;
};

const DefaultButtonCom = ({
  onPress,
  title,
  button,
  style,
  textStyle,
}: button) => {
  return (
    <Pressable
      onPress={onPress}
      {...button}
      style={[
        THEME.Layout.alignCenter,
        THEME.MARGIN_V_MEDIUM,
        styles.btn,
        style,
      ]}>
      <Text style={[styles.subHeading, {color: THEME.COLORS.WHITE}, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default DefaultButtonCom;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    borderRadius: 50,
    height: 50,
  },
  subHeading: {
    fontSize: responsiveSize(16),
    fontWeight: '600',
    color: THEME.COLORS.BLUE,
  },
});
