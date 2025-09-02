import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardDeProduto = ({ product }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{product.nome}</Text>
        <View style={styles.caloriesRow}>
          <Text style={styles.fireIcon}>🔥</Text>
          <Text style={styles.caloriesText}>{product.calorias} Calorias</Text>
        </View>
        <Text style={styles.priceText}>$ {product.preco.toFixed(2)}</Text>
      </View>
      <Image
        accessibilityLabel={'Imagem de ' + product.nome}
        source={{ uri: product.imagemUri }}
        style={styles.productImage}
        resizeMode="contain"
      />
    </View>
  );
};

const App = () => {
  const products = [
    {
      nome: 'Beef Burger',
      calorias: 70,
      preco: 12.0,

      imagemUri: 'https://raw.githubusercontent.com/vxctrr/ptimobile/main/assets/images/hamburguer.png',
    },
    {
      nome: 'Pancakes',
      calorias: 60,
      preco: 15.0,
      imagemUri: 'https://raw.githubusercontent.com/vxctrr/ptimobile/main/assets/images/panquecas.png',
    },
  ];

  return (
    <View style={styles.pageContainer}>
      <View style={styles.appContainer}>
        <CardDeProduto product={products[0]} />
        <CardDeProduto product={products[1]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Cor de fundo cinza claro para a página
  },
  appContainer: {
    padding: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff', // Cor de fundo branca para o container
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caloriesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  fireIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  caloriesText: {
    fontSize: 14,
    color: '#888',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFC107',
  },
  productImage: {
    width: 100,
    height: 100,
  },
});

export default App;
