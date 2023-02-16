import { usePassword } from '../hooks/usePassword'

export const Generate = () => {
  const { getPassword } = usePassword()
  return (
    <button
      class='border-2 border-transparent flex justify-center items-center gap-6 w-full bg-[var(--neon-green)] brightness-90 text-[var(--dark-grey)] text-base sm:text-lg py-5 mt-8 hover:brightness-100'
      onClick={getPassword}
      >
      GENERATE
      <svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z'
        >
        </path>
      </svg>
    </button>
  )
}
