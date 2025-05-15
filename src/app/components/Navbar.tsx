'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full flex justify-center px-4 py-4 md:py-6">
      <nav
        className="w-full max-w-[1536px] h-[83px] flex items-center justify-between 
                   px-6 md:px-10 rounded-full border-2 border-white 
                   backdrop-blur-sm shadow-[0px_0px_63px_2px_rgba(0,0,0,0.04)] 
                   bg-white/10"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/svg/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </Link>

        <button
          className="text-white text-sm md:text-base font-medium px-5 md:px-6 py-2 rounded-full
                     transition-all duration-200 hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #0F3DFB 0%, #C8D3FF 100%)',
          }}
        >
          Sign Up
        </button>
      </nav>
    </header>
  );
}
