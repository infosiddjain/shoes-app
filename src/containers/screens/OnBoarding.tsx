import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import * as THEME from '@/themes/Variables';
import {Text} from 'react-native-paper';
import {responsiveSize, useCustomNavigation} from '@/helpers';
import Swiper from 'react-native-swiper';
import {onBoardingData} from '../db';

const OnBoardingScreen = () => {
  const navigation = useCustomNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = () => {
    if (currentIndex <= onBoardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('LoginScreen' as never);
    }
  };

  return (
    <View style={[THEME.Layout.fillB]}>
      <Swiper showsPagination={false} index={currentIndex} dot>
        {onBoardingData.map((item: any, index: number) => (
          <View key={item.heading} style={[THEME.Layout.fill]}>
            <View style={[THEME.Layout.alignCenter]}>
              <Image source={item.image} style={styles.img} />
              <View style={styles.imgTestCtn}>
                <Text
                  style={[
                    THEME.TextStyle.heading,
                    {
                      color: THEME.COLORS.LIGHT_WHITE,
                      fontSize: responsiveSize(150),
                    },
                  ]}>
                  NIKE
                </Text>
              </View>
            </View>
            <View style={[THEME.MARGIN_H_MEDIUM]}>
              <Text
                style={[
                  THEME.TextStyle.heading,
                  {fontSize: responsiveSize(50)},
                ]}>
                {item.heading}
              </Text>
              <Text
                style={[
                  THEME.TextStyle.subHeading,
                  {fontSize: responsiveSize(20)},
                ]}>
                {item.subHeading}
              </Text>
              <View style={[THEME.Layout.flexAEnd, THEME.MARGIN_V_LARGE]}>
                <Pressable
                  onPress={() => handleSubmit()}
                  style={[THEME.Layout.alignCenter, styles.btn]}>
                  <Text
                    style={[
                      THEME.TextStyle.subHeading,
                      {color: THEME.COLORS.WHITE},
                    ]}>
                    {item.button}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  imgTestCtn: {
    position: 'absolute',
    zIndex: -1,
    top: 20,
  },
  btn: {
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    width: 165,
    height: 54,
    borderRadius: 50,
  },
});
