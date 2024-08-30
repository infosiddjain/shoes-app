import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {DefaultHeaderCom} from '@/components';
import * as THEME from '@/themes/Variables';
import {IMAGES} from '@/themes/images';
import {VectorIcons} from '@/themes';
import {Text} from 'react-native-paper';
import {responsiveSize} from '@/helpers';

const UserProfileScreen = () => {
  return (
    <View
      style={[THEME.Layout.fill, {backgroundColor: THEME.COLORS.LIGHT_WHITE2}]}>
      <View style={[THEME.MARGIN_H_MEDIUM, THEME.MARGIN_V_MEDIUM]}>
        <DefaultHeaderCom
          leftIconName={THEME.ICONS_NAME.arrowLeft}
          leftIconType={THEME.ICONS_TYPE.AntDesign}
          rightIconName={THEME.ICONS_NAME.edit}
          rightIconType={THEME.ICONS_TYPE.AntDesign}
          subHeading="Profile"
        />
        <View style={[THEME.MARGIN_V_MEDIUM]}>
          <View style={[THEME.Layout.alignCenter]}>
            <Image
              source={IMAGES.default}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
            <View
              style={[
                THEME.Layout.alignCenter,
                {
                  backgroundColor: THEME.COLORS.LIGHT_BLUE,
                  width: 25,
                  height: 25,
                  borderRadius: 99,
                  bottom: 15,
                },
              ]}>
              <VectorIcons
                name={THEME.ICONS_NAME.camera}
                color={THEME.COLORS.WHITE}
                size={15}
              />
            </View>
            <Text style={[styles.heading]}>Alisson becker</Text>
          </View>
          <View style={[THEME.MARGIN_V_MEDIUM]}>
            <View>
              <Text style={[styles.subHeading, {color: THEME.COLORS.BLUE}]}>
                Full Name
              </Text>
              <TextInput
                placeholder="Alisson becker"
                placeholderTextColor={THEME.COLORS.BLACK}
                style={[styles.input, THEME.MARGIN_V_SMALL]}
                readOnly
              />
            </View>
            <View>
              <Text style={[styles.subHeading, {color: THEME.COLORS.BLUE}]}>
                Email Address
              </Text>
              <TextInput
                placeholder="AlossonBecker@gmail.com"
                placeholderTextColor={THEME.COLORS.BLACK}
                style={[styles.input, THEME.MARGIN_V_SMALL]}
                readOnly
              />
            </View>
            <View>
              <Text style={[styles.subHeading, {color: THEME.COLORS.BLUE}]}>
                Gender
              </Text>
              <TextInput
                placeholder="Male"
                placeholderTextColor={THEME.COLORS.BLACK}
                style={[styles.input, THEME.MARGIN_V_SMALL]}
                readOnly
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: responsiveSize(18),
    fontWeight: '600',
    color: THEME.COLORS.BLUE,
  },
  subHeading: {
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
  },
});
