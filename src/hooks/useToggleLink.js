import { useState } from "react";

export const useToggleLink = (initState = false) => {
  const [state, setState] = useState(initState);
  const toggle = () => {
    setState((prev) => !prev);
  };
  console.log(state);
  return [state, toggle];
};
