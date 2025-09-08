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
import { Button } from "./ui/button"

type JobProps = {
  ID: number
  PositionName: string
  JobType: string
  Salary: string
  JobDescription: string
  Location: string
  Published: string
  WhoPublished: string
}

type CardJobProps = {
  jobs: JobProps[]
}

const CardsJob = ({ jobs, name }: { jobs: JobProps[]; name: string }) => {
  return (
    <>
      {jobs
      .filter((item) =>
            name
              ? item.PositionName.toLowerCase().includes(name.toLowerCase()) 
                
              : true
          )
      .map((job) => (
        <Card key={job.ID} className=''>
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
            <p>{job.Published}</p>
            <p>{job.WhoPublished}</p>


            </div>
           <Button asChild variant="link" className="w-full text-blue-500">
              <Link href={`/jobs/${job.ID}`} className="flex items-center gap-2   hover:underline transition-all duration-300 delay-200   ">View Details<ArrowBigRight/></Link>
           </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default CardsJob