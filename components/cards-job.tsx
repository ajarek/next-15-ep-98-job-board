import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

const CardsJob = ({ jobs }: CardJobProps) => {
  return (
    <>
      {jobs.map((job) => (
        <Card key={job.ID}>
          <CardHeader>
            <CardTitle>{job.PositionName}</CardTitle>
            <CardDescription>{job.JobDescription}</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>{job.JobType}</p>
            <p>{job.Salary}</p>
            <p>{job.Location}</p>
          </CardContent>
          <CardFooter>
            <p>{job.Published}</p>
            <p>{job.WhoPublished}</p>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default CardsJob