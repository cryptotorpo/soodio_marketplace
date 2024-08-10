import Image from "next/image";

export default function NftDetails() {
    return (
        <div className="w-[70%]">
            <div className="flex flex-col lg:flex-row gap-6 mt-28">
                <div className="flex-auto lg:w-32 w-full rounded-lg overflow-hidden">
                    <Image className="w-full h-full bg-black" src="/images/multi-wave.svg" alt="" width={478} height={464} />
                </div>
                <div className="flex-auto lg:w-64 rounded-lg px-10 py-16 text-center box-gradient">
                    <div className="text-[48px] font-medium font-poppins">
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
                        <button className="hidden">
                            <Image src="/images/upload.svg" alt="" width={40} height={40} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center mt-20">
                <div className="font-poppins font-bold text-[20px] lg:text-[38px] text-white">Name:&nbsp;</div>
                <div className="font-poppins font-normal text-[18px] lg:text-[33px] text-white">SampleAudio</div>
            </div>
            <div className="flex flex-col lg:flex-row items-center mt-10">
                <div className="font-poppins font-bold text-[20px] lg:text-[38px] text-white">Description:&nbsp;</div>
                <div className="font-poppins font-normal text-[18px] lg:text-[33px] text-white">This is for ...</div>
            </div>
            <div className="flex lg:flex-row flex-col mt-20 justify-between mb-20">
                <div className="flex flex-row items-center flex-1">
                    <div className="font-poppins font-bold text-[20px] lg:text-[38px] text-white">Price:&nbsp;</div>
                    <div className="font-poppins font-normal text-[18px] lg:text-[33px] text-white">100 ICP</div>
                </div>
                <div className="text-center flex-1">
                    <button className="text-center rounded-[45px] bg-[#819DF5] text-white w-[294px] font-bold font-poppins text-[20px] lg:text-[33px] lg:p-3 p-2">
                        Download
                    </button>
                </div>
            </div>
        </div>
    )
}