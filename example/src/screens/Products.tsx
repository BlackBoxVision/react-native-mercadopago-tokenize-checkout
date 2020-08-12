import * as React from 'react';
import { FlatList } from 'react-native';

import ProductCard from '../components/ProductCard';
import { getProducts } from '../services';
import { Routes } from '../constants';

export const ProductsScreen = ({ navigation }: any) => {
  const products = getProducts();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <ProductCard
          {...item}
          onPress={() => navigation.navigate(Routes.PAYMENTS, item)}
        />
      )}
    />
  );
};
