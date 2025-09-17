'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { postJob } from '@/lib/action'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const formSchema = z.object({
  PositionName: z.string().min(1, { message: 'PositionName is required' }),
  JobType: z.string().min(1, 'JobType is required'),
  Salary: z.string().min(1, 'Salary is required'),
  JobDescription: z.string().min(1, 'JobDescription is required'),
  Location: z.string().min(1, 'Location is required'),
})

const PostJobForm = () => {
  const { data: session, status } = useSession()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      PositionName: '',
      JobType: '',
      Salary: '',
      JobDescription: '',
      Location: '',
    },
  })

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {
      const JobData = {
        PositionName: formData.PositionName as string,
        JobType: formData.JobType as string,
        Salary: formData.Salary as string,
        JobDescription: formData.JobDescription as string,
        Location: formData.Location as string,
        WhoPublished: session?.user?.name ?? '',
        Published: new Date() as Date,
      }

      await postJob(JobData)
    } catch (error) {
      console.error(error)
    } finally {
      redirect('/jobs')
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <FormField
          control={form.control}
          name='PositionName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position Name</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Software Engineer'
                  {...field}
                />
              </FormControl>
              <FormDescription>Position Name must correct.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='JobType'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Type</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Full-time'
                  {...field}
                />
              </FormControl>
              <FormDescription>Job Type must correct.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='Salary'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='100000'
                  {...field}
                />
              </FormControl>
              <FormDescription>Salary must correct.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='JobDescription'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Job Description'
                  {...field}
                />
              </FormControl>
              <FormDescription>Job Description must correct.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='Location'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Location'
                  {...field}
                />
              </FormControl>
              <FormDescription>Location must correct.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='w-full cursor-pointer'
        >
          {status === 'loading' ? 'Posting Job...' : 'Post Job'}
        </Button>
      </form>
    </Form>
  )
}

export default PostJobForm
