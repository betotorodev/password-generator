import { useEffect, useState } from "preact/hooks"
import ArrowIcon from '../icons/ArrowIcon.astro'
import CopyIcon from '../icons/CopyIcon.astro'

const PASSWORD_OPTIONS = {
  0: {
    type: 'uppercase',
    isActive: false,
  },
  1: {
    type: 'lowercase',
    isActive: false
  },
  2: {
    type: 'numbers',
    isActive: false
  },
  3: {
    type: 'symbols',
    isActive: false
  }
}

export const Input = () => {
  const [value, setValue] = useState(8)
  const [password, setPassword] = useState('password')
  const [option, setOption] = useState(PASSWORD_OPTIONS)
  const [error, setError] = useState('')

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
    if (!option[0].isActive && !option[1].isActive && !option[2].isActive && !option[3].isActive) {
      setError('We need at least one option to generate your password')
      return
    } else {
      const numbersArray = option[2].isActive ? numbers.split('') : []
      const charactersArray = option[3].isActive ? characters.split('') : []
      const lettersArray = !option[0].isActive && !option[1].isActive ? [] : letters.split('').map((letter, index) => {
        if (option[0].isActive && option[1].isActive) {
          let max = letters.length - 1
          let min = 0 
          const randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
          if (randomNumber === index) {
            return letter
          } else {
            return letter.toLocaleUpperCase()
          }
        } else if (option[0].isActive && !option[1].isActive) {
          return letter.toLocaleUpperCase()
        } else {
          return letter
        }
      })
      
  
      const arrayToIterate = [...numbersArray, ...charactersArray, ...lettersArray]
      
      const passwordArray = []
      
      for (let pass = 0; pass < value; pass++) {
        let max = arrayToIterate.length - 1
        let min = 0 
        const randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
  
        passwordArray.push(arrayToIterate[randomNumber])
      }
  
      setPassword(passwordArray.join(''))
      setError('')
    }
  }

  const handleOptions = (indexOption) => {
    let copyData = Object.assign({}, option)
    let currentValue = copyData[indexOption]
    currentValue = {
      ...currentValue,
      isActive: !currentValue.isActive
    }
    copyData[indexOption] = currentValue

    setOption(copyData)
  }

  const copyClipboard = () => {
    navigator.clipboard.writeText(password)
    import('https://cdn.skypack.dev/wc-toast').then(({ toast }) =>
      toast('Copied', {
        duration: 2000,
        icon: {
          type: 'success'
        }
      })
    )
  }

  const Strength = ({ item, strength }) => {
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

     return <div class={`w-2.5 h-7 ${item > level ? 'border-2 border-white bg-transparent' : `border-0 ${color}`}`} />
   }

  return (
    <>
      <main class='text-center w-full'>
        <h2 class='text-2xl text-[var(--grey)] mb-8'>Password Generator</h2>
        <div
          class='w-full h-20 bg-[var(--dark-grey)] flex justify-between items-center py-5 px-8'
        >
          <h1 class='text-[32px]'>{password}</h1>
          <svg class='cursor-pointer' onClick={copyClipboard} width='21' height='24' xmlns='http://www.w3.org/2000/svg'>
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
                    <Strength item={item} strength={value}/>
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
