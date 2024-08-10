import MusicItem from "@/components/MusicItem";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function MintCollection() {
    const collections = ['collection1', 'collection2', 'collection3', 'collection4']
    return (
        <div>
            <div className="font-poppins font-bold lg:text-[30px] text-[25px] text-white w-full text-left pt-14">
                Sample Library
            </div>
            <div className="font-poppins font-normal lg:text-[20px] text-[15px] text-white w-full text-left pb-10">
                Create a sample library for your specific sounds
            </div>
            <div className="">
                <div className="flex lg:flex-row flex-col rounded-[8px] box-gradient2">
                    <div className="pl-5 pr-10 pt-10 w-full lg:w-3/5">
                        <div className="h-4/5">
                        <div className="text-left text-white font-bold font-poppins lg:text-[20px] text-[15px]">Title</div>
                        <div className="text-left py-3">
                            <input className="text-white w-full outline-none rounded-[8px] bg-[#819DF569] lg:p-5 p-2" />
                        </div>
                        <div className="text-left text-white font-bold font-poppins lg:text-[20px] text-[15px] mt-5">Description</div>
                        <div className="pt-3">
                            <textarea className="textarea-gradient w-full rounded-lg lg:p-5 p-2 text-white outline-none" rows={10}></textarea>
                        </div>
                        </div>

                        <div className="my-5 mt-10 text-left">
                            <button className=" text-center rounded-[45px] w-[246px] lg:py-3 py-2 text-white bg-[#819DF5] font-bold lg:text-[20px] text-[20px]">CREATE</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center pt-10 pl-10 lg:pl-0 pr-10 lg:pr-5 w-full lg:w-2/5 justify-center rounded-lg min-h-[150px]">
                        <div className="text-left min-h-[200px] lg:h-4/5 rounded-md w-full flex justify-center items-center box-gradient3 text-white font-bold font-poppins lg:text-[20px] text-[15px] mt-18">Cover Image</div>
                        <div className="flex flex-row mt-5 items-center w-full justify-start py-5">
                            <div className="text-white mr-5 text-poppins font-normal lg:text-[20px] text-[15px]">Upload File for Image</div>
                            <div>
                                <button>
                                    <Image src="/images/cloud-upload.svg" alt="" width={24} height={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 font-extrabold font-poppins lg:text-[28px] text-[22px] text-white text-left">YOUR COLLECTIONS</div>
            <div className="flex flex-row flex-wrap lg:gap-10 gap-5 mt-9 pb-20">
                {
                    collections.map((collection: string, index: number) => (
                        <Link href="#" key={index} className="flex-1">
                            <Image className="w-full" src={`/images/${collection}.jpg`} alt="" width={100} height={100} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}