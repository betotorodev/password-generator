import { usePassword } from "../hooks/usePassword"

export const Range = () => {
  const {value, setValue} = usePassword()
  return (
    <>
      <div class='flex justify-between items-center mb-4'>
        <label class='text-lg' for='input-range'>Character Length</label>
        <span class='text-[32px] text-[var(--neon-green)]'>{value}</span>
      </div>
      <input
        onChange={(e) => {
          setValue(e.target.value)}}
        type='range'
        class='w-full'
        id='input-range'
        min='8'
        max='18'
        value={value}
        />
    </>
  )
}
