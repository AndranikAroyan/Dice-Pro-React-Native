import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const diceImages = {
  1: require('./assets/inverted-dice-1.png'),
  2: require('./assets/inverted-dice-2.png'),
  3: require('./assets/inverted-dice-3.png'),
  4: require('./assets/inverted-dice-4.png'),
  5: require('./assets/inverted-dice-5.png'),
  6: require('./assets/inverted-dice-6.png'),
};

const App = () => {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
    setDiceValue(randomValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 Digital Dice 🎲</Text>
      <Image source={diceImages[diceValue]} style={styles.diceImage} />
      <Text style={styles.diceValue}>{diceValue}</Text>
      <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  diceImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  diceValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
