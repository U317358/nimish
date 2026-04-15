

import { createContext, useReducer } from "react";

export const FormContext = createContext();

const initialState = {
  name: "",
  email: "",
  number:""
};

function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};