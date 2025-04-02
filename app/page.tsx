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
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div style={gridBackground} className="absolute inset-0" />
      <div className="flex flex-col w-[40vw] items-start justify-center relative z-10">
        <div className="mt-10 items-start mb-10">
          <Image
            src="/555_logo_white.svg"
            alt="555 Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
        <div className="mt-12 w-full">
          <div className="flex flex-row space-x-8">
            <Link href="https://twitter.com/555mtl" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-white bg-white bg-opacity-20 border-green-500 hover:text-black"
              >
                twitter
              </Button>
            </Link>
            <Link href="https://lu.ma/555mtl" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-white bg-white bg-opacity-20 border-green-500 hover:text-black"
              >
                luma
              </Button>
            </Link>
            <Link href="https://instagram.com/555_mtl" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-white bg-white bg-opacity-20 border-green-500 hover:text-black"
              >
                instagram
              </Button>
            </Link>
          </div>
          <div className="mt-12 w-full mb-12">
        <div className="mt-8 w-full">
          <p className="text-normal tracking-wide text-white">
            We're a community, a hub, a space carved out for the dreamers, the makers, the visionaries of Montreal. 
            <br /><br />
            We believe in collaboration, in the power of shared vision. We're building a space where ideas collide, where inspiration flows freely, and where creation takes form.
            <br /><br />
            Whether you're a painter, a musician, a writer, a designer, or anything in between, 555 is your home. We're here to inspire, to support, and to provide the space you need to bring your wildest ideas to life.
            <br /><br />
            Montreal's creative canvas.
          </p>
        </div>


          {/* <iframe
            src="https://lu.ma/embed/calendar/cal-u4vFww6U9nIlZ3E/events"
            width="600"
            height="250"
            frameBorder="0"
            style={{ border: '2px solid rgba(0, 0, 0, 1)', borderRadius: '10px' }}
            allowFullScreen={true}
            aria-hidden={false}
            tabIndex={0}>

            </iframe> */}

          </div>
        </div>
      </div>
    </div>
     
  );
}
