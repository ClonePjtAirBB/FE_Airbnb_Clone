import { useState } from 'react';

const useAuthInput = validator => {
  const [inputData, setInputData] = useState('');

  const inputChangeHandler = event => {
    setInputData(() => event.target.value);
  };

  return {
    inputData,
    inputChangeHandler,
  };
};
export default useAuthInput;
