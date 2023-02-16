import { useEffect } from "preact/hooks"
import { useColor } from "../hooks/useColor"
import { usePassword } from "../hooks/usePassword"

export const Strength = ({ item }) => {
   const { color, level } = useColor()
   return <div class={`w-2.5 h-7 ${item > level ? 'border-2 border-white bg-transparent' : `border-0 ${color}`}`} />
 }
