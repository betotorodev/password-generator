import { Input } from "../components/Input"
import { PasswordProvider } from '../context/passwordContext'

export const PasswordProject = () => {
  return (
    <PasswordProvider>
      <Input />
    </PasswordProvider>
  )
}
