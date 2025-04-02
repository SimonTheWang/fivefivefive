import { Link } from "@heroui/link";
import Image from "next/image";


const gridBackground = {
  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
  backgroundSize: '20px 20px',
  backgroundPosition: '0 0'
};

export default function Home() {
  return (
    <div style={gridBackground} className="min-h-screen w-full flex flex-col items-center justify-center ">
      <div className="flex flex-col w-[25vw] items-start justify-center">
        <div className="mt-20 items-start mb-10">
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
            <Link href="https://twitter.com/555mtl" underline="always" rel="noopener noreferrer" className="text-blue-500 hover:text-white transition-opacity">
              twitter
            </Link>
            <Link href="https://lu.ma/555mtl" underline="always" rel="noopener noreferrer" className="text-blue-500 hover:text-white transition-opacity">
              luma
            </Link>
            <Link href="https://instagram.com/555_mtl" underline="always" rel="noopener noreferrer" className="text-blue-500 hover:text-white transition-opacity">
              instagram
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
