import { usePassword } from "../hooks/usePassword"
import { Copy } from "./icons"

export const Input = () => {
  const { password } = usePassword()

  return (
    <div
      class='w-full h-16 sm:h-20 bg-[var(--dark-grey)] flex justify-between items-center py-5 px-4 sm:px-8'
    >
      <h1 class='text-2xl sm:text-[32px]'>{password}</h1>
      <Copy />
    </div>
  )
}
