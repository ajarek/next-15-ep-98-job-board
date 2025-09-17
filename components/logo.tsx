import Image from 'next/image'

export const Logo = () => {
  return (
    <div>
      <Image
        src='/logo.png'
        alt='logo'
        width={57}
        height={40}
      />
    </div>
  )
}
