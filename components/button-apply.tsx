'use client'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const ButtonApply = () => {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        toast.success('Application submitted successfully!')
        setTimeout(() => {
          router.push('/jobs')
        }, 2000)
      }}
      className='w-full cursor-pointer'
    >
      Apply Now
    </Button>
  )
}

export default ButtonApply
