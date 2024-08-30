import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as ROUTES from '@/containers';
import {NavigationContainer} from '@react-navigation/native';
import BottomRoutes from './bottomRoutes';

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={ROUTES.SplashScreen} />
        <Stack.Screen
          name="OnBoardingScreen"
          component={ROUTES.OnBoardingScreen}
        />
        <Stack.Screen name="LoginScreen" component={ROUTES.LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={ROUTES.RegisterScreen} />
        <Stack.Screen name="RecoveryScreen" component={ROUTES.RecoveryScreen} />
        <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ROUTES.ProductDetailsScreen}
        />
        <Stack.Screen name="MyCartScreen" component={ROUTES.MyCartScreen} />
        <Stack.Screen name="CheckoutScreen" component={ROUTES.CheckoutScreen} />
        <Stack.Screen
          name="UserProfileScreen"
          component={ROUTES.UserProfileScreen}
        />
        <Stack.Screen
          name="SeeAllProductScreen"
          component={ROUTES.SeeAllProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;
