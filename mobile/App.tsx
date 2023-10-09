import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [result, setResult] = useState('');
  
  const calculate = () => {
    const finalBill = parseFloat(bill);
    const finalTip = parseFloat(tip);
    const finalResult = (finalBill * (finalTip/100));

    if(!isNaN(finalBill) && !isNaN(finalTip)){
      setResult(finalResult.toFixed(2));
    }else{
      setResult('0');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tip Calculator</Text>
      <Text style={styles.subtitulo}>Enter the bill and tip percentage.</Text>
      <Text style={styles.perguntas}>Bill amount:</Text>
      <TextInput
        value={bill}
        onChangeText={(e) => setBill(e)}
        keyboardType='numeric'
        placeholder='Whats your bill amount?'
      />
      <Text style={styles.perguntas}>Write your tip percentage (%):</Text>
      <TextInput
        value={tip}
        onChangeText={(e)=> setTip(e)}
        keyboardType='numeric'
        placeholder='Whats your tip percentage?'
      />
      <TouchableOpacity onPress={calculate}>
        <Text style={styles.botao}>Calculate</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>Total: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5dc11b33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginBottom: 10,
  },
  subtitulo: {
    margin: 10,
  },
  perguntas: {
    margin: 10,
  },
  botao: {
    margin: 10,
  },
  resultado: {
    margin: 10,
  }
});
