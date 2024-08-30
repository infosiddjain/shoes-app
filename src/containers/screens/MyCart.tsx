import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {DefaultHeaderCom} from '@/components';
import * as THEME from '@/themes/Variables';
import {IMAGES} from '@/themes/images';
import {Text} from 'react-native-paper';
import {responsiveSize} from '@/helpers';
import {VectorIcons} from '@/themes';
import PaymentDetailsComp from '@/components/PaymentDetails';
import {useNavigation} from '@react-navigation/native';

const MyCartScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[THEME.Layout.fill, {backgroundColor: THEME.COLORS.LIGHT_WHITE2}]}>
      <View style={[THEME.MARGIN_H_MEDIUM, THEME.MARGIN_V_MEDIUM]}>
        <DefaultHeaderCom
          leftIconName={THEME.ICONS_NAME.arrowLeft}
          leftIconType={THEME.ICONS_TYPE.AntDesign}
          subHeading="My Cart"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[THEME.Layout.rowJCenter, THEME.MARGIN_V_MEDIUM]}>
            <View style={[THEME.Layout.rowACenter]}>
              <View style={[THEME.Layout.alignCenter, styles.card]}>
                <Image source={IMAGES.shoes5} style={styles.image} />
              </View>
              <View style={[THEME.MARGIN_H_MEDIUM]}>
                <Text style={styles.heading}>Nike Club Max</Text>
                <Text style={[THEME.MARGIN_V_TINY, styles.subHeading]}>
                  $564.00
                </Text>
                <View style={[THEME.Layout.rowACenter]}>
                  <View style={[THEME.Layout.alignCenter, styles.qtyCtn]}>
                    <VectorIcons
                      name={THEME.ICONS_NAME.minus}
                      color={THEME.COLORS.BLUE}
                    />
                  </View>
                  <View style={[THEME.MARGIN_H_SMALL]}>
                    <Text style={styles.heading}> 1 </Text>
                  </View>
                  <View
                    style={[
                      THEME.Layout.alignCenter,
                      styles.qtyCtn,
                      {backgroundColor: THEME.COLORS.LIGHT_BLUE},
                    ]}>
                    <VectorIcons
                      name={THEME.ICONS_NAME.plus}
                      color={THEME.COLORS.WHITE}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[{}]}>
              <Text style={styles.subHeading}>L</Text>
              <View style={[THEME.PADDING_V_MEDIUM]} />
              <VectorIcons
                name={THEME.ICONS_NAME.delete}
                color={THEME.COLORS.BLUE}
                type={THEME.ICONS_TYPE.MaterialCommunityIcons}
                size={20}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <PaymentDetailsComp
        buttonTitle="Checkout"
        onPress={() => navigation.navigate('CheckoutScreen' as never)}
      />
    </View>
  );
};

export default MyCartScreen;

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
