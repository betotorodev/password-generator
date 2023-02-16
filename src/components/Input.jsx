import { usePassword } from "../hooks/usePassword"
import { Copy } from "./icons"

export const Input = () => {
  const { password } = usePassword()

  return (
    <div
      class='w-full h-20 bg-[var(--dark-grey)] flex justify-between items-center py-5 px-8'
    >
      <h1 class='text-[32px]'>{password}</h1>
      <Copy />
    </div>
  )
}
