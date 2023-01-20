import { useReducer,createContext, useEffect } from "react";
import AuthReducers from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")) ,
  isLoading: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducers, INITIAL_STATE);

  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(state.currentUser));
  },[state.currentUser])

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        isLoading: state.isLoading,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
