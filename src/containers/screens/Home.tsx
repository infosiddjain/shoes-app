import {
  Image,
  PermissionsAndroid,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {VectorIcons} from '@/themes';
import * as THEME from '@/themes/Variables';
import {Text} from 'react-native-paper';
import {responsiveSize} from '@/helpers';
import {useNavigation} from '@react-navigation/native';
import {CardWrapperCom, DefaultHeaderCom} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {setPopularProduct} from '@/redux/features/productSlice';
import {allProducts} from '../db';

const HomeScreen = () => {
  const navigation = useNavigation();
  const store = useSelector((state: any) => state.product.popularProduct);
  const dispatch = useDispatch();
  const [location, setLocation] = useState(false);
  console.log('store', store);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log('location', position);
            //setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log('location', location);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    dispatch(setPopularProduct(allProducts));
  }, []);

  return (
    <View
      style={[THEME.Layout.fill, {backgroundColor: THEME.COLORS.LIGHT_WHITE2}]}>
      <View style={[THEME.MARGIN_V_MEDIUM]}>
        {/* Header */}
        <View style={[THEME.MARGIN_H_MEDIUM]}>
          <DefaultHeaderCom
            heading="Store location"
            subHeading="Mondolibug, Sylhet"
            centerIcon={THEME.ICONS_NAME.mapMarker}
            rightIconName={THEME.ICONS_NAME.storefrontOutline}
            leftPress={() => navigation.navigate('ProfileScreen' as never)}
            rightPress={() => navigation.navigate('Store' as never)}
          />
        </View>
        {/* Search */}
        <View style={[THEME.MARGIN_H_MEDIUM]}>
          <TextInput
            placeholder="Looking for shoes"
            placeholderTextColor={THEME.COLORS.LIGHT_GREY}
            style={[styles.input, THEME.MARGIN_V_SMALL]}
          />
          <View style={[styles.searchIconCtn]}>
            <VectorIcons
              name={THEME.ICONS_NAME.magnify}
              size={20}
              color={THEME.COLORS.LIGHT_GREY}
              type={THEME.ICONS_TYPE.MaterialCommunityIcons}
            />
          </View>
        </View>
        {/* filter tab  */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={[
              THEME.Layout.rowACenter,
              THEME.Layout.fill,
              {marginLeft: 15, marginTop: 10},
            ]}>
            {store?.brands?.map((item: any, index: number) => (
              <Pressable
                key={index}
                style={[THEME.Layout.rowACenter, styles.tabSubRoot]}>
                <View style={[THEME.Layout.alignCenter, styles.imageCtn]}>
                  <Image style={[styles.image]} source={item.image} />
                </View>
                <View style={[THEME.Layout.alignCenter, THEME.Layout.fill]}>
                  <Text
                    style={[
                      styles.subHeading,
                      {
                        color: THEME.COLORS.WHITE,
                        textAlign: 'center',
                        fontSize: responsiveSize(10),
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
        {/* popular shoes */}
        <View
          style={[
            THEME.Layout.rowJCenter,
            THEME.MARGIN_H_MEDIUM,
            THEME.MARGIN_V_MEDIUM,
          ]}>
          <Text style={[styles.subHeading, {fontWeight: '600'}]}>
            Popular Shoes
          </Text>
          <Text
            onPress={() => navigation.navigate('SeeAllProductScreen' as never)}
            style={[styles.subHeading, {color: THEME.COLORS.LIGHT_BLUE}]}>
            See all
          </Text>
        </View>
        {/* popular list shoes  */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={[
              THEME.Layout.rowACenter,
              THEME.Layout.fill,
              {marginLeft: 20},
            ]}>
            {store?.popularShoes?.map((item: any, index: number) => (
              <CardWrapperCom key={index}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('ProductDetailsScreen' as never)
                  }>
                  <View style={[THEME.Layout.alignCenter]}>
                    <Image
                      source={item.image}
                      style={{width: 137, height: 97, resizeMode: 'contain'}}
                    />
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
                  </View>
                  <View style={[{marginTop: responsiveSize(5)}]}>
                    <View style={[THEME.Layout.rowJCenter, {marginLeft: 20}]}>
                      <Text style={[styles.subHeading, {fontWeight: '600'}]}>
                        $493.00
                      </Text>
                      <Pressable
                        style={[THEME.Layout.alignCenter, styles.plusBtn]}>
                        <VectorIcons
                          name={THEME.ICONS_NAME.plus}
                          color={THEME.COLORS.WHITE}
                          size={20}
                        />
                      </Pressable>
                    </View>
                  </View>
                </Pressable>
              </CardWrapperCom>
            ))}
          </View>
        </ScrollView>
        {/* new arrivals */}
        <View
          style={[
            THEME.Layout.rowJCenter,
            THEME.MARGIN_H_MEDIUM,
            THEME.MARGIN_V_MEDIUM,
          ]}>
          <Text style={[styles.subHeading, {fontWeight: '600'}]}>
            New Arrivals
          </Text>
          <Text style={[styles.subHeading, {color: THEME.COLORS.LIGHT_BLUE}]}>
            See all
          </Text>
        </View>
        {/* new arrivals list */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {store?.newArrivals.map((item: any, index: number) => (
            <View
              key={index}
              style={[
                THEME.Layout.justifyCContent,
                THEME.PADDING_H_MEDIUM,
                THEME.MARGIN_H_MEDIUM,
                styles.card,
              ]}>
              <View style={[THEME.Layout.rowJCenter]}>
                <View>
                  <Text
                    style={[
                      styles.subHeading,
                      {
                        textTransform: 'uppercase',
                        color: THEME.COLORS.LIGHT_BLUE,
                        fontSize: responsiveSize(10),
                      },
                    ]}>
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      THEME.MARGIN_V_TINY,
                      styles.subHeading,
                      {fontWeight: '600', fontSize: responsiveSize(16)},
                    ]}>
                    {item.type}
                  </Text>
                  <Text style={[styles.subHeading, {fontWeight: '600'}]}>
                    {item.price}
                  </Text>
                </View>
                <View>
                  <Image source={item.image} style={styles.newArrivalsImage} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: THEME.COLORS.WHITE,
    height: 50,
    paddingHorizontal: 50,
    borderRadius: 50,
    color: THEME.COLORS.BLUE,
  },
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
  searchIconCtn: {position: 'absolute', top: 25, left: 20},
  tabSubRoot: {
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    width: 100,
    height: 44,
    borderRadius: 40,
    marginRight: 10,
  },
  imageCtn: {
    backgroundColor: THEME.COLORS.WHITE,
    width: 35,
    height: 35,
    borderRadius: 99,
    marginLeft: 5,
    marginTop: 25,
    marginBottom: 25,
  },
  image: {width: 20, height: 20, resizeMode: 'contain'},
  card: {
    width: responsiveSize(335),
    backgroundColor: THEME.COLORS.WHITE,
    height: 120,
    borderRadius: 16,
  },
  newArrivalsImage: {width: 100, height: 50, resizeMode: 'contain'},
  plusBtn: {
    backgroundColor: THEME.COLORS.LIGHT_BLUE,
    width: 35,
    height: 35,
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
  },
  popularCard: {
    backgroundColor: THEME.COLORS.WHITE,
    width: 157,
    height: 182,
    borderRadius: 16,
    marginRight: 20,
  },
});
