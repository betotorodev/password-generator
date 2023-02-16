import { useEffect, useState } from "preact/hooks"
import { useRange } from "./useRange"

export const useColor = () => {
  const { value } = useRange()
  const [level, setLevel] = useState(1)
  const [color, setColor] = useState('')

   useEffect(() => {
     if (value < 11) {
       setLevel(1)
       setColor('bg-[var(--red)]')
      } else if (value < 14) {
        setLevel(2)
        setColor('bg-[var(--orange)]')
      } else if (value < 16) {
        setLevel(3)
        setColor('bg-[var(--yellow)]')
      } else {
        setLevel(4)
        setColor('bg-[var(--neon-green)]')
      }
    }, [value])

    return { level, color }
}
