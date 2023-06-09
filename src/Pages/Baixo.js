import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Baixo = () => {
  const [dados, setDados] = useState([]);
  const [mostrarDados, setMostrarDados] = useState(false);
  const [dadosPrimeiroItem, setDadosPrimeiroItem] = useState({});

  useEffect(() => {
    fetch('https://marvinserver.onrender.com/')
      .then(response => response.json())
      .then(data => {
        setDados(data);
        if (data.length > 0) {
          setDadosPrimeiroItem(data[0]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const exibirDados = () => {
    setMostrarDados(true);
  };

  // Resto do código...

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Baixo MVB-15</Text>

      <TouchableOpacity onPress={exibirDados}>
        <Image style={styles.image} source={require('/App1/rn-app/img/1.jpg')} />
      </TouchableOpacity>

      {mostrarDados && (
        <Text style={styles.dado}>
          {JSON.stringify(dadosPrimeiroItem[1])}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown',
  },
  image: {
    height: 300,
    width: 200,
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Baixo;