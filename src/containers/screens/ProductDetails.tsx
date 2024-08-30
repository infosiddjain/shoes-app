import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/Variables';
import {VectorIcons} from '@/themes';
import {responsiveSize} from '@/helpers';
import {IMAGES} from '@/themes/images';
import {DefaultHeaderCom} from '@/components';
import {useNavigation} from '@react-navigation/native';

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[THEME.Layout.fill, {backgroundColor: THEME.COLORS.LIGHT_WHITE}]}>
      <View style={[THEME.MARGIN_V_MEDIUM]}>
        {/* Header */}
        <View style={[THEME.MARGIN_H_MEDIUM]}>
          <DefaultHeaderCom
            leftIconName={THEME.ICONS_NAME.arrowLeft}
            leftIconType={THEME.ICONS_TYPE.AntDesign}
            subHeading="Men's Shop"
            rightIconName={THEME.ICONS_NAME.storefrontOutline}
          />
        </View>
        {/* Product Image */}
        <View style={[THEME.Layout.alignCenter]}>
          <View style={{position: 'absolute', bottom: 0}}>
            <Image
              source={IMAGES.line}
              style={{
                resizeMode: 'contain',
                height: 100,
                width: responsiveSize(320),
              }}
            />
          </View>
          <Image
            source={IMAGES.shoes5}
            style={{
              width: 300,
              height: 300,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      {/* Product details */}
      <ScrollView style={[{flex: 1}]} showsVerticalScrollIndicator={false}>
        <View
          style={[
            THEME.Layout.fillB,
            THEME.PADDING_H_MEDIUM,
            THEME.PADDING_V_MEDIUM,
            {
              backgroundColor: THEME.COLORS.WHITE,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            },
          ]}>
          <View>
            <Text
              style={[
                styles.subHeading,
                {textTransform: 'uppercase', color: THEME.COLORS.LIGHT_BLUE},
              ]}>
              Best Seller
            </Text>
            <Text
              style={[
                THEME.MARGIN_V_SMALL,
                styles.heading,
                {color: THEME.COLORS.BLUE},
              ]}>
              Nike Air Jordan
            </Text>
            <Text style={[styles.subHeading, {fontWeight: '600'}]}>
              $956.00
            </Text>
            <Text
              style={[
                THEME.MARGIN_V_TINY,
                styles.subHeading,
                {color: THEME.COLORS.LIGHT_GREY, fontSize: responsiveSize(16)},
              ]}>
              Air Jordan is an American brand of basketball shoes athletic,
              casual, and style clothing produced by Nike....
            </Text>
          </View>
          <Text
            style={[
              THEME.MARGIN_V_SMALL,
              styles.heading,
              {color: THEME.COLORS.BLUE, fontWeight: '600'},
            ]}>
            Gallery
          </Text>
          <View
            style={[
              THEME.Layout.alignCenter,
              {
                backgroundColor: THEME.COLORS.LIGHT_WHITE2,
                width: 50,
                height: 50,
                borderRadius: 16,
              },
            ]}>
            <Image
              source={IMAGES.shoes5}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
          </View>
          <View style={[THEME.Layout.rowJCenter]}>
            <Text
              style={[
                THEME.MARGIN_V_SMALL,
                styles.heading,
                {color: THEME.COLORS.BLUE, fontWeight: '600'},
              ]}>
              Size
            </Text>
            <View style={[THEME.Layout.rowACenter]}>
              <Text
                style={[
                  THEME.MARGIN_V_SMALL,
                  styles.heading,
                  {color: THEME.COLORS.BLUE, fontWeight: '600'},
                ]}>
                EU
              </Text>
              <Text
                style={[
                  THEME.MARGIN_V_SMALL,
                  styles.heading,
                  {color: THEME.COLORS.LIGHT_GREY, fontWeight: '600'},
                ]}>
                {' '}
                US
              </Text>
            </View>
          </View>
          <View
            style={[
              THEME.Layout.alignCenter,
              {
                backgroundColor: THEME.COLORS.LIGHT_WHITE2,
                width: 50,
                height: 50,
                borderRadius: 99,
              },
            ]}>
            <Text
              style={[
                THEME.MARGIN_V_SMALL,
                styles.heading,
                {color: THEME.COLORS.LIGHT_GREY, fontWeight: '600'},
              ]}>
              38
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            borderWidth: 1,
            borderColor: THEME.COLORS.LIGHT_WHITE2,
            backgroundColor: THEME.COLORS.WHITE,
          },
        ]}>
        <View
          style={[
            THEME.Layout.rowJCenter,
            THEME.PADDING_H_MEDIUM,
            THEME.PADDING_V_MEDIUM,
          ]}>
          <View>
            <Text style={[styles.subHeading, {color: THEME.COLORS.LIGHT_GREY}]}>
              Price
            </Text>
            <Text style={[styles.subHeading, {fontWeight: '600'}]}>
              $849.00
            </Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('MyCartScreen' as never)}
            style={[
              THEME.Layout.alignCenter,
              {
                backgroundColor: THEME.COLORS.LIGHT_BLUE,
                width: 167,
                height: 54,
                borderRadius: 50,
              },
            ]}>
            <Text style={[styles.subHeading, {color: THEME.COLORS.WHITE}]}>
              Add To Cart
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: responsiveSize(16),
    fontWeight: '500',
    color: THEME.COLORS.LIGHT_GREY,
  },
  subHeading: {
    fontSize: responsiveSize(14),
    fontWeight: '400',
    color: THEME.COLORS.BLUE,
  },
  iconCtn: {
    backgroundColor: THEME.COLORS.WHITE,
    width: 40,
    height: 40,
    borderRadius: 99,
  },
});
