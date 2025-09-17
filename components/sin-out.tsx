import { signOut } from '@/app/api/auth/auth'
import { Button } from './ui/button'

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        await signOut()
      }}
    >
      <Button
        variant={'destructive'}
        type='submit'
        className='cursor-pointer'
      >
        Sign-out
      </Button>
    </form>
  )
}

export default SignOutButton
