import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  }

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  }

  return (
    <View>
      <View style={styles.resultContainer}>
        <Text 
        style={[styles.resultText, {marginTop: 200}]}>{"Result: "+result}
        </Text>
      </View>
      <TextInput
        keyboardType='numeric'
        value={num1}
        onChangeText={text => setNum1(text)}
        placeholder="Enter first number"
        style={styles.input}
      />
      <TextInput
        keyboardType='numeric'
        value={num2}
        onChangeText={text => setNum2(text)}
        placeholder="Enter second number"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
      <Button
      title='+'
      onPress={handleAddition}
      style={[styles.button, {height: 50, width: 50, backgroundColor: '#007AFF', borderRadius: 0}]}
      />
      <Button
      title='-'
      onPress={handleSubtraction}
      style={[styles.button, {height: 50, width: 50, backgroundColor: '#007AFF', borderRadius: 0}]}
      />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  button: {
    margin: 10,
    width: '30%'
  },
  resultContainer: {
    alignSelf: 'center',
    marginTop: 20
  },
  resultText: {
    fontSize: 20
  }
});

export default Calculator;
