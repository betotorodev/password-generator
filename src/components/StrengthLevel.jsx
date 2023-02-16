import { Strength } from "./Strength"

export const StrengthLevel = () => {
  return (
      <section
      class='flex justify-between mt-8 px-8 py-6 w-100 bg-[var(--very-dark-grey)]'
    >
      <h3 class='text-lg text-[var(--grey)]'>STRENGTH</h3>
      <div class='flex gap-4'>
        <h2 class='text-2xl'>MEDIUM</h2>
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
