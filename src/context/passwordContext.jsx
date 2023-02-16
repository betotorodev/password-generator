import { createContext } from "preact";
import { useState } from "preact/hooks";

export const PasswordContext = createContext()


export const PasswordProvider = ({ children }) => {
  const [value, setValue] = useState(8)
  const [password, setPassword] = useState('password')

  return <PasswordContext.Provider value={{value, setValue, password, setPassword}}>
    {children}
  </PasswordContext.Provider>
}