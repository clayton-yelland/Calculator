import { useState } from "react";

export const useCaluculator = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();

  const [operator, setOperator] = useState();

  const [ansValue, setAnsValue] = useState();

  return {
    number1: {
      get: () => number1,
      set: () => setNumber1
    },
    number2: {
      get: () => number2,
      set: () => setNumber2
    },
    operator: {
      get: () => operator,
      set: () => setOperator
    },
    ansValue: {
      get: () => ansValue,
      set: () => setAnsValue
    }
  };
};
