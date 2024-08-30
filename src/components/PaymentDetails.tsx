import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/Variables';
import {responsiveSize} from '@/helpers';
import DefaultButtonCom from './DefaultButton';

type PaymentType = {
  buttonTitle: string;
  onPress: () => void;
};

const PaymentDetailsComp = ({buttonTitle, onPress}: PaymentType) => {
  return (
    <View style={[styles.root]}>
      <View style={[THEME.PADDING_H_MEDIUM, THEME.PADDING_V_MEDIUM]}>
        <View style={[THEME.Layout.rowJCenter]}>
          <Text style={[styles.subHeading, {color: THEME.COLORS.LIGHT_GREY}]}>
            Subtotal
          </Text>
          <Text
            style={[
              styles.subHeading,
              {color: THEME.COLORS.BLUE, fontWeight: '600'},
            ]}>
            $1280.00
          </Text>
        </View>
        <View style={[THEME.Layout.rowJCenter]}>
          <Text style={[styles.subHeading, {color: THEME.COLORS.LIGHT_GREY}]}>
            Shopping
          </Text>
          <View style={[THEME.MARGIN_V_MEDIUM]} />
          <Text
            style={[
              styles.subHeading,
              {color: THEME.COLORS.BLUE, fontWeight: '600'},
            ]}>
            $80.00
          </Text>
        </View>
        <View style={[THEME.MARGIN_V_MEDIUM, styles.line]} />
        <View style={[THEME.Layout.rowJCenter]}>
          <Text style={styles.subHeading}>Total Cost</Text>
          <Text style={styles.subHeading}>$1420.00</Text>
        </View>
        <DefaultButtonCom title={buttonTitle} onPress={onPress} />
      </View>
    </View>
  );
};

export default PaymentDetailsComp;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  subCtn: {
    backgroundColor: THEME.COLORS.WHITE,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  line: {
    height: 1,
    padding: 2,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.LIGHT_WHITE2,
  },
  subHeading: {
    fontSize: responsiveSize(16),
    fontWeight: '600',
    color: THEME.COLORS.BLUE,
  },
});
