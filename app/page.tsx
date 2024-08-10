'use client'

import MusicItem from "@/components/MusicItem";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const collections = ['collection1', 'collection2', 'collection3', 'collection4', 'collection5', 'collection6']

  const gotoCreateSound = () => {
    router.push('/create-sound')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-y-auto overflow-x-hidden relative">
      <div className="pt-24 w-full text-center flex items-center justify-center relative">
        {/* <Image className="lg:block hidden absolute top-4 left-72" src="/images/m2.svg" alt="" width={32} height={32} />
        <Image className="lg:block hidden absolute -bottom-32 left-36" src="/images/m3.svg" alt="" width={32} height={32} />
        <Image className="lg:block hidden absolute -bottom-40 right-72" src="/images/m4.svg" alt="" width={32} height={32} />
        <Image className="lg:block hidden absolute top-1 right-72" src="/images/m1.svg" alt="" width={32} height={32} /> */}
        <span className="font-poppins font-bold lg:text-[80px] text-[30px] text-white lg:leading-[80px] leading-[30px]">AI AUDIO SAMPLES</span>
      </div>
      <div className="relative px-14 font-poppins font-bold lg:text-[80px] text-[30px] text-white text-center lg:leading-[80px] leading-[30px]">
        ON DEMAND!
        <Image src="/images/hand.svg" alt="" width={150} height={121} className="absolute -top-[10px] -right-[100px] lg:block hidden" />
      </div>
      <div className="font-poppins font-normal lg:text-[29px] text-[18px] text-[#819DF5] w-full text-center pb-14">
        UNLEASH YOUR CREATIVITY THROUGH SOUND
      </div>
      <div className="w-full text-center">
        <button onClick={gotoCreateSound} className="rounded-[45px] w-[246px] lg:py-5 py-2 text-center text-white bg-[#819DF5] font-bold text-[19px]">CREATE AUDIO</button>
      </div>
      <div className="font-poppins font-extrabold lg:text-[30px] text-[25px] text-white w-full text-center pt-32 pb-12">
        NFT SOUND LIBRARY
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap gap-5">
        {
          collections.map((collection: string, index: number) => (
            <MusicItem
              title={collection}
              image={`/images/wave.jpg`}
              avatar="/images/avatar.svg"
              key={index}
            />
          ))
        }
      </div>
      <div className="mt-12 mb-12">
        <button className="rounded-[45px] w-[246px] py-4 text-center text-white bg-[#819DF5] font-bold text-[19px]">View More</button>
      </div>
    </main>
  );
}
