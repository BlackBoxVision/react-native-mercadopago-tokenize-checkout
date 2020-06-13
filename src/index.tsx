import React, { useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';
import { BackHandler, ActivityIndicator } from 'react-native';

export interface MercadoPagoWebTokenizeCheckoutProps {
  amount: number;
  action: string;
  publicKey: string;
  keepOpen?: boolean;
  cardsIds?: string[];
  customerId?: string;
}

const MercadoPagoWebTokenizeCheckout: React.FC<MercadoPagoWebTokenizeCheckoutProps> = ({
  amount,
  action,
  keepOpen,
  publicKey,
}: MercadoPagoWebTokenizeCheckoutProps) => {
  const ref = useRef(null);

  const goBack: any = () => {
    if (ref.current) {
      (ref.current as any)?.back();
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', goBack);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', goBack);
    };
  }, [ref]);

  return (
    <WebView
      ref={ref}
      scalesPageToFit
      javaScriptEnabled
      startInLoadingState
      keyboardDisplayRequiresUserAction
      originWhitelist={['*']}
      renderLoading={() => (
        <ActivityIndicator color="black" size="large" style={{ flex: 1 }} />
      )}
      source={{
        html: `
          <form action="${action}" method="POST">
            <script
              src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
              data-transaction-amount="${amount}"
              data-public-key="${publicKey}"
              data-open="${keepOpen}"
            >
            </script>
          </form>
        `,
      }}
      style={{ flex: 1 }}
    />
  );
};

export default MercadoPagoWebTokenizeCheckout;
