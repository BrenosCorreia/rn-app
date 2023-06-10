import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextIns } from '../Components/TextIns';

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



  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Baixo MVB-15</Text>

      <TouchableOpacity onPress={exibirDados}>
        <Image style={styles.image} source={require('/App1/rn-app/img/1.jpg')} />
      </TouchableOpacity>

      {mostrarDados && (
        <View style={styles.dado}>
          <Text>
          <TextIns name="Corpo" dado={(dadosPrimeiroItem[1].Corpo)}/>,
          <TextIns name="Braço" dado={(dadosPrimeiroItem[1].Braço)}/>,
          <TextIns name="Escala" dado={dadosPrimeiroItem[1].Escala}/>,
          <TextIns name="Trastes" dado={dadosPrimeiroItem[1].Trastes}/>,
          <TextIns name="Tarraxas" dado={dadosPrimeiroItem[1].Tarraxas}/>,
          <TextIns name="Ponte" dado={dadosPrimeiroItem[1].Ponte}/>,
          <TextIns name="Captadores" dado={dadosPrimeiroItem[1].Captadores}/>,
          <TextIns name="Controles" dado={dadosPrimeiroItem[1].Controles}/>



          </Text>









        </View>
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