export const getHtmlCode = (props: any) => ({
  html: `
    <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        </head>
        <body>
          <form action="${props.action}" method="POST">
            <script
              src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
              ${
                props.discountLabel
                  ? `data-summary-discount-label="${props.discountLabel}"`
                  : ''
              }
              ${
                props.productLabel
                  ? `data-summary-product-label="${props.productLabel}"`
                  : ''
              }
              ${
                props.maxInstallments
                  ? `data-max-installments="${props.maxInstallments}"`
                  : ''
              }
              ${
                props.discount
                  ? `data-summary-discount="${props.discount}"`
                  : ''
              }
              ${
                props.shipping
                  ? `data-summary-shipping="${props.shipping}"`
                  : ''
              }
              ${props.arrears ? `data-summary-arrears="${props.arrears}"` : ''}
              ${props.charge ? `data-summary-charge="${props.charge}"` : ''}
              ${props.taxes ? `data-summary-taxes="${props.taxes}"` : ''}
              ${
                props.theme?.elements
                  ? `data-elements-color="${props.theme?.elements}"`
                  : ''
              }
              ${
                props.theme?.header
                  ? `data-header-color="${props.theme?.header}"`
                  : ''
              }
              ${
                props.customerId ? `data-customer-id="${props.customerId}"` : ''
              }
              ${props.amount ? `data-transaction-amount="${props.amount}"` : ''}
              ${props.publicKey ? `data-public-key="${props.publicKey}"` : ''}
              ${props.cardsIds ? `data-card-ids="${props.cardsIds}"` : ''}
              ${props.keepOpen ? `data-open="${props.keepOpen}"` : ''}
            >
            </script>
          </form>
        </body>
    </html>
  `,
});

export const jsCode = `document.querySelector(".mercadopago-button") && document.querySelector(".mercadopago-button").click();`;
