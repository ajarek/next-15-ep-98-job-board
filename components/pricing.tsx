'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function Pricing() {
  const router = useRouter()
  return (
    <section className=' '>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mx-auto max-w-2xl space-y-6 text-center'>
          <h1 className='text-center text-4xl font-semibold lg:text-5xl'>
            Pricing that Scales with You
          </h1>
          <p>
            The job posting here ensures a large influx of suitable offers,
            candidates with high qualifications and relevant experience. Choose
            the right financial plan for you.
          </p>
        </div>

        <div className='mt-8 grid gap-6 md:mt-20 md:grid-cols-3'>
          <Card className='flex flex-col'>
            <CardHeader>
              <CardTitle className='font-medium'>Free</CardTitle>
              <span className='my-3 block text-2xl font-semibold'>$0 / mo</span>
              <CardDescription className='text-sm'>Per editor</CardDescription>
            </CardHeader>

            <CardContent className='space-y-4'>
              <hr className='border-dashed' />

              <ul className='list-outside space-y-3 text-sm'>
                {[
                  'Ad valid for 7 days',
                  '5GB Cloud Storage',
                  'Email and Chat Support',
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-center gap-2'
                  >
                    <Check className='size-3' />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className='mt-auto'>
              <Button
                onClick={() => {
                  toast.success(
                    'Congratulations! You have a 7-day subscription.'
                  )
                  setTimeout(() => {
                    router.push('/jobs')
                  }, 2000)
                }}
                variant='outline'
                className='w-full'
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>

          <Card className='relative'>
            <span className='bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5'>
              Popular
            </span>

            <div className='flex flex-col'>
              <CardHeader>
                <CardTitle className='font-medium'>Pro</CardTitle>
                <span className='my-3 block text-2xl font-semibold'>
                  $19 / mo
                </span>
                <CardDescription className='text-sm'>
                  Per editor
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-4'>
                <hr className='border-dashed' />
                <ul className='list-outside space-y-3 text-sm'>
                  {[
                    'Advertising valid for 30 days',
                    '5 GB cloud storage',
                    'Email and chat support',
                    'Community forum access',
                    'Single user access',
                    'Mobile app access',
                    '1 custom report per month',
                    'Standard security features',
                  ].map((item) => (
                    <li
                      key={item}
                      className='flex items-center gap-2'
                    >
                      <Check className='size-3' />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => {
                    toast.success(
                      'Congratulations! You have a 30-day subscription.'
                    )
                    setTimeout(() => {
                      router.push('/jobs')
                    }, 2000)
                  }}
                  variant='outline'
                  className='w-full mt-2'
                >
                  Get Started
                </Button>
              </CardFooter>
            </div>
          </Card>

          <Card className='flex flex-col'>
            <CardHeader>
              <CardTitle className='font-medium'>Startup</CardTitle>
              <span className='my-3 block text-2xl font-semibold'>
                $29 / mo
              </span>
              <CardDescription className='text-sm'>Per editor</CardDescription>
            </CardHeader>

            <CardContent className='space-y-4'>
              <hr className='border-dashed' />

              <ul className='list-outside space-y-3 text-sm'>
                {[
                  'Advertisement valid for 3 months',
                  'Everything in the Pro plan',
                  '5 GB cloud storage',
                  'Email and chat support',
                ].map((item) => (
                  <li
                    key={item}
                    className='flex items-center gap-2'
                  >
                    <Check className='size-3' />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className='mt-auto'>
              <Button
                onClick={() => {
                  toast.success(
                    'Congratulations! You have a 3-month subscription.'
                  )
                  setTimeout(() => {
                    router.push('/jobs')
                  }, 2000)
                }}
                variant='outline'
                className='w-full'
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
