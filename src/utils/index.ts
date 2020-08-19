import get from 'lodash.get';

const dataAttributes = {
  'discountLabel': 'data-summary-discount-label',
  'productLabel': 'data-summary-product-label',
  'maxInstallments': 'data-max-installments',
  'theme.elements': 'data-elements-color',
  'theme.header': 'data-header-color',
  'discount': 'data-summary-discount',
  'shipping': 'data-summary-shipping',
  'amount': 'data-transaction-amount',
  'arrears': 'data-summary-arrears',
  'customerId': 'data-customer-id',
  'charge': 'data-summary-charge',
  'publicKey': 'data-public-key',
  'taxes': 'data-summary-taxes',
  'cardsIds': 'data-card-ids',
  'keepOpen': 'data-open',
};

export const getHtmlCode = ({ action, ...props }: any) => ({
  html: `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </head>
      <body>
        <form action="${action}" method="POST">
          <script
            src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
            ${Object.entries(dataAttributes).reduce(
              (acum, [key, value]) =>
                get(props, key)
                  ? acum + ` ${value}="${get(props, key)}" `
                  : acum,
              ''
            )}
          >
          </script>
        </form>
        <style>
          body {
            background: ${props.theme?.elements};
          }

          button.mercadopago-button {
            visibility: hidden;
          }
        </style>
        <script>
          document.querySelector(".mercadopago-button").click();
        </script>
      </body>
    </html>
  `,
});

export const getQueryParams = (url: string) => {
  try {
    const [, params] = url.split('?');
    if (params && params.length > 0) {
      const tuples = params.split('&');
      return Object.fromEntries(tuples.map((element) => element.split('=')));
    } else {
      return {};
    }
  } catch {
    return {};
  }
};
