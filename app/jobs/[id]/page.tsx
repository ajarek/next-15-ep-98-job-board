import ButtonApply from '@/components/button-apply'
import Jobs from '@/data/jobs.json'
import * as motion from 'motion/react-client'

const JobDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const job = Jobs.find((job) => job.ID === +id)

  if (!job) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        Job not found
      </div>
    )
  }
  return (
    <div className='  min-h-screen  flex flex-col items-center justify-center p-4 '>
      <motion.div initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                        duration: 1.2,
                        type: 'spring',
                        bounce: 0.3,
                      }} className='w-full max-w-2xl border-2 border-gray-300 rounded-lg shadow-md p-4 space-y-4 '>
        <h1 className='text-2xl font-bold'>{job.PositionName}</h1>
        <div className='flex items-center justify-between gap-2'>
          <p>{job.JobType}</p>
          <p>{job.Location}</p>
          <p>{job.Salary}</p>
        </div>
        <p>{job.JobDescription}</p>
        <div className='flex items-center justify-between gap-2'>

        <p>{job.Published}</p>
        <p>Posted by {job.WhoPublished}</p>

        </div>
     <ButtonApply />
      </motion.div>
    </div>
  )
}

export default JobDetails
