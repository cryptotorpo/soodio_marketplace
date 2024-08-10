import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Collections() {
    const collections = ['collection1', 'collection2', 'collection3', 'collection4', 'collection5', 'collection6', 'collection1', 'collection2', 'collection3', 'collection4', 'collection5', 'collection6']
    return (
        <div>
            <div className="font-poppins font-extrabold lg:text-[30px] text-[25px] text-white w-full text-center lg:pt-12 pb-16">
                SAMPLE LIBRARY
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap lg:gap-10 gap-5">
                {
                    collections.map((collection: string, index: number) => (
                        <Link href="/models" key={index} className="flex-1">
                            <Image className="w-full" src={`/images/${collection}.svg`} alt="" width={100} height={100} />
                        </Link>
                    ))
                }
            </div>
            <div className="my-9 mt-10">
                <button className="rounded-[45px] w-[246px] py-4 text-center text-white bg-[#819DF5] font-bold text-[19px]">View More</button>
            </div>
        </div>
    )
}