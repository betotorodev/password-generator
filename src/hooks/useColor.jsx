import { useEffect, useState } from "preact/hooks"

export const useColor = ({ strength }) => {
  const [level, setLevel] = useState(1)
  const [color, setColor] = useState('')

   useEffect(() => {
     if (strength < 11) {
       setLevel(1)
       setColor('bg-[var(--red)]')
      } else if (strength < 14) {
        setLevel(2)
        setColor('bg-[var(--orange)]')
      } else if (strength < 16) {
        setLevel(3)
        setColor('bg-[var(--yellow)]')
      } else {
        setLevel(4)
        setColor('bg-[var(--neon-green)]')
      }
    }, [strength])

    return { level, color }
}
