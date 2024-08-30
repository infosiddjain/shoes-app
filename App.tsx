import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import StackRoutes from '@/routes/stackRoutes';
import {COLORS, Layout} from '@/themes/Variables';
import {Provider} from 'react-redux';
import {store, persistor} from '@/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.BLUE,
    secondary: COLORS.LIGHT_BLUE,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={[Layout.fillB]}>
            <StackRoutes />
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
