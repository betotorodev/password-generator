import { usePassword } from "../hooks/usePassword"
import { Copy } from "./icons"
import { Range } from "./Range"
import { Strength } from "./Strength"

export const Input = () => {
  const { getPassword, handleOptions, password, error, option } = usePassword()

  const options = [
    'Include Uppercase Letters',
    'Include Lowercase Letters',
    'Include Numbers',
    'Include Symbols'
  ]

  return (
    <>
      <main class='text-center w-full'>
        <h2 class='text-2xl text-[var(--grey)] mb-8'>Password Generator</h2>
        <div
          class='w-full h-20 bg-[var(--dark-grey)] flex justify-between items-center py-5 px-8'
        >
          <h1 class='text-[32px]'>{password}</h1>
          <Copy />
        </div>
        <section class='text-left mt-6 w-full bg-[var(--dark-grey)] py-5 px-8'>
        <Range />
          <ul class='mt-8'>
            {
              options.map((item, index) => (
                <li class='flex gap-6 mb-5 items-center'>
                  <div class='relative' onClick={() => handleOptions(index)}>
                    <div class={`w-5 h-5 border-2  ${option[index].isActive ? 'bg-[var(--neon-green)] border-[var(--neon-green)]': 'border-white'}`} />
                    <svg class='absolute top-1 left-[3px]' width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>
                  </div>
                  <p>{item}</p>
                </li>
              ))
            }
          </ul>
          {!!error && <span class='text-[var(--red)]'>{error}</span>}
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
          <button
            class='border-2 border-transparent flex justify-center items-center gap-6 w-full bg-[var(--neon-green)] brightness-90 text-[var(--dark-grey)] text-lg py-5 mt-8 hover:brightness-100'
            onClick={getPassword}
            >GENERATE
            <svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z'
              >
              </path>
            </svg>
          </button>
        </section>
      </main>
    </>
  )
}
