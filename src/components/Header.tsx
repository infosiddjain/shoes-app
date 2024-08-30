import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import * as THEME from '@/themes/Variables';
import {VectorIcons} from '@/themes';
import {useNavigation} from '@react-navigation/native';

const HeaderComp = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={[THEME.Layout.alignCenter, styles.arrowCtn]}>
      <VectorIcons
        name={THEME.ICONS_NAME.arrowLeft}
        size={20}
        color={THEME.COLORS.BLACK}
      />
    </Pressable>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  arrowCtn: {
    backgroundColor: THEME.COLORS.WHITE,
    width: 40,
    height: 40,
    borderRadius: 99,
  },
});
