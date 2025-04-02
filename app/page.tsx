import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import Image from "next/image";


const gridBackground = {
  backgroundImage: `linear-gradient(to right, rgba(0, 255, 183, 0.2) 0.3px, transparent 0.4px),
    linear-gradient(to bottom, rgba(0, 255, 183, 0.2) 0.3px, transparent 0.4px)`,
  backgroundSize: '20px 20px',
  backgroundPosition: '0 0',
  transform: 'perspective(800px) rotateX(75deg)',
  transformOrigin: 'center top',
  opacity: 1
};

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div style={gridBackground} className="absolute inset-0" />
      </div>
      <div className="flex flex-col w-[90vw] md:w-[40vw] items-start relative z-10 py-4 md:py-8 px-4 md:px-0">
        <div className="items-start">
          <Image
            src="/555_logo_white.svg"
            alt="555 Logo"
            width={80}
            height={80}
            className="mx-auto md:w-[100px] md:h-[100px]"
          />
        </div>
        <div className="mt-4 md:mt-6 w-full">
          <div className="flex flex-row space-x-4 md:space-x-8">
            <Link href="https://twitter.com/555mtl" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-white bg-white bg-opacity-20 border-green-500 hover:text-black text-sm md:text-base"
              >
                twitter
              </Button>
            </Link>
            <Link href="https://lu.ma/555mtl" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-white bg-white bg-opacity-20 border-green-500 hover:text-black text-sm md:text-base"
              >
                luma
              </Button>
            </Link>
            <Link href="https://instagram.com/555_mtl" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-white bg-white bg-opacity-20 border-green-500 hover:text-black text-sm md:text-base"
              >
                instagram
              </Button>
            </Link>
          </div>
          <div className="mt-4 md:mt-6 w-full">
            <div className="w-full">
              <p className="text-sm md:text-normal tracking-wide text-white leading-relaxed">
                We're a community, a hub, a space carved out for the dreamers, the makers, the visionaries of Montreal. 
                <br /><br />
                We believe in collaboration, in the power of shared vision. We're building a space where ideas collide, where inspiration flows freely, and where creation takes form.
                <br /><br />
                Whether you're a painter, a musician, a writer, a designer, or anything in between, 555 is your home. We're here to inspire, to support, and to provide the space you need to bring your wildest ideas to life.
                <br /><br />
                Montreal's creative canvas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
