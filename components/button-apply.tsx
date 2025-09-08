'use client'
import { toast } from 'sonner'
import { Button } from './ui/button'

const ButtonApply = () => {
  return (
    <Button
      onClick={() => toast.success('Application submitted successfully!')}
      className='w-full cursor-pointer'
    >
      Apply Now
    </Button>
  )
}

export default ButtonApply
