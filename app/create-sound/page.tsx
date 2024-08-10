import MusicItem from "@/components/MusicItem";
import { NFTType } from "@/types";
import Image from "next/image";

export default function Mint() {
    const nfts = [
        {
            name: 'NFT Name',
            id: '0001',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0002',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0003',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0004',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0005',
            image: '/images/wave.jpg',
        },
        {
            name: 'NFT Name',
            id: '0006',
            image: '/images/wave.jpg',
        },
    ]
    return (
        <div>
            <div className="font-poppins font-bold lg:text-[30px] text-[25px] text-white w-full text-left pt-14 pb-5">
                Create a Sound
            </div>
            <div className="flex lg:flex-row flex-col justify-start">
                <div className="rounded-[8px] py-3 px-5 button-gradient flex flex-row w-full lg:w-[309px] items-center justify-between">
                    <span className="font-bold font-poppins font-xs text-white text-left flex-auto lg:w-64">Choose Library</span>
                    <input className="w-[50%] text-black text-center p-1 rounded-[4px] flex-auto lg:w-32 ml-1" />
                </div>
                <div className="rounded-[8px] py-3 px-5 button-gradient flex flex-row w-full lg:w-[309px] items-center justify-between lg:ml-5 lg:mt-0 mt-3">
                    <span className="font-bold font-poppins font-xs text-white text-left flex-1">BPM</span>
                    <input className="lg:w-[47px] w-[50%] text-black text-center p-1 rounded-[4px]" />
                </div>
            </div>
            <div className="mt-3 flex lg:flex-row flex-col justify-left">
                <div className="button-gradient rounded-[8px] flex flex-row py-3 px-5 lg:w-[309px] w-full py-1 items-center justify-between mr-5">
                    <div className="text-left text-white flex-auto w-64 font-bold font-poppins font-xs">Duration in seconds</div>
                    <div className="flex-auto w-32 text-center">
                        <input className="w-[75px] rounded text-center font-poppins" />
                    </div>
                </div>
                <div className="button-gradient rounded-[8px] flex flex-row px-5 lg:w-[309px] w-full py-1 items-center justify-between lg:mt-0 mt-3">
                    <div className="text-left text-white flex-1 font-bold font-poppins font-xs">Intensity</div>
                    <div className="flex-2 flex flex-row">
                        <Image src="/images/intensity-left.svg" alt="" width={76} height={44} />
                        <Image src="/images/intensity-right.svg" alt="" width={76} height={44} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-7 mt-5 w-full">
                <div className="px-10 py-16 relative text-left rounded-2xl box-gradient flex-1">
                    <button className="absolute right-7 top-7">
                        <Image src="/images/info.svg" alt="" width={32} height={32} />
                    </button>
                    <div className="font-poppins font-bold text-[37px] text-white">Let&apos;s go!</div>
                    <textarea
                        className="border-none outline-none text-sm mt-1 bg-[transparent] w-full"
                        placeholder="What should your sample sound like?"
                        rows={10}
                    ></textarea>
                </div>
                <div className="flex-1">
                    <div className="rounded-[15px] px-10 py-16 text-center box-gradient">
                        <div className="text-5xl font-medium font-poppins">
                            <span className="text-white">00:0</span>
                            <span className="text-[#597EFF]">6:10</span>
                        </div>
                        <div className="text-white font-bold font-normal">05:00:00</div>
                        <div className="my-10">
                            <Image className="w-full" src="/images/wave.svg" alt="" width={100} height={100} />
                        </div>
                        <div className="flex flex-row items-center mt-5 justify-center">
                            <button>
                                <Image src="/images/refresh.svg" alt="" width={40} height={40} />
                            </button>
                            <button className="mx-5">
                                <Image src="/images/playing.svg" alt="" width={110} height={110} />
                            </button>
                            <button>
                                <Image src="/images/upload.svg" alt="" width={40} height={40} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="text-left w-full py-5">
                    <button className="flex flex-row items-center rounded-[2rem] px-10 text-white text-center lg:py-5 py-2 bg-[#819DF5]">
                        <span className="text-white text-semibold font-poppins text-lg mr-3">Generate Audio</span>
                        <Image src="/images/audio-graph.svg" alt="" width={33} height={30} />
                    </button>
                </div>

                <div className="flex flex-row items-center justify-center w-full px-5 py-2">
                    <button className="button-gradient px-5 py-2 rounded-2xl text-white font-bold font-poppins text-lg ml-5">Tweak It</button>
                    <button className="button-gradient px-5 py-2 rounded-2xl text-white font-bold font-poppins text-lg ml-5">Save</button>
                    <button className="button-gradient px-5 py-2 rounded-2xl text-white font-bold font-poppins text-lg ml-5">Download</button>
                    {/* <button className="flex flex-row items-center">
                        <Image src="/images/download.svg" width={25} height={25} alt="" />
                        <span className="text-white font-bold font-poppins text-sm ml-3">Save</span>
                    </button>
                    <button className="flex flex-row items-center">
                        <Image src="/images/mint.svg" width={25} height={25} alt="" />
                        <span className="text-white font-bold font-poppins text-sm ml-3">Mint</span>
                    </button> */}
                </div>
            </div>
            <div className="text-left text-white font-bold font-poppins lg:text-[30px] text-[25px] mt-28 mb-5">Your Previous Sounds</div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap gap-5 mb-20">
                {
                    nfts.map((nft: NFTType, index: number) => (
                        <MusicItem image={nft.image} title={nft.name} key={index} />
                    ))
                }
            </div>
            {/* <div className="w-full rounded-[15px] px-10 py-16 text-center box-gradient">
                <div className="text-5xl font-medium font-poppins">
                    <span className="text-white">00:0</span>
                    <span className="text-[#597EFF]">6:10</span>
                </div>
                <div className="text-white font-bold font-normal">05:00:00</div>
                <div className="my-10">
                    <Image className="w-full" src="/images/wave.svg" alt="" width={100} height={100} />
                </div>
                <div className="flex flex-row items-center mt-5 justify-center">
                    <button>
                        <Image src="/images/refresh.svg" alt="" width={40} height={40} />
                    </button>
                    <button className="mx-5">
                        <Image src="/images/playing.svg" alt="" width={110} height={110} />
                    </button>
                    <button>
                        <Image src="/images/upload.svg" alt="" width={40} height={40} />
                    </button>
                </div>
            </div> */}
        </div>
    )
}