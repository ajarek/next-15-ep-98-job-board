

const JobDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">Job Details: {id}</div>
  )
}

export default JobDetails