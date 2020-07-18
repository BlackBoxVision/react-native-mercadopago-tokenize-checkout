import * as React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import MercadoPagoWebTokenizeCheckout from '@blackbox-vision/react-native-mercadopago-tokenize-checkout';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <MercadoPagoWebTokenizeCheckout
          amount={100.0}
          action={'/payments'}
          publicKey={'TEST-5d2cfefc-32ab-45d5-bab5-fc1bfc2bbb7c'}
          theme={{
            elements: '#c0392b',
            header: '#c0392b',
          }}
        />
      </SafeAreaView>
    </>
  );
}
