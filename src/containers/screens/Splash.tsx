import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {IMAGES} from '@/themes/images';
import {COLORS, TextStyle} from '@/themes/Variables';
import {Text} from 'react-native-paper';
import {useCustomNavigation} from '@/helpers';

const SplashScreen = () => {
  const navigate = useCustomNavigation();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigate.navigate('OnBoardingScreen' as never);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{backgroundColor: COLORS.WHITE}}>
      <Image source={IMAGES.splash} style={styles.image} />
      <View style={styles.textCtn}>
        <Text style={[TextStyle.heading, {textAlign: 'center'}]}>
          Shoes App
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  textCtn: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
    justifyContent: 'center',
  },
});
