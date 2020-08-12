import * as React from 'react';
import { useTheme } from 'react-native-paper';
import MercadoPagoWebTokenizeCheckout from '@blackbox-vision/react-native-mercadopago-tokenize-checkout';

// TODO: move to .env
const PUBLIC_KEY = 'TEST-5d2cfefc-32ab-45d5-bab5-fc1bfc2bbb7c';

export const PaymentsScreen = ({ route }: any) => {
  const { amount, title } = route.params;
  const { colors } = useTheme();

  return (
    <MercadoPagoWebTokenizeCheckout
      amount={amount}
      productLabel={title}
      action="https://nervous-squid-21.serverless.social/payments"
      publicKey={PUBLIC_KEY}
      theme={{
        elements: colors.primary,
        header: colors.primary,
      }}
    />
  );
};
