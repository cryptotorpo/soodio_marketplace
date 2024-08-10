import { ReactNode } from "react";
import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    name: string;
    id: string;
    image: string;
}
export default function NFT ({ image, name, id }: Props) {
    return (
        <div className="lg:w-[391px] lg:h-[389px] w-[320px] h-[310px] relative mb-7">
            <div className="lg:w-[367px] lg:h-[355px] w-[297px] h-[276px] border-l-[1.5px] border-b-[1.5px] border-white border-solid absolute bottom-0 left-0"></div>
            <div className="absolute right-0 top-0 lg:w-[351px] w-[298px] lg:h-[293px] h-[230px]">
                <Image className="h-full w-full" src={image} alt="" width={351} height={293} />
                <button className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                    <Image src="/images/nftPlay.svg" alt="play" width={48} height={48} />
                </button>
            </div>
            <div className="absolute lg:bottom-9 bottom-7 lg:left-9 left-5 w-[80%]">
                <div className="flex flex-row items-center justify-between w-full">
                    <span className={`font-semibold ${inter.className} lg:text-2xl text-xl text-white`}>{name}</span>
                    <span className={`font-normal ${inter.className} lg:text-lg text-md text-white`}>NFT ID: {id}</span>
                </div>
            </div>
            <div className="w-4 border-t-[1.5px] absolute top-[33px] left-0"></div>
            <div className="h-16 border-r-[1.5px] absolute bottom-0 right-[23px]"></div>
        </div>
    )
}