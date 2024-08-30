import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardWrapperCom, DefaultHeaderCom} from '@/components';
import * as THEME from '@/themes/Variables';
import {Image} from 'react-native';
import {IMAGES} from '@/themes/images';
import {responsiveSize} from '@/helpers';
import {VectorIcons} from '@/themes';

const SeeAllProductScreen = () => {
  return (
    <View
      style={[THEME.Layout.fill, {backgroundColor: THEME.COLORS.LIGHT_WHITE2}]}>
      <View style={[THEME.MARGIN_H_MEDIUM, THEME.MARGIN_V_MEDIUM]}>
        <DefaultHeaderCom
          leftIconName={THEME.ICONS_NAME.arrowLeft}
          leftIconType={THEME.ICONS_TYPE.AntDesign}
          subHeading="Best Sellers"
          rightIconName={THEME.ICONS_NAME.magnify}
        />
        <View style={[THEME.MARGIN_V_SMALL]}>
          <View
            style={[
              {
                width: 180,
                backgroundColor: THEME.COLORS.WHITE,
                height: 200,
                borderRadius: 8,
              },
            ]}>
            <View style={[THEME.Layout.alignCenter]}>
              <View>
                <Image
                  source={IMAGES.shoes5}
                  style={{
                    width: 137,
                    height: 97,
                    resizeMode: 'contain',
                    marginTop: 20,
                  }}
                />
              </View>
            </View>
            <View style={[THEME.MARGIN_H_MEDIUM]}>
              <Text
                style={[
                  styles.subHeading,
                  THEME.MARGIN_V_TINY,
                  {
                    color: THEME.COLORS.LIGHT_BLUE,
                    textTransform: 'uppercase',
                    fontSize: responsiveSize(10),
                  },
                ]}>
                Best Seller
              </Text>
              <Text style={[styles.subHeading, {fontWeight: '600'}]}>
                Nike Jordan
              </Text>
              <View
                style={{
                  position: 'absolute',
                  bottom: -30,
                  right: 0,
                  left: 0,
                }}>
                <View style={[THEME.Layout.rowJCenter]}>
                  <Text style={[styles.subHeading, {fontWeight: '600'}]}>
                    $493.00
                  </Text>
                  <View style={[THEME.Layout.rowJCenter]}>
                    <View
                      style={{
                        backgroundColor: THEME.COLORS.RED,
                        width: 10,
                        height: 10,
                        borderRadius: 99,
                        marginRight: 5,
                      }}
                    />
                    <View
                      style={{
                        backgroundColor: THEME.COLORS.BLACK,
                        width: 10,
                        height: 10,
                        borderRadius: 99,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SeeAllProductScreen;

const styles = StyleSheet.create({
  subHeading: {
    fontSize: responsiveSize(14),
    fontWeight: '400',
    color: THEME.COLORS.BLUE,
  },
});
