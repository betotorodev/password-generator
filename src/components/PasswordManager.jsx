import { Generate } from './Generate'
import { PasswordConfigs } from './PasswordConfigs'
import { StrengthLevel } from './StrengthLevel'

export const PasswordManager = () => {
  return (  
    <section class='text-left mt-4 sm:mt-6 w-full bg-[var(--dark-grey)] py-5 px-4 sm:px-8'>
      <PasswordConfigs />
      <StrengthLevel />
      <Generate />
    </section>
  ) 
}
