import { Input } from "../components/Input"
import { PasswordManager } from "../components/PasswordManager"
import { PasswordProvider } from '../context/passwordContext'

export const PasswordProject = () => {
  return (
    <PasswordProvider>
      <Input />
      <PasswordManager />
    </PasswordProvider>
  )
}
