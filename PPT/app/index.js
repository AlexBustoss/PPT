
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useGameLogic } from './uso';

const App = () => {
  const { userChoice, computerChoice, result, onChoiceSelected } = useGameLogic();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piedra, Papel y Tijera</Text>
      <Text>Tu elección: {userChoice}</Text>
      <Text>Elección del computador: {computerChoice}</Text>
      <Text>Resultado: {result}</Text>
      <View style={styles.choices}>
        {['piedra', 'papel', 'tijera'].map((choice, index) => (
          <Button key={index} title={choice} onPress={() => onChoiceSelected(choice)} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  }
});

export default App;
