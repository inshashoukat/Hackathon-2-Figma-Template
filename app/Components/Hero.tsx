import Image from "next/image";

export default function Hero() {
  return (
    <div>
      {/* Main wrapper with background image */}
      <div className="relative h-screen bg-center flex items-center justify-center text-white p-5">
        {/* Fullscreen background image */}
        <Image
          className="absolute inset-0"
          src="/pictures/background-hero-img.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        {/* Content overlay */}
        <div  className="w-[643px] h-[443px] bg-[#FFF3E3]  ">
        <div className="relative z-10 text-center max-w-lg py-5 px-6 rounded-lg w-[561px] h-[344px] left-4 top-4" style={{ backgroundColor: '#FFF3E3' }} >
          <p className="text-lg md:text-xl mb-4  text-black text-left">New Arrival</p>
          <h2 className="text-[3.25rem] md:text-5xl font-bold font-[62]uppercase text-left mb-5" style={{ color:'#B88E2F' }}>Discover Our New Collection</h2>
          <p className="text-lg md:text-xl mb-6 text-black font-poppins text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          dolore</p>
          <div className="flex justify-start">
          <button className="bg-[#B88E2F] pt-4 pr-12 pb-4 pl-12 text-white w-[222] h-[74">BUY NOW</button>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
