import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DefaultButtonCom, DefaultHeaderCom} from '@/components';
import * as THEME from '@/themes/Variables';
import {VectorIcons} from '@/themes';
import {responsiveSize} from '@/helpers';
import {IMAGES} from '@/themes/images';
import Model from './Modal';

const data = [
  {
    key: 'email',
    contact: 'rumenhussen@gmail.com',
    label: 'Email',
    leftIcon: <VectorIcons name={THEME.ICONS_NAME.mail} size={20} />,
  },
  {
    key: 'phone',
    contact: '+88-692 -764-269',
    label: 'Phone',
    leftIcon: <VectorIcons name={THEME.ICONS_NAME.phone} size={20} />,
  },
];

const CheckoutScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <>
      <View style={[THEME.Layout.fillB]}>
        <View style={[{backgroundColor: THEME.COLORS.LIGHT_WHITE2}]}>
          <View style={[THEME.MARGIN_H_MEDIUM, THEME.MARGIN_V_MEDIUM]}>
            <DefaultHeaderCom
              leftIconName={THEME.ICONS_NAME.arrowLeft}
              leftIconType={THEME.ICONS_TYPE.AntDesign}
              subHeading="Checkout"
            />
            <View
              style={[
                THEME.PADDING_H_MEDIUM,
                THEME.PADDING_V_MEDIUM,
                styles.card,
                THEME.MARGIN_V_SMALL,
              ]}>
              <Text style={styles.heading}>Contact Information</Text>
              {data.map((item: any, index: number) => (
                <View key={index} style={[THEME.Layout.rowJCenter]}>
                  <View style={[THEME.Layout.rowACenter, THEME.MARGIN_V_SMALL]}>
                    <View style={[THEME.Layout.alignCenter, styles.iconCtn]}>
                      {item.leftIcon}
                    </View>
                    <View style={[THEME.MARGIN_H_SMALL]}>
                      <Text style={[styles.heading]}>{item.contact}</Text>
                      <Text
                        style={[
                          THEME.MARGIN_V_TINY,
                          styles.subHeading,
                          {fontSize: responsiveSize(10)},
                        ]}>
                        {item.label}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <VectorIcons
                      color={THEME.COLORS.BLUE}
                      name={THEME.ICONS_NAME.edit}
                      size={20}
                    />
                  </View>
                </View>
              ))}
              <Text style={styles.heading}>Address</Text>
              <View style={[THEME.MARGIN_V_SMALL, THEME.Layout.rowJCenter]}>
                <Text
                  style={[styles.subHeading, {fontSize: responsiveSize(12)}]}>
                  Newahall St 36, London, 12908 - UK
                </Text>
                <VectorIcons
                  name={THEME.ICONS_NAME.down}
                  size={20}
                  color={THEME.COLORS.BLUE}
                  type={THEME.ICONS_TYPE.MaterialCommunityIcons}
                />
              </View>
              <View style={[THEME.MARGIN_V_SMALL]}>
                <Image
                  source={IMAGES.map}
                  style={{height: 101, width: responsiveSize(300)}}
                />
              </View>
              <Text style={styles.heading}>Payment</Text>
              <View style={[THEME.Layout.rowJCenter]}>
                <View style={[THEME.Layout.rowACenter, THEME.MARGIN_V_SMALL]}>
                  <View
                    style={[
                      THEME.Layout.alignCenter,
                      styles.iconCtn,
                      {borderRadius: 8},
                    ]}>
                    <VectorIcons
                      name={THEME.ICONS_NAME.google}
                      size={20}
                      color={THEME.COLORS.BLUE}
                    />
                  </View>
                  <View style={[THEME.MARGIN_H_SMALL]}>
                    <Text style={[styles.heading]}>Paypal Card</Text>
                    <Text
                      style={[
                        THEME.MARGIN_V_TINY,
                        styles.subHeading,
                        {fontSize: responsiveSize(10)},
                      ]}>
                      **** **** 33434 23232
                    </Text>
                  </View>
                </View>
                <View>
                  <VectorIcons
                    color={THEME.COLORS.BLUE}
                    name={THEME.ICONS_NAME.down}
                    size={20}
                    type={THEME.ICONS_TYPE.MaterialCommunityIcons}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.root]}>
          <View style={[THEME.PADDING_H_MEDIUM]}>
            <View style={[THEME.Layout.rowJCenter]}>
              <Text
                style={[styles.subHeading, {color: THEME.COLORS.LIGHT_GREY}]}>
                Subtotal
              </Text>
              <Text
                style={[
                  styles.subHeading,
                  {color: THEME.COLORS.BLUE, fontWeight: '600'},
                ]}>
                $1280.00
              </Text>
            </View>
            <View style={[THEME.Layout.rowJCenter]}>
              <Text
                style={[styles.subHeading, {color: THEME.COLORS.LIGHT_GREY}]}>
                Shopping
              </Text>
              <View style={[THEME.MARGIN_V_MEDIUM]} />
              <Text
                style={[
                  styles.subHeading,
                  {color: THEME.COLORS.BLUE, fontWeight: '600'},
                ]}>
                $80.00
              </Text>
            </View>
            <View style={[THEME.MARGIN_V_MEDIUM, styles.line]} />
            <View style={[THEME.Layout.rowJCenter]}>
              <Text style={styles.subHeading}>Total Cost</Text>
              <Text style={styles.subHeading}>$1420.00</Text>
            </View>

            <DefaultButtonCom title="Payment" onPress={showModal} />
          </View>
        </View>
      </View>
      {/* <Model
        visible={visible}
        setVisible={setVisible}
        showModal={showModal}
        hideModal={hideModal}
      /> */}
    </>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  card: {backgroundColor: THEME.COLORS.WHITE, borderRadius: 16},
  iconCtn: {
    backgroundColor: THEME.COLORS.LIGHT_WHITE2,
    width: 40,
    height: 40,
    borderRadius: 99,
  },
  heading: {
    fontSize: responsiveSize(14),
    color: THEME.COLORS.BLUE,
    fontWeight: '600',
  },
  subHeading: {
    fontSize: responsiveSize(12),
    color: THEME.COLORS.LIGHT_BLACK,
    fontWeight: '400',
  },
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  subCtn: {
    backgroundColor: THEME.COLORS.WHITE,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  line: {
    height: 1,
    padding: 2,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.LIGHT_WHITE2,
  },
});
