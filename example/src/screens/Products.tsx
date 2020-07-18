import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { FlatList, SafeAreaView } from 'react-native';

import ProductCard from '../components/ProductCard';
import StatusBar from '../components/StatusBar';

import { getProducts } from '../services';

export const ProductsScreen = ({ navigation }: any) => {
  const products = getProducts();

  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <Appbar>
          <Appbar.Content title="Products" />
        </Appbar>
        <FlatList
          data={products}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <ProductCard {...item} onPress={() => navigation.navigate()} />
          )}
        />
      </SafeAreaView>
    </>
  );
};
