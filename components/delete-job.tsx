'use client'

import { deleteJob } from '@/lib/action'
import { RippleButton } from '@/components/magicui/ripple-button'

const DeleteJob = ({ jobId }: { jobId: string }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    await deleteJob(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='hidden'
        name='_id'
        value={jobId}
      />
      <RippleButton
        type='submit'
        rippleColor='red'
        className='w-9 h-9'
      >
        ❌
      </RippleButton>
    </form>
  )
}

export default DeleteJob
