import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import TopNav from '@/app/ui/dashboard/topnav';
import { MainPageSection } from '@/app/ui/mainpagesection';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
               
        <div className="flex w-full flex-none md:w-64">
          <TopNav />
        </div>
      </div>
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
           <div className="relative px-8" data-agility-component="106">
            <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
              <div className="md:w-6/12 flex-shrink-0 relative " data-agility-field="image">
              <a className="relative" href="/blog">
              
              </a>
                </div>
                <div className="md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
                
                <div className="g:py-8 text-center md:text-left">
                  <div data-agility-field="tagline" className="font-bold text-primary-500 text-sm text-center md:text-left uppercase py-1">Wander The World</div>
                  <h2 data-agility-field="title" className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left">From short breaks to long adventures</h2>
                  <p data-agility-field="content" className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">Travel blog featuring travel tips, guides, and photography from around the world. Whether you need guidance for your first trip, or you're a seasoned traveler looking for destination inspiration, you've come to the right place!</p>
                  <a data-agility-field="primaryButton" title="Read our blog" target="_self" className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150" href="/blog">Read our blog</a>
                  </div>
                </div>
                  </div>
                  </div>
          
        </div>
        
      </div>
    </main>
  );
}
