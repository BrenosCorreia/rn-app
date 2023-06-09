import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contato = () => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.texto}>Email: Marving@gmail.com</Text>
      <Text style={styles.texto}>Telefone:+55213345336</Text>
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
  texto:{
    fontWeight: 'bold',
    fontSize: 20,


  },
})
export default Contato;