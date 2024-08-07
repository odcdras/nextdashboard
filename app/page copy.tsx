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
      

    </main>
  );
}
