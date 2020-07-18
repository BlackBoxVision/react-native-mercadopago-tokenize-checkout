import React, { useMemo } from 'react';
import { WebView } from 'react-native-webview';

import { getHtmlCode, jsCode } from './utils';
import { StyleSheet } from 'react-native';

interface ThemeOptions {
  /**
   * Hexadecimal color for all the elements
   */
  elements?: string;
  /**
   * Hexadecimal color for the header
   */
  header?: string;
}

export interface MercadoPagoWebTokenizeCheckoutProps {
  /**
   * The amount to pay for the product
   */
  amount: number;
  /**
   * The action where the data will be sent
   */
  action: string;
  /**
   * The Public Key for MP
   */
  publicKey: string;
  /**
   * Flag to restore the payment state if failure
   */
  keepOpen?: boolean;
  /**
   * The cards associated to the customer
   */
  cardsIds?: string[];
  /**
   * The ID for the customer
   */
  customerId?: string;
  /**
   * The theme for the checkout
   */
  theme?: ThemeOptions;
  /**
   * The label for the product
   */
  productLabel?: string;
  /**
   * The label for the discount
   */
  discountLabel?: string;
  /**
   * The total installments for the payment
   */
  maxInstallments?: number;
  /**
   * The amount for the discount
   */
  discount?: number;
  /**
   * The amount for the shipping
   */
  shipping?: number;
  /**
   * The amount for the additional charge
   */
  charge?: number;
  /**
   * The amount for the taxes
   */
  taxes?: number;
  /**
   * The amount for the arrears
   */
  arrears?: number;
  /**
   * The additional styles to customize the WebView
   */
  style?: any;
}

const MercadoPagoWebTokenizeCheckout: React.FC<MercadoPagoWebTokenizeCheckoutProps> = React.forwardRef(
  (props: MercadoPagoWebTokenizeCheckoutProps, ref: React.Ref<WebView>) =>
    useMemo(
      () => (
        <WebView
          ref={ref}
          scalesPageToFit
          javaScriptEnabled
          startInLoadingState
          originWhitelist={['*']}
          injectedJavaScript={jsCode}
          source={getHtmlCode(props)}
          keyboardDisplayRequiresUserAction
          style={[styles.container, props.style]}
        />
      ),
      [props, ref]
    )
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MercadoPagoWebTokenizeCheckout;
