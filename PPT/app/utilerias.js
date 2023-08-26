
const choices = ['piedra', 'papel', 'tijera'];

export const getComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
};

export const determineWinner = (user, computer) => {
  if (user === computer) return 'Empate!';
  if ((user === 'piedra' && computer === 'tijera') || (user === 'papel' && computer === 'piedra') || (user === 'tijera' && computer === 'papel')) {
    return '¡Ganaste!';
  } else {
    return 'Perdiste :(';
  }
};
