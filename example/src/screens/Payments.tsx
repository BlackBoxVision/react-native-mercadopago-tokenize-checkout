import * as React from 'react';
import { useTheme } from 'react-native-paper';
import MercadoPagoWebTokenizeCheckout from '@blackbox-vision/react-native-mercadopago-tokenize-checkout';

export const PaymentsScreen = ({ route }: any) => {
  const { amount, title } = route.params;
  const { colors } = useTheme();

  return (
    <MercadoPagoWebTokenizeCheckout
      amount={amount}
      productLabel={title}
      publicKey="MERCADO PAGO PUBLIC KEY"
      action="BACKEND URL TO POST DATA"
      successUrl="REDIRECT URL WHEN SUCCESS"
      failureUrl="REDIRECT URL WHEN FAILURE"
      onPaymentResult={(paymentData, error) => {
        console.info('paymentData: ', JSON.stringify(paymentData, null, 2));
        console.info('error: ', error);
      }}
      theme={{
        elements: colors.primary,
        header: colors.primary,
      }}
    />
  );
};
