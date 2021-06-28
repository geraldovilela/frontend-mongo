import { createContext,useCallback, useState, useContext } from "react";
import api from "../services/ApiClient"

interface ICredentials {
  email:string;
  password:string;
}

interface IAuthState {
  token:string;
  user:object;
}

interface IAuthContext {
  name?: string;
  user: object;
  signIn(credentials:ICredentials):Promise<void>;
};

 const AuthContext = createContext<IAuthContext>({} as IAuthContext);

 const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@MyProducts:token')
    const user = localStorage.getItem('@MyProducts:user',)

    if(token && user){
      return {token, user: JSON.parse(user)}
    }

    return {} as IAuthState;
  });
  const signIn = useCallback(async({email, password})=>{
    const response = await api.post("/sessions", {
      email, 
      password
    })

    const {token, user} = response.data;

    localStorage.setItem('@MyProducts:token', token)
    localStorage.setItem('@MyProducts:user', JSON.stringify(user))

    setData({token, user})
  },[])
  
  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if(!context){
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context;
}
export {AuthProvider, useAuth}

