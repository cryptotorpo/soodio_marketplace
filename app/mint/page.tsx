import Image from "next/image";

export default function Mint() {
    return (
        <div className="flex flex-row">
            <div className="flex-auto w-64">
                <div className="font-poppins font-bold lg:text-[30px] text-[25px] text-white w-full text-left pt-14 pb-9">
                    Mint Sound
                </div>
                <div className="text-left text-white font-bold font-poppins lg:text-[20px] text-[15px]">Title</div>
                <div className="text-left">
                    <input className="text-white w-full lg:w-[636px] outline-none rounded-[8px] bg-[#819DF569] lg:p-2 p-1" />
                </div>
                <div className="text-left mt-5 lg:w-[636px] w-full">
                    <div className="flex flex-row gap-5">
                        <div className="flex-1">
                            <div className="text-left text-white font-bold font-poppins lg:text-[20px] text-[15px]">BPM</div>
                            <input className="text-white w-[70%] outline-none rounded-[8px] bg-[#819DF569] lg:p-2 p-1" />
                        </div>
                        <div className="flex-1">
                            <div className="text-left text-white font-bold font-poppins lg:text-[20px] text-[15px]">KEY</div>
                            <input className="text-white w-[70%] outline-none rounded-[8px] bg-[#819DF569] lg:p-2 p-1" />
                        </div>
                    </div>
                </div>
                <div className="text-left text-white font-bold font-poppins lg:text-[20px] text-[15px] mt-5">Library</div>
                <div className="text-left">
                    <input className="text-white lg:w-[636px] w-full outline-none rounded-[8px] bg-[#819DF569] lg:p-2 p-1" />
                </div>
                <div className="px-10 py-16 relative text-left rounded-2xl box-gradient flex-1 mt-10 lg:w-[636px] w-full">
                    <div>
                        <button className="flex flex-row items-center rounded-[103px] lg:px-10 px-5 text-white text-center lg:py-5 py-2 mx-auto bg-[#819DF5]">
                            <span className="text-white text-semibold font-poppins text-lg mr-3">Select from Sounds</span>
                        </button>
                        <button className="flex flex-row items-center rounded-[103px] lg:px-10 px-5 text-white text-center lg:py-5 py-2 mx-auto bg-[#819DF5] mt-[23px]">
                            <span className="text-white text-semibold font-poppins text-lg mr-3">Upload new sound</span>
                        </button>
                    </div>
                </div>
                <div className="my-9 text-left mt-20">
                    <button className="rounded-[45px] w-[246px] py-4 text-left text-white bg-[#819DF5] font-bold text-[19px] text-center">Mint</button>
                </div>
            </div>
            <div className="flex-auto w-32"></div>
        </div>
    )
}