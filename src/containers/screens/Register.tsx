import {Alert, Pressable, ScrollView, StyleSheet, View} from 'react-native';
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
import {DefaultButtonCom, DropdownCom, FormInputCom} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {setRegisterData} from '@/redux/auth/authSlice';

const genderData = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Other', value: 'other'},
];

const RegisterScreen = () => {
  const navigation = useCustomNavigation();
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.auth.registerData);
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectGender, setSelectGender] = useState(null);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [allFields, setAllFields] = useState(false);

  useEffect(() => {
    if (
      fullName &&
      emailAddress &&
      password &&
      confirmPassword &&
      selectGender
    ) {
      setAllFields(true);
    } else {
      setAllFields(false);
    }
  }, [fullName, emailAddress, password, confirmPassword, selectGender]);

  const passwordShowHandler = () => {
    setPasswordShow(!passwordShow);
  };

  const confirmPasswordShowHandler = () => {
    setConfirmPasswordShow(!confirmPasswordShow);
  };

  const fieldsValidator = [
    {name: 'full-name', value: fullName},
    {name: 'email-address', value: emailAddress, regex: emailRegex},
    {name: 'password', value: password},
    {name: 'confirm-password', value: confirmPassword},
    {name: 'gender', value: selectGender},
  ];

  const input = {
    name: fullName,
    email: emailAddress,
    password: password,
    confirmPassword: confirmPassword,
    gender: selectGender,
  };

  const handleSubmit = () => {
    if (store?.email === emailAddress) {
      Alert.alert('Your email address is already exists');
    } else if (selectGender === '') {
      Alert.alert('Please select your gender');
    } else if (password !== confirmPassword) {
      Alert.alert('password or confirm password should be matched!');
    } else if (validFields(fieldsValidator)) {
      Alert.alert('successfully register');
      dispatch(setRegisterData(input));
      setFullName('');
      setEmailAddress('');
      setPassword('');
      setConfirmPassword('');
      setSelectGender(null);
      navigation.navigate('LoginScreen');
    } else {
      Alert.alert("Please fill all fields carefully it's sign up process");
    }
  };

  return (
    <View style={[THEME.Layout.fill, styles.root]}>
      <View style={[THEME.MARGIN_V_MEDIUM, THEME.MARGIN_H_MEDIUM, {flex: 2}]}>
        <HeaderComp />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[THEME.Layout.alignCenter, THEME.MARGIN_V_LARGE]}>
            <Text style={[THEME.TextStyle.heading]}>Create Account</Text>
            <Text style={[THEME.TextStyle.subHeading, THEME.MARGIN_V_SMALL]}>
              Let’s Create Account Together
            </Text>
          </View>
          <FormInputCom
            label="Full Name"
            inputProps={{
              placeholder: 'Enter your full-name',
              onChangeText: (text: any) => setFullName(text),
              value: fullName,
              maxLength: 30,
            }}
          />
          <DropdownCom
            data={genderData}
            label="Select your gender"
            placeholder="Select your gender"
            value={selectGender}
            setValue={setSelectGender}
          />
          <FormInputCom
            label="Email Address"
            inputProps={{
              placeholder: 'Enter your email-address',
              onChangeText: (text: any) => setEmailAddress(text),
              value: emailAddress,
              maxLength: 45,
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
                maxLength: 30,
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
          <View>
            <FormInputCom
              label="Confirm password"
              inputProps={{
                placeholder: 'Enter your confirm password',
                secureTextEntry: confirmPasswordShow ? false : true,
                onChangeText: (text: any) => setConfirmPassword(text),
                value: confirmPassword,
                maxLength: 30,
              }}
            />
            <Pressable
              onPress={confirmPasswordShowHandler}
              style={[styles.eyeBtn]}>
              <VectorIcons
                name={
                  !confirmPasswordShow
                    ? THEME.ICONS_NAME.eye
                    : THEME.ICONS_NAME.eyeOff
                }
                size={20}
                color={THEME.COLORS.BLACK}
                type={THEME.ICONS_TYPE.MaterialCommunityIcons}
              />
            </Pressable>
          </View>
          <DefaultButtonCom
            button={{
              disabled: !allFields,
            }}
            style={{
              backgroundColor: !allFields
                ? THEME.COLORS.CREAM
                : THEME.COLORS.LIGHT_BLUE,
            }}
            textStyle={{
              color: !allFields ? THEME.COLORS.BLUE : THEME.COLORS.WHITE,
            }}
            title="Sign up"
            onPress={handleSubmit}
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
          <Pressable style={[THEME.Layout.rowCCenter]}>
            <Text
              style={[
                THEME.TextStyle.subHeading,
                {color: THEME.COLORS.LIGHT_GREY, fontSize: responsiveSize(12)},
              ]}>
              Already have an account?
            </Text>
            <Text
              onPress={() => navigation.navigate('LoginScreen' as never)}
              style={[
                THEME.TextStyle.subHeading,
                {color: THEME.COLORS.BLUE, fontSize: responsiveSize(12)},
              ]}>
              {' '}
              Sign in
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: THEME.COLORS.LIGHT_WHITE2,
  },
  eyeBtn: {
    position: 'absolute',
    top: 50,
    right: 18,
  },
  btn: {
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    borderRadius: 50,
    height: 50,
  },
});
