import Link from "next/link";

export default function Signup() {
    return (
        <div className="mx-auto pt-28 pb-20 lg:w-min w-full h-screen">
            <div className="font-bold font-poppins lg:text-[30px] text-[25px] text-white">Sign Up</div>
            <div className="mt-16 text-center">
                <button className="rounded-[95px] text-white border-[4px] lg:py-5 py-2 border-[#819DF5] lg:text-[34px] text-[20px] font-bold font-poppins text-center lg:w-[577px] w-full">
                    Sign Up with Wallet
                </button>
            </div>
            <div className="font-poppins font-semibold text-[20px] lg:text-[42px] text-center text-white py-5 lg:py-10">OR</div>
            <div>
                <button className="rounded-[95px] bg-[#819DF5] text-white py-2 lg:py-5 text-[20px] lg:text-[34px] font-bold font-poppins text-center lg:w-[577px] w-full">
                    Sign Up with Password
                </button>
            </div>
            <div className="mt-10 text-center">
                <span className="font-poppins text-[#819DF5] text-[18px] lg:text-[26px] font-normal">Already have an account?&nbsp;</span>
                <Link className="font-poppins text-white text-[18px] lg:text-[26px] font-normal" href="/login">Sing in</Link>
            </div>
        </div>
    )
}