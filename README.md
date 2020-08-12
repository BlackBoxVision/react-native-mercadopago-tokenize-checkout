# MercadoPago Tokenize Checkout RN [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

A component to integrate `MercadoPago` tokenize checkout into a RN app.

## Why this exists?

Currently, `MercadoPago` native SDKs doesn't support `card tokenization` and `card save/restore` from user.

## Table of contents

- [Use Case](#use-case)
- [Compatibility](#compatibility)
- [Pre Requisites](#pre-requisites)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Example Usage](#example-usage)
- [Realistic Example](#realistic-example)
- [Props](#props)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Use case

You're using RN for building an app, and you need to integrate MercadoPago checkout in your app.

## Compatibility

Our package currently supports apps with **RN >= 0.60**. `We don't have a plan currently to support olders ones, but if you need we're open to support it.`

## Pre Requisites

As a pre requisite you'll need the following before integrating the library:

1. A MercadoPago Account
2. A `publicKey` from your MercadoPago Account

If you don't have any of the followings, you can start from here:

1. [Creating a MercadoPago Account](https://www.mercadopago.com.ar/)
2. [Creating a MercadoPago Application](https://applications.mercadopago.com/)

If you've more doubts you can read more documentation in this portal:

- [MercadoPago Developers](https://developers.mercadopago.com/)

## Installation

You can install this library via NPM or YARN.

### NPM

```bash
npm i @blackbox-vision/react-native-mercadopago-tokenize-checkout
```

### YARN

```bash
yarn add @blackbox-vision/react-native-mercadopago-tokenize-checkout
```

## Example Usage

After reading and performing the previous steps, you should be able to import the library and use it like in this example:

```javascript
import Env from 'react-native-config';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

import MercadoPagoWebTokenizeCheckout from '@blackbox-vision/react-native-mercadopago-tokenize-checkout';

import styles from './styles';

export default function App() {
  return (
    <MercadoPagoWebTokenizeCheckout
      amount="100.00"
      action="yourServerUrl"
      productLabel="Awesome Product"
      publicKey={Env.PUBLIC_KEY}
      style={styles.container}
      theme={{
        elements: '#000',
        header: '#000',
      }}
    />
  );
}
```

## Realistic Example

We provide a more real sample app [here](./example).

![Example App Running](./checkout.gif)

## Props

The `MercadoPago WebTokenize Checkout` component support the following props:

| Properties      | Types    | Default Value | Description                                    |
| --------------- | -------- | ------------- | ---------------------------------------------- |
| amount          | number   | none          | The amount to pay for the product              |
| action          | string   | none          | The action where the data will be sent         |
| publicKey       | string   | none          | The Public Key for MP                          |
| keepOpen        | boolean  | none          | Flag to restore the payment state if failure   |
| cardsIds        | string[] | none          | The cards associated to the customer           |
| customerId      | string   | none          | The ID for the customer                        |
| theme           | object   | none          | The theme for the checkout                     |
| productLabel    | string   | none          | The label for the product                      |
| discountLabel   | string   | none          | The theme for the checkout                     |
| maxInstallments | number   | none          | The label for the discount                     |
| discount        | number   | none          | The amount for the discount                    |
| shipping        | number   | none          | The amount for the shipping                    |
| charge          | number   | none          | The amount for the additional charge           |
| taxes           | number   | none          | The amount for the taxes                       |
| arrears         | number   | none          | The amount for the arrears                     |
| style           | object   | none          | The additional styles to customize the WebView |

The `theme` props has the following props:

| Properties | Types  | Default Value | Description                            |
| ---------- | ------ | ------------- | -------------------------------------- |
| elements   | string | none          | Hexadecimal color for all the elements |
| header     | string | none          | Hexadecimal color for the header       |

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/eact-native-mercadopago-tokenize-checkout/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/eact-native-mercadopago-tokenize-checkout/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/eact-native-mercadopago-tokenize-checkout/blob/master/LICENSE) for more information.
