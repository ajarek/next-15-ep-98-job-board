import { auth } from '@/app/api/auth/auth';
import { getJobs } from '@/lib/action';
import { redirect } from 'next/navigation';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowBigRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Dashboard = async () => {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }
  const jobsResult = await getJobs();
  console.log(jobsResult);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-8 lg:px-24 '>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4  '>
        {jobsResult.jobs && Array.isArray(jobsResult.jobs) ? (
          jobsResult.jobs.map((job) => (
            <Card key={job._id} className=''>
                      <CardHeader>
                        <CardTitle className='text-xl font-bold'>{job.PositionName}</CardTitle>
                        
                        
                      </CardHeader>
                      <CardContent>
                        <p>{job.JobType}</p>
                        <p>{job.Salary}</p>
                        <p>{job.Location}</p>
                      </CardContent>
                      <CardFooter className="relative flex flex-col gap-4">
                        <div className='w-full flex items-center justify-start gap-2 '>
                        <p>{job.Published.toLocaleDateString("pl-PL")}</p>
                        <p>{job.WhoPublished}</p>
            
            
                        </div>
                       <Button asChild variant="link" className="w-full text-blue-500">
                          <Link href={`/jobs/${job._id}`} className="flex items-center gap-2   hover:underline transition-all duration-300 delay-200   ">View Details<ArrowBigRight/></Link>
                       </Button>
                      </CardFooter>
                    </Card>
          ))
        ) : (
          <li className='py-2 text-red-500'>
            {jobsResult.message || 'No jobs found.'}
          </li>
        )}
      </div>
    </div>
  )
}

export default Dashboard