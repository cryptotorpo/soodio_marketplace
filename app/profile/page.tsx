import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    const collections = ['collection1', 'collection2', 'collection3', 'collection4', 'collection5', 'collection6']
    return (
        <div className="mx-auto pt-12 pb-12 w-full">
            <div className="flex flex-row items-center justify-center lg:max-w-[800px] w-full mx-auto">
                <div className="flex-auto w-32">
                    <Image src="/images/profile.svg" width={239} height={250} alt="" />
                    <div className="flex flex-row items-center pt-3">
                        <span className="font-poppins font-normal text-[16px] pl-5 text-white">Upload Now</span>
                        <button className="ml-2">
                            <Image src="/images/cloud-upload.svg" width={25} height={25} alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex-auto w-64">
                    <div className="flex flex-row py-2">
                        <span className="flex-1 font-poppins font-bold text-[20px] text-white text-left">User Name:</span>
                        <span className="flex-1 font-poppins font-normal text-[18px] text-white text-left">Soodio</span>
                    </div>
                    <div className="bg-border-gradient py-[0.5px] my-2"></div>
                    <div className="flex flex-row py-2">
                        <span className="flex-1 font-poppins font-bold text-[20px] text-white text-left">Email:</span>
                        <span className="flex-1 font-poppins font-normal text-[18px] text-white text-left">xxx@gmail.com</span>
                    </div>
                    <div className="bg-border-gradient py-[0.5px] my-2"></div>
                    <div className="flex flex-row py-2">
                        <span className="flex-1 font-poppins font-bold text-[20px] text-white text-left">Wallet Address:</span>
                        <span className="flex-1 font-poppins font-normal text-[18px] text-white text-left">0x00000</span>
                    </div>
                </div>
            </div>
            <div className="font-poppins font-extrabold lg:text-[30px] text-[25px] text-white w-full text-left pt-32 pb-12">
                NFT SOUND LIBRARY
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
        </div>
    )
}