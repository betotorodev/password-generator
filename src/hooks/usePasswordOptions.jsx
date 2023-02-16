import { useContext } from "preact/hooks"
import { PasswordContext } from "../context/passwordContext"

export const usePasswordOptions = () => {
  const { option, setOption } = useContext(PasswordContext)

  const handleOptions = (indexOption) => {
    let copyData = Object.assign({}, option)
    let currentValue = copyData[indexOption]
    currentValue = {
      ...currentValue,
      isActive: !currentValue.isActive
    }
    copyData[indexOption] = currentValue

    setOption(copyData)
  }

  return { option, handleOptions }
}
