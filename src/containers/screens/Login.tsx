import {Alert, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {VectorIcons} from '@/themes';
import * as THEME from '@/themes/Variables';
import {Text} from 'react-native-paper';
import {
  emailRegex,
  responsiveSize,
  useCustomNavigation,
  validFields,
} from '@/helpers';
import HeaderComp from '@/components/Header';
import {DefaultButtonCom, FormInputCom} from '@/components';
import {useSelector} from 'react-redux';

const LoginScreen = () => {
  const navigation = useCustomNavigation();
  const store = useSelector((state: any) => state.auth.registerData);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  const [allFields, setAllFields] = useState(false);

  useEffect(() => {
    if (emailAddress && password) {
      setAllFields(true);
    } else {
      setAllFields(false);
    }
  }, [emailAddress, password]);

  const passwordShowHandler = () => {
    setPasswordShow(!passwordShow);
  };

  const fieldsValidator = [
    {name: 'email-address', value: emailAddress, regex: emailRegex},
    {
      name: 'password',
      value: password,
    },
  ];

  const handleSubmit = () => {
    if (
      validFields(fieldsValidator) &&
      store.email === emailAddress &&
      store.password === password
    ) {
      setEmailAddress('');
      setPassword('');
      navigation.navigate('BottomRoutes');
      Alert.alert('Login Successfully');
    } else {
      Alert.alert('Please verify your account details');
    }
  };

  return (
    <View style={[THEME.Layout.fill, styles.root]}>
      <View style={[THEME.MARGIN_V_MEDIUM, THEME.MARGIN_H_MEDIUM]}>
        <HeaderComp />
        <View style={[THEME.Layout.alignCenter, THEME.MARGIN_V_LARGE]}>
          <Text style={THEME.TextStyle.heading}>Hello Again!</Text>
          <Text style={[THEME.TextStyle.subHeading, THEME.MARGIN_V_SMALL]}>
            Welcome Back You’ve Been Missed!
          </Text>
        </View>
        <FormInputCom
          label="Email Address"
          inputProps={{
            placeholder: 'Enter your email-address',
            onChangeText: (text: string) => setEmailAddress(text),
            value: emailAddress,
          }}
        />
        <View>
          <FormInputCom
            label="Password"
            inputProps={{
              placeholder: 'Enter your password',
              secureTextEntry: passwordShow ? false : true,
              onChangeText: (text: any) => setPassword(text),
              value: password,
            }}
          />
          <Pressable onPress={passwordShowHandler} style={[styles.eyeBtn]}>
            <VectorIcons
              name={
                !passwordShow ? THEME.ICONS_NAME.eye : THEME.ICONS_NAME.eyeOff
              }
              size={20}
              color={THEME.COLORS.BLACK}
              type={THEME.ICONS_TYPE.MaterialCommunityIcons}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={() => navigation.navigate('RecoveryScreen' as never)}
          style={[THEME.Layout.flexAEnd, THEME.MARGIN_V_SMALL]}>
          <Text
            style={[
              THEME.TextStyle.subHeading,
              {color: THEME.COLORS.LIGHT_GREY, fontSize: responsiveSize(13)},
            ]}>
            Recovery Password
          </Text>
        </Pressable>
        <DefaultButtonCom
          button={{disabled: !allFields}}
          title="Sign in"
          onPress={handleSubmit}
          style={{
            backgroundColor: !allFields
              ? THEME.COLORS.CREAM
              : THEME.COLORS.LIGHT_BLUE,
          }}
          textStyle={{
            color: !allFields ? THEME.COLORS.BLUE : THEME.COLORS.WHITE,
          }}
        />
        <Pressable
          style={[
            styles.btn,
            THEME.Layout.alignCenter,
            THEME.MARGIN_V_MEDIUM,
            THEME.Layout.rowACenter,
            {backgroundColor: THEME.COLORS.WHITE},
          ]}>
          <VectorIcons
            color={THEME.COLORS.BLACK}
            name={THEME.ICONS_NAME.google}
            size={22}
          />
          <Text
            style={[
              THEME.TextStyle.subHeading,
              {color: THEME.COLORS.BLUE, fontSize: responsiveSize(16)},
            ]}>
            {' '}
            Sign in with google
          </Text>
        </Pressable>
      </View>
      <Pressable style={[THEME.Layout.rowCCenter, THEME.Layout.fill]}>
        <Text
          style={[
            THEME.TextStyle.subHeading,
            {color: THEME.COLORS.LIGHT_GREY, fontSize: responsiveSize(12)},
          ]}>
          Don’t have an account?
        </Text>
        <Text
          onPress={() => navigation.navigate('RegisterScreen' as never)}
          style={[
            THEME.TextStyle.subHeading,
            {color: THEME.COLORS.BLUE, fontSize: responsiveSize(12)},
          ]}>
          {' '}
          Sign Up for free
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: THEME.COLORS.LIGHT_WHITE2,
  },
  eyeBtn: {position: 'absolute', top: 50, right: 18},
  btn: {
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    borderRadius: 50,
    height: 50,
  },
});
