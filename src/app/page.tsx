'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function WelcomePage() {
  return (
    <div className="font-sans flex flex-col gap-20 items-center justify-items-center h-full p-8  sm:p-20">
      {/* Header */}
      <h1 className="text-4xl sm:text-6xl font-bold text-center text-gray-200">
        Resource Explorer
      </h1>

      {/* Image */}
      {/*<div className="w-full flex justify-center">*/}
      <Image
        width={1200}
        height={600}
        src="/rickandmortyfamily.png"
        alt="Rick And Morty Family"
        className="rounded-lg shadow-lg"
        priority
      />
      {/*</div>*/}

      {/* Button */}
      <Link href="/items" passHref>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 6, py: 2, fontSize: '1.25rem', borderRadius: 2 }}
        >
          Go to List
        </Button>
      </Link>
    </div>
  );
}
