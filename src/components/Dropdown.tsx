import {responsiveSize} from '@/helpers';
import {COLORS, MARGIN_V_SMALL, TextStyle} from '@/themes/Variables';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

type DropdownType = {
  data: any[];
  placeholder: string;
  label?: string;
  value?: any;
  setValue?: any;
};

const DropdownCom = ({
  data,
  placeholder,
  label,
  value,
  setValue,
}: DropdownType) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={[MARGIN_V_SMALL]}>
      {label && (
        <Text
          style={[
            TextStyle.subHeading,
            {color: COLORS.BLUE, fontWeight: '600', marginBottom: 10},
          ]}>
          {label}
        </Text>
      )}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        itemTextStyle={{color: COLORS.BLUE}}
        placeholder={!isFocus ? placeholder : 'Searching...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownCom;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 8,
    backgroundColor: COLORS.WHITE,
  },
  placeholderStyle: {
    fontSize: responsiveSize(14),
    color: COLORS.BLUE,
  },
  selectedTextStyle: {
    fontSize: responsiveSize(14),
    color: COLORS.BLUE,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: responsiveSize(14),
    color: COLORS.BLUE,
  },
});
