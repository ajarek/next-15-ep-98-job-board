import CardsJob from "@/components/cards-job";
import HeroSection from "@/components/hero-section";
import Jobs from '@/data/jobs.json'
export default function Home() {
const  jobsFilter=Jobs.filter(job=>job.ID<=3)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <div className="grid grid-cols-3 gap-4">
        <CardsJob  jobs={jobsFilter} />
      </div>
    </main>
  );
}
