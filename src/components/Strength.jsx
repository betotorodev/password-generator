import { useColor } from "../hooks/useColor"

export const Strength = ({ item, strength }) => {
   const { color, level } = useColor({ strength })
   return <div class={`w-2.5 h-7 ${item > level ? 'border-2 border-white bg-transparent' : `border-0 ${color}`}`} />
 }
