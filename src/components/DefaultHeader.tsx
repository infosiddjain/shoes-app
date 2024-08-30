import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/Variables';
import {VectorIcons} from '@/themes';
import {responsiveSize} from '@/helpers';
import {useNavigation} from '@react-navigation/native';

type DefaultType = {
  heading?: string;
  subHeading?: string;
  rightIconName?: any;
  rightPress?: any;
  centerPress?: any;
  centerIcon?: any;
  leftPress?: any;
  leftIconName?: any;
  leftIconType?: any;
  rightIconType?: any;
};

const DefaultHeaderComp = ({
  heading,
  subHeading,
  rightIconName,
  rightPress,
  leftPress,
  centerIcon,
  centerPress,
  leftIconName,
  leftIconType,
  rightIconType,
}: DefaultType) => {
  const navigation = useNavigation();
  return (
    <View style={[THEME.Layout.rowJCenter]}>
      <View style={[THEME.Layout.alignCenter, styles.iconCtn]}>
        <VectorIcons
          onPress={leftPress ? leftPress : () => navigation.goBack()}
          name={leftIconName ? leftIconName : THEME.ICONS_NAME.dotsGrid}
          size={22}
          type={
            leftIconType
              ? leftIconType
              : THEME.ICONS_TYPE.MaterialCommunityIcons
          }
          color={THEME.COLORS.BLACK}
        />
      </View>
      <View style={[THEME.Layout.alignCenter]}>
        {heading && (
          <Text style={[styles.heading, {fontSize: responsiveSize(13)}]}>
            {heading}
          </Text>
        )}
        <View style={[THEME.Layout.rowACenter]}>
          {centerIcon && (
            <VectorIcons
              onPress={centerPress}
              name={centerIcon}
              size={16}
              color={THEME.COLORS.RED}
              type={THEME.ICONS_TYPE.MaterialCommunityIcons}
            />
          )}
          <Text style={[styles.heading, {fontWeight: '600'}]}>
            {subHeading}
          </Text>
        </View>
      </View>
      <View
        style={[
          THEME.Layout.alignCenter,
          styles.iconCtn,
          {backgroundColor: rightIconName ? THEME.COLORS.WHITE : 'transparent'},
        ]}>
        <VectorIcons
          name={rightIconName}
          size={22}
          type={
            rightIconType
              ? rightIconType
              : THEME.ICONS_TYPE.MaterialCommunityIcons
          }
          color={THEME.COLORS.BLACK}
          onPress={rightPress}
        />
      </View>
    </View>
  );
};

export default DefaultHeaderComp;

const styles = StyleSheet.create({
  heading: {
    fontSize: responsiveSize(16),
    fontWeight: '500',
    color: THEME.COLORS.LIGHT_GREY,
  },
  subHeading: {
    fontSize: responsiveSize(14),
    fontWeight: '500',
    color: THEME.COLORS.BLUE,
  },
  iconCtn: {
    backgroundColor: THEME.COLORS.WHITE,
    width: 40,
    height: 40,
    borderRadius: 99,
  },
});
