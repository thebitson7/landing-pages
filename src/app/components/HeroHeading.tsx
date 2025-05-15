'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroHeading() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-16 sm:py-20 lg:py-32 text-center">
      <h1
        className="text-[#171717] font-extrabold leading-tight
                   text-[36px] sm:text-[48px] md:text-[60px] lg:text-[81px]
                   max-w-[1220px] tracking-tight"
      >
        Nutrition Built For Your Biology
      </h1>

      <p
        className="mt-6 max-w-[634px] text-[14px] sm:text-[15px] md:text-[16px]
                   leading-7 sm:leading-8 text-[#171717b3] font-normal"
      >
        The world’s first AI nutrition platform that adapts to your body, not the average one.
        <br />
        Eat better. Recover faster. Optimize everything.
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center items-center">
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/appstore.png"
            alt="Download on the App Store"
            width={171}
            height={58}
            className="transition-transform duration-300 hover:scale-105 w-[140px] sm:w-[160px] lg:w-[171px]"
          />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/googleplay.png"
            alt="Get it on Google Play"
            width={171}
            height={58}
            className="transition-transform duration-300 hover:scale-105 w-[140px] sm:w-[160px] lg:w-[171px]"
          />
        </Link>
      </div>
    </section>
  );
}
