import { useState } from "preact/hooks"
import ArrowIcon from '../icons/ArrowIcon.astro'
import CopyIcon from '../icons/CopyIcon.astro'

export const Input = () => {
  const [value, setValue] = useState(8)
  const [password, setPassword] = useState('')

  const options = [
    'Include Uppercase Letters',
    'Include Lowercase Letters',
    'Include Numbers',
    'Include Symbols'
  ]
  
  const numbers = `0123456789`
  const characters = `!@#$%^&*()_+-=[]{}|;':",.<>/?`
  const letters = `abcdefghijklmnopqrstuvwxyz`

  const getPassword= () => {
    const numbersArray = numbers.split('')
    const charactersArray = characters.split('')
    const lettersArray = letters.split('')
  
    const arrayToIterate = [...numbersArray, ...charactersArray, ...lettersArray]

    const passwordArray = []

    for (let pass = 0; pass < value; pass++) {
      let max = arrayToIterate.length - 1
      let min = 0 
      const randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);

      passwordArray.push(arrayToIterate[randomNumber])
    }

    setPassword(passwordArray.join(''))
  }

  return (
    <>
      <main class='text-center w-full'>
        <h2 class='text-2xl text-[var(--grey)] mb-8'>Password Generator</h2>
        <div
          class='w-full h-20 bg-[var(--dark-grey)] flex justify-between items-center py-5 px-8'
        >
          <h1 class='text-[32px]'>{password}</h1>
          <svg width='21' height='24' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z'
            fill='#A4FFAF'></path>
        </svg>
        </div>
        <section class='text-left mt-6 w-full bg-[var(--dark-grey)] py-5 px-8'>
        <div class='flex justify-between items-center mb-4'>
          <label class='text-lg' for='input-range'>Character Length</label>
          <span class='text-[32px] text-[var(--neon-green)]'>{value}</span>
        </div>
        <input
          onChange={(e) => setValue(e.target.value)}
          type='range'
          class='w-full'
          id='input-range'
          min='8'
          max='18'
          value={value}
          />
          <ul class='mt-8'>
            {
              options.map((item) => (
                <li class='flex gap-6 mb-5 items-center'>
                  <div class='w-5 h-5 border-2 border-white' />
                  <p>{item}</p>
                </li>
              ))
            }
          </ul>
          <section
            class='flex justify-between mt-8 px-8 py-6 w-100 bg-[var(--very-dark-grey)]'
          >
            <h3 class='text-lg text-[var(--grey)]'>STRENGTH</h3>
            <div class='flex gap-4'>
              <h2 class='text-2xl'>MEDIUM</h2>
              <div class='flex gap-2'>
                {
                  [1, 2, 3, 4].map((item) => (
                    <div class='w-2.5 h-7 border-2 border-white' />
                  ))
                }
              </div>
            </div>
          </section>
          <button
            class='flex justify-center items-center gap-6 w-full bg-[var(--neon-green)] text-[var(--dark-grey)] text-lg py-5 mt-8'
            onClick={getPassword}
            >GENERATE
            <svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#24232C'
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
