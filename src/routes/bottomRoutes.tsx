import React from 'react';
import {
  FavouriteScreen,
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from '@/containers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native-paper';
import {VectorIcons} from '@/themes';
import {COLORS, ICONS_NAME, ICONS_TYPE} from '@/themes/Variables';

const Tab = createBottomTabNavigator();

function Store() {
  return <Text>Hello</Text>;
}

function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          paddingBottom: 10,
          paddingTop: 10,
          height: 80,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <VectorIcons
              name={ICONS_NAME.homeOutline}
              color={COLORS.LIGHT_BLUE}
              size={32}
              type={ICONS_TYPE.MaterialCommunityIcons}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <VectorIcons
              name={ICONS_NAME.heartOutline}
              color={COLORS.LIGHT_BLUE}
              size={32}
              type={ICONS_TYPE.MaterialCommunityIcons}
            />
          ),
        }}
        name="FavouriteScreen"
        component={FavouriteScreen}
      />
      <Tab.Screen
        options={{
          tabBarIconStyle: {backgroundColor: 'red', height: 100},
          tabBarIcon: ({color, size}) => (
            <VectorIcons
              name={ICONS_NAME.storefrontOutline}
              color={COLORS.LIGHT_BLUE}
              size={32}
              type={ICONS_TYPE.MaterialCommunityIcons}
            />
          ),
        }}
        name="Store"
        component={Store}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <VectorIcons
              name={ICONS_NAME.bellOutline}
              color={COLORS.LIGHT_BLUE}
              size={32}
              type={ICONS_TYPE.MaterialCommunityIcons}
            />
          ),
        }}
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <VectorIcons
              name={ICONS_NAME.accountOutline}
              color={COLORS.LIGHT_BLUE}
              size={32}
              type={ICONS_TYPE.MaterialCommunityIcons}
            />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomRoutes;
