import { useColor } from "../hooks/useColor"
import { Strength } from "./Strength"

export const StrengthLevel = () => {
  const { levelText } = useColor()
  return (
      <section
      class='flex justify-between items-center mt-8 px-4 sm:px-8 py-5 sm:py-6 w-100 bg-[var(--very-dark-grey)]'
    >
      <h3 class='text-base sm:text-lg text-[var(--grey)]'>STRENGTH</h3>
      <div class='flex gap-4'>
        <h2 class='text-lg sm:text-2xl'>{levelText}</h2>
        <div class='flex gap-2'>
          { 
            [1, 2, 3, 4].map((item) => (
              <Strength item={item} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
