import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./authReducer";

interface IInitialState {
  user: string;
  isFetching: boolean;
  error: boolean;
  dispatch? : React.Dispatch<A>
}
const INITIAL_STATE: IInitialState = {
  user: JSON.parse(localStorage.getItem("user") as A) ,
  isFetching: false,
  error: false,
};

 const AuthContext = createContext(INITIAL_STATE);

 const AuthContextProvider = ({ children }: A) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider}