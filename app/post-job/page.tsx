import PostJobForm from '@/components/post-job-form'

const PostJob = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between pt-24 px-4 sm:px-8 lg:px-24'>
      <div className='w-full  max-w-sm flex flex-col border-2 shadow-xl gap-4 p-4 rounded-xl'>
        <h1 className='text-2xl text-center font-bold'>Post Job</h1>
        <PostJobForm />
      </div>
    </div>
  )
}

export default PostJob
