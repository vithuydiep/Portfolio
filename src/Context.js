import { createContext, useReducer } from "react";

export const themContext = createContext();

const initState = { darkMode: false };
const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initState);
  return (
    <themContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themContext.Provider>
  );
};
