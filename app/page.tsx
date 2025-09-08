import CardsJob from '@/components/cards-job'
import HeroSection from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import Jobs from '@/data/jobs.json'
import { ArrowBigRight } from 'lucide-react'

import * as motion from 'motion/react-client'
import Link from 'next/link'
export default function Home() {
  const jobsFilter = Jobs.filter((job) => job.ID <= 3)
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ scale: 1 }}
        whileInView={{ opacity: 1 }}
        layout
        transition={{ duration: 0.5 }}        
        className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4  '
      >
        <CardsJob jobs={jobsFilter} name=''/>
      </motion.div>
      <div className='flex justify-center mt-8'>
        <Button
          asChild
          variant='link'
          className='w-full text-blue-500'
        >
          <Link
            href={`/jobs`}
            className='flex items-center gap-2   hover:underline transition-all duration-300 delay-200   '
          >
            View All Jobs
            <ArrowBigRight />
          </Link>
        </Button>
      </div>
    </main>
  )
}
