import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [bgColor, setBgColor] = useState('#000000'); // Default background color

  useEffect(() => {
    // You can set the background color here if you know it
    // Or implement logic to extract color from the logo if needed
    setBgColor('#121212'); // Replace with your logo's background color
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Head>
        <title>Coming Soon</title>
      </Head>
      <main className="flex flex-col items-center justify-center">
        <div className="mb-8">
          <Image 
            src="/logo.png" // Update with your actual logo filename
            alt="Logo"
            width={200}
            height={200}
            priority
          />
        </div>
        <h1 className="text-white text-2xl">coming soon ...</h1>
      </main>
    </div>
  );
} 