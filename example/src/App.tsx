import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import { AppStatusBar } from './components/StatusBar';

import { ProductsScreen } from './screens/Products';
import { PaymentsScreen } from './screens/Payments';

const primaryColor = DefaultTheme.colors.primary;
const Stack = createStackNavigator();

const App = () => (
  <PaperProvider>
    <AppStatusBar />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            title: 'Products',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: primaryColor,
            },
          }}
        />
        <Stack.Screen
          name="Payments"
          component={PaymentsScreen}
          options={({ route }) => ({
            title: `${(route?.params as any)?.title}`,
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: primaryColor,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);

export default App;
