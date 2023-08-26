
import { useState } from 'react';
import { getComputerChoice, determineWinner } from './utilerias';

export const useGameLogic = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const onChoiceSelected = (choice) => {
    const computerSelected = getComputerChoice();
    setUserChoice(choice);
    setComputerChoice(computerSelected);
    setResult(determineWinner(choice, computerSelected));
  };

  return { userChoice, computerChoice, result, onChoiceSelected };
};
