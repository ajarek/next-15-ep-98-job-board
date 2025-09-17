'use client'

import { Input } from './ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react'

interface SearchProps {
  query: string
}

const SelectName = ({ query }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`/jobs?${params.toString()}`)
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
  }

  return (
    <div className='relative flex items-center'>
      <Input
        type='search'
        name='name'
        placeholder='Search by name '
        className=' h-[36px] w-full rounded-full bg-secondary px-12'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get(query)?.toString()}
      />
      <Search
        className='absolute left-4 top-1/2 -translate-y-1/2 '
        size={24}
      />
    </div>
  )
}

export default SelectName
