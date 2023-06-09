import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.conteiner}>
      
      <Image source={require('/App1/rn-app/img/MarvinG.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown'

  },
})

export default Home;