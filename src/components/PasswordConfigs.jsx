import { usePassword } from "../hooks/usePassword"
import { usePasswordOptions } from "../hooks/usePasswordOptions"
import { Range } from "./Range"


export const PasswordConfigs = () => {
  const { error } = usePassword()
  const { option, handleOptions } = usePasswordOptions()
  const options = [
    'Include Uppercase Letters',
    'Include Lowercase Letters',
    'Include Numbers',
    'Include Symbols'
  ] 
  return (
    <>
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
    </>
  )
}
