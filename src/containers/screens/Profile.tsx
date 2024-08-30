import {
  Image,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/Variables';
import {IMAGES} from '@/themes/images';
import {VectorIcons} from '@/themes';
import {Text} from 'react-native-paper';
import {responsiveSize} from '@/helpers';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    key: 'profile',
    name: 'Profile',
    icon: (
      <VectorIcons
        name={THEME.ICONS_NAME.accountOutline}
        size={25}
        color={THEME.COLORS.LIGHT_BLACK}
        type={THEME.ICONS_TYPE.MaterialCommunityIcons}
      />
    ),
    link: 'UserProfileScreen',
  },
  {
    key: 'home_page',
    name: 'Home Page',
    icon: (
      <VectorIcons
        name={THEME.ICONS_NAME.homeOutline}
        size={25}
        color={THEME.COLORS.LIGHT_BLACK}
        type={THEME.ICONS_TYPE.MaterialCommunityIcons}
      />
    ),
    link: 'HomeScreen',
  },
  {
    key: 'my_cart',
    name: 'My Cart',
    icon: (
      <VectorIcons
        name={THEME.ICONS_NAME.storefrontOutline}
        size={25}
        color={THEME.COLORS.LIGHT_BLACK}
        type={THEME.ICONS_TYPE.MaterialCommunityIcons}
      />
    ),
    link: 'MyCartScreen',
  },
  {
    key: 'favourite',
    name: 'Favourite',
    icon: (
      <VectorIcons
        name={THEME.ICONS_NAME.heartOutline}
        size={25}
        color={THEME.COLORS.LIGHT_BLACK}
        type={THEME.ICONS_TYPE.MaterialCommunityIcons}
      />
    ),
    link: 'FavouriteScreen',
  },
  {
    key: 'orders',
    name: 'Orders',
    icon: (
      <VectorIcons
        name={THEME.ICONS_NAME.storefrontOutline}
        size={25}
        color={THEME.COLORS.LIGHT_BLACK}
        type={THEME.ICONS_TYPE.MaterialCommunityIcons}
      />
    ),
    link: '',
  },
  {
    key: 'notification',
    name: 'Notification',
    icon: (
      <VectorIcons
        name={THEME.ICONS_NAME.bellOutline}
        size={25}
        color={THEME.COLORS.LIGHT_BLACK}
        type={THEME.ICONS_TYPE.MaterialCommunityIcons}
      />
    ),
    link: 'NotificationScreen',
  },
  {
    key: 'logout',
    name: 'Sign Out',
    icon: (
      <VectorIcons
        name={THEME.ICONS_NAME.logout}
        size={25}
        color={THEME.COLORS.LIGHT_BLACK}
        type={THEME.ICONS_TYPE.MaterialCommunityIcons}
      />
    ),
    link: 'LoginScreen',
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleClick = (item: any) => {
    navigation.navigate(item.link as never);
  };

  return (
    <View
      style={[THEME.Layout.fill, {backgroundColor: THEME.COLORS.DARK_BLUE}]}>
      <View style={[THEME.MARGIN_V_MEDIUM]}>
        <View style={[THEME.MARGIN_H_MEDIUM, THEME.MARGIN_V_MEDIUM]}>
          <Image source={IMAGES.default} style={styles.profileImg} />
          <View style={[THEME.MARGIN_V_MEDIUM]}>
            <Text
              style={[styles.subHeading, {color: THEME.COLORS.LIGHT_BLACK}]}>
              Hey,👋
            </Text>
            <Text style={[styles.heading, THEME.MARGIN_V_TINY]}>
              Alisson becker
            </Text>
          </View>
        </View>
        <View style={styles.fixedImg}>
          <View style={[THEME.MARGIN_V_MEDIUM]}>
            <Image source={IMAGES.profile} style={styles.fImg} />
          </View>
        </View>
        <View>
          {data.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleClick(item)}
              style={[
                THEME.Layout.rowACenter,
                THEME.MARGIN_H_MEDIUM,
                THEME.MARGIN_V_SMALL,
              ]}>
              <View style={[THEME.Layout.rowACenter]}>
                <View>{item.icon}</View>
                <Text
                  style={[
                    styles.subHeading,
                    {
                      fontSize: responsiveSize(13),
                      marginLeft: 20,
                    },
                  ]}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  heading: {
    color: THEME.COLORS.WHITE,
    fontSize: responsiveSize(16),
    fontWeight: '500',
  },
  subHeading: {
    color: THEME.COLORS.WHITE,
    fontSize: responsiveSize(18),
    fontWeight: '600',
  },
  fixedImg: {
    position: 'absolute',
    top: 0,
    left: responsiveSize(50),
  },
  fImg: {
    height: 650,
    resizeMode: 'contain',
  },
});
