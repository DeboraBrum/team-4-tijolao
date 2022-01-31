import { createContext } from "react";
import useAuthProvider from '../hooks/useAuthProvider';

const AuthContext = createContext();

export function AuthContextProvider(props){
  const valuesProvider = useAuthProvider();
  return (
    <AuthContext.Provider values={valuesProvider}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
