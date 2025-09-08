import Jobs from '@/data/jobs.json'
import * as motion from 'motion/react-client'
import CardsJob from '@/components/cards-job'
import SelectName from '@/components/select-name'


const JobsPage = async ({searchParams,}: {searchParams: Promise<{ name?: string }>}) => {
  const { name } = await searchParams as string | any
  return (
    <div className='flex min-h-screen flex-col items-center justify-between py-24 px-4 sm:px-8 lg:px-24'>
      <SelectName query='name' />
       <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ scale: 1 }}
              whileInView={{ opacity: 1 }}
              layout
              transition={{ duration: 0.5 }}        
              className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4  '
            >
              <CardsJob jobs={Jobs} name={name} />
            </motion.div>
    </div>
  )
}

export default JobsPage