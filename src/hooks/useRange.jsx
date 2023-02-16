import { useContext } from "preact/hooks"
import { PasswordContext } from "../context/passwordContext"

export const useRange = () => {
  const { value, setValue } = useContext(PasswordContext)

  return { value, setValue }
}
