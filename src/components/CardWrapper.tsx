import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS} from '@/themes/Variables';
import {responsiveSize} from '@/helpers';

type CardWrapper = {
  children: ReactNode;
};

const CardWrapperComp = ({children}: CardWrapper) => {
  return <View style={styles.Card}>{children}</View>;
};

export default CardWrapperComp;

const styles = StyleSheet.create({
  Card: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    width: responsiveSize(140),
    borderRadius: 16,
    marginRight: 20,
  },
});
