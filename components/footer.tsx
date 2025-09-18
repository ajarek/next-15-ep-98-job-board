'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

const links = [
  { title: 'Browse Jobs', href: '/jobs' },
  { title: 'Post a Job', href: '/post-job' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Price', href: '/price' },
  { title: 'About', href: '/about' },
]

export default function FooterSection() {
  const { data: session, status } = useSession()
  return (
    <div className='border-b bg-white py-8 dark:bg-transparent'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='flex flex-wrap justify-between gap-6'>
          <Link
            href='/'
            className='text-muted-foreground order-last block text-center text-sm md:order-first'
          >
            © {new Date().getFullYear()} Job Board, All rights reserved
          </Link>
          <div className='order-first flex flex-wrap justify-center gap-6 text-sm md:order-last'>
            {links
              .filter((item) =>
                !session?.user
                  ? item.title !== 'Post a Job' && item.title !== 'Dashboard'
                  : true
              )
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='text-muted-foreground hover:text-primary block duration-150'
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
