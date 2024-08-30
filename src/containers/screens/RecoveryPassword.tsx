import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import * as THEME from '@/themes/Variables';
import {Text} from 'react-native-paper';
import {responsiveSize} from '@/helpers';
import HeaderComp from '@/components/Header';
import {DefaultButtonCom, FormInputCom} from '@/components';

const RecoveryScreen = () => {
  const [emailAddress, setEmailAddress] = useState('');
  return (
    <View style={[THEME.Layout.fill, styles.root]}>
      <View style={[THEME.MARGIN_V_MEDIUM, THEME.MARGIN_H_MEDIUM]}>
        <HeaderComp />
        <View style={[THEME.Layout.alignCenter, THEME.MARGIN_V_LARGE]}>
          <Text style={[THEME.TextStyle.heading]}>Recovery Password</Text>
          <Text
            style={[
              THEME.TextStyle.subHeading,
              THEME.MARGIN_V_SMALL,
              {textAlign: 'center', fontSize: responsiveSize(18)},
            ]}>
            Please Enter Your Email Address To Receive a Verification Code
          </Text>
        </View>
        <FormInputCom
          label="Email Address"
          inputProps={{
            placeholder: 'Enter your email-address',
            onChangeText: (text: any) => setEmailAddress(text),
            value: emailAddress,
          }}
        />
        <DefaultButtonCom title="Continue" onPress={() => {}} />
      </View>
    </View>
  );
};

export default RecoveryScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: THEME.COLORS.LIGHT_WHITE2,
  },
});
