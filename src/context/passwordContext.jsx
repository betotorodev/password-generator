import { createContext } from "preact";
import { useState } from "preact/hooks";

export const PasswordContext = createContext()

const PASSWORD_OPTIONS = {
  0: {
    type: 'uppercase',
    isActive: false,
  },
  1: {
    type: 'lowercase',
    isActive: false
  },
  2: {
    type: 'numbers',
    isActive: false
  },
  3: {
    type: 'symbols',
    isActive: false
  }
}

export const PasswordProvider = ({ children }) => {
  const [value, setValue] = useState(8)
  const [password, setPassword] = useState('password')
  const [option, setOption] = useState(PASSWORD_OPTIONS)
  const [error, setError] = useState('')

  return <PasswordContext.Provider value={{value, setValue, password, setPassword, option, setOption, error, setError}}>
    {children}
  </PasswordContext.Provider>
}