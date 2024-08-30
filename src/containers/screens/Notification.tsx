import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {DefaultHeaderCom} from '@/components';
import * as THEME from '@/themes/Variables';
import {IMAGES} from '@/themes/images';
import {Text} from 'react-native-paper';
import {responsiveSize} from '@/helpers';
import {VectorIcons} from '@/themes';

const NotificationScreen = () => {
  return (
    <View
      style={[THEME.Layout.fill, {backgroundColor: THEME.COLORS.LIGHT_WHITE2}]}>
      <View style={[THEME.MARGIN_H_MEDIUM, THEME.MARGIN_V_MEDIUM]}>
        <DefaultHeaderCom
          leftIconName={THEME.ICONS_NAME.arrowLeft}
          leftIconType={THEME.ICONS_TYPE.AntDesign}
          subHeading="Notification"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[THEME.Layout.rowJCenter, THEME.MARGIN_V_MEDIUM]}>
            <View style={[THEME.Layout.rowACenter]}>
              <View style={[THEME.Layout.alignCenter, styles.card]}>
                <Image source={IMAGES.shoes5} style={styles.image} />
              </View>
              <View style={[THEME.MARGIN_H_MEDIUM]}>
                <Text
                  style={[
                    styles.heading,
                    {width: responsiveSize(140), fontSize: responsiveSize(13)},
                  ]}>
                  We Have New Products With Offers
                </Text>
                <View style={[THEME.Layout.rowACenter]}>
                  <Text
                    style={[
                      THEME.MARGIN_V_TINY,
                      styles.subHeading,
                      {
                        fontSize: responsiveSize(13),
                        textDecorationLine: 'line-through',
                      },
                    ]}>
                    $564.00{' '}
                  </Text>
                  <Text
                    style={[
                      THEME.MARGIN_V_TINY,
                      styles.subHeading,
                      {
                        fontSize: responsiveSize(13),
                        color: THEME.COLORS.LIGHT_BLACK,
                      },
                    ]}>
                    $564.00
                  </Text>
                </View>
              </View>
            </View>
            <View style={[{}]}>
              <Text
                style={[
                  styles.subHeading,
                  {
                    color: THEME.COLORS.LIGHT_BLACK,
                    fontSize: responsiveSize(13),
                  },
                ]}>
                6 min ago
              </Text>
              <View style={[THEME.Layout.flexAEnd, THEME.PADDING_V_MEDIUM]}>
                <View
                  style={[
                    {
                      width: 8,
                      height: 8,
                      backgroundColor: THEME.COLORS.LIGHT_BLUE,
                      borderRadius: 99,
                      padding: 2,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.COLORS.WHITE,
    width: 87,
    height: 85,
    borderRadius: 16,
  },
  image: {width: 70, height: 70, resizeMode: 'contain'},
  heading: {
    fontSize: responsiveSize(16),
    fontWeight: '600',
    color: THEME.COLORS.BLUE,
  },
  subHeading: {
    fontSize: responsiveSize(16),
    fontWeight: '600',
    color: THEME.COLORS.BLUE,
  },
  qtyCtn: {
    backgroundColor: THEME.COLORS.WHITE,
    width: 20,
    height: 20,
    borderRadius: 99,
  },
});
