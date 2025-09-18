import RegisterForm from '@/components/register-form'

const Register = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center pt-24 px-4 sm:px-8 lg:px-24 '>
      <div className='w-full  max-w-sm flex flex-col border-2 shadow-xl gap-4 p-4 rounded-xl'>
        <h1 className='text-2xl text-center font-bold'>Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
