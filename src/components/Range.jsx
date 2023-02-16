import { useRange } from "../hooks/useRange"

export const Range = () => {
  const {value, setValue} = useRange()
  return (
    <>
      <div class='flex justify-between items-center mb-4'>
        <label class='text-base sm:text-lg' for='input-range'>Character Length</label>
        <span class='text-2xl sm:text-[32px] text-[var(--neon-green)]'>{value}</span>
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
