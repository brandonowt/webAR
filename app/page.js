'use client';
import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import ARViewer with SSR disabled
const ARViewer = dynamic(() => import('./components/ARViewer'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center w-[60%]">
        <ARViewer />
      </div>
    </main>
  );
}
