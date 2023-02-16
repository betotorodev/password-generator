import { useContext, useEffect, useState } from "preact/hooks"
import { PasswordContext } from "../context/passwordContext"

const numbers = `0123456789`
const characters = `!@#$%^&*()_+-=[]{}|;':",.<>/?`
const letters = `abcdefghijklmnopqrstuvwxyz`

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

export const usePassword = () => {
  const { value, setValue, password, setPassword } = useContext(PasswordContext)
  const [option, setOption] = useState(PASSWORD_OPTIONS)
  const [error, setError] = useState('') 

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

  return { getPassword, handleOptions, password, value, setValue, error, option }
}
