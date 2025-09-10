import { auth } from '@/app/api/auth/auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-8 lg:px-24 '>Dashboard</div>
  )
}

export default Dashboard