import { ReactNode } from "react";
import Image from "next/image";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    name: string;
    id: string;
    image: string;
    playButton?: string;
}
export default function ModelItem({ image, name, id, playButton }: Props) {
    return (
        <div className="p-5 bg-[#151831] rounded-lg">
            <div className="w-full relative">
                <Image className="w-full" src={image} alt="" width={336} height={276} />
                <button className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                    <Image src={playButton ? playButton : '/images/nftPlay.svg'} alt="play" width={46} height={46} />
                </button>
            </div>
            <div className="flex flex-row items-center justify-between w-full mt-3">
                <span className={`font-semibold ${inter.className} lg:text-2xl text-xl text-white`}>{name}</span>
                <span className={`font-normal ${inter.className} lg:text-lg text-md text-white`}>NFT ID: {id}</span>
            </div>
            <div className="mt-5 text-left">
                <Link href={`/models/${id}`} className="rounded-[80px] py-2 px-9 text-center text-white bg-[#819DF5] font-semibold text-sm">Buy Now</Link>
            </div>
        </div>
    )
}