import Link from "next/link";

export default function Login() {
    return (
        <div className="mx-auto pt-28 pb-20 lg:w-min w-full">
            <div className="font-bold font-poppins lg:text-[30px] text-[25px] text-white">Sign in to Soodio</div>
            <div className="font-bold font-poppins lg:text-[21px] text-[15px] text-white text-left mt-16">Email</div>
            <div>
                <input className="lg:w-[740px] w-full bg-[#819DF569] rounded-[8px] lg:p-3 p-2" />
            </div>
            <div className="font-bold font-poppins lg:text-[21px] text-[15px] text-white text-left mt-5">Password</div>
            <div>
                <input className="lg:w-[740px] w-full bg-[#819DF569] rounded-[8px] lg:p-3 p-2" type="password" />
            </div>
            <div className="mt-10 lg:text-[20px] text-[15px] text-white text-left font-normal font-poppins">
                By clicking the &quot;Sign in&quot; button below, I agree to Soodio&apos;s updated&nbsp;
                <Link href="#" className="text-[#6785DF]">TERMS OF USE</Link>, including the Dispute Resolution provision, and&nbsp;
                <Link href="#" className="text-[#6785DF]">PRIVACY POLICY</Link>.
            </div>
            <div className="mt-16 text-center">
                <button className="rounded-[95px] text-white border-[4px] lg:py-3 py-1 border-[#819DF5] lg:text-[25px] text-[15px] font-bold font-poppins text-center lg:w-[577px] w-full">
                    Sign in
                </button>
            </div>
            <div className="font-poppins font-semibold lg:text-[28px] text-[20px] text-center text-white lg:py-10 py-5">OR</div>
            <div>
                <button className="rounded-[95px] bg-[#819DF5] text-white lg:py-3 py-1 lg:text-[25px] text-[15px] font-bold font-poppins text-center lg:w-[577px] w-full">
                    Connect Wallet
                </button>
            </div>
            <div className="text-right">
                <Link href="#" className="font-poppins text-[#819DF5] lg:text-[20px] text-[16px] font-normal">Forgot password?</Link>
            </div>
            <div className="mt-10 text-center">
                <span className="font-poppins text-[#819DF5] lg:text-[20px] text-[18px] font-normal">Don&apos;t have an account?&nbsp;</span>
                <Link className="font-poppins text-white lg:text-[20px] text-[18px] font-normal" href="/signup">Sing up</Link>
            </div>
        </div>
    )
}