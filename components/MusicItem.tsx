'use client'

import Image from "next/image";
import { Inter } from "next/font/google";
import { AiFillCaretRight, AiOutlineDownload } from "react-icons/ai";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    title: string;
    image: string;
    avatar?: string;
}
export default function MusicItem({ image, title, avatar }: Props) {
    const router = useRouter()
    const gotoNftList = () => {
        router.push('/models')
    }
    return (
        <div className="w-full rounded-lg p-5 relative bg-[#151831]">
            {
                avatar ?
                    <button className="absolute top-7 left-7">
                        <Image src={avatar} alt="avatar" width={56} height={56} />
                    </button> : null
            }
            <Image className="w-full" src={image} alt="" width={336} height={276} />
            <div className="flex flex-row items-center justify-between w-full mt-3">
                <div className={`font-semibold ${inter.className} lg:text-[21.97px] text-[16px] text-white`}>{title}</div>
                <div className="flex flex-row items-center">
                    <button className="bg-black rounded-[100%] p-1">
                        <AiFillCaretRight color="white" fontSize={26} />
                    </button>
                    <button className="ml-2 bg-black rounded-[100%] p-1" onClick={gotoNftList}>
                        <AiOutlineDownload color="white" fontSize={26} />
                    </button>
                </div>
            </div>
        </div>
    )
}