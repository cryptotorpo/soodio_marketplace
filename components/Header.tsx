import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

export default function Header() {
    const [isShowCreateMenu, toggleCreateMenu] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const gotoLogin = () => {
        router.push('/login')
    }

    const gotoProfile = () => {
        router.push('/profile')
    }

    return (
        <>
            <div className="lg:block">
                <div className="bg-[transparent] py-10 flex flex-col gap-y-12 lg:gap-0 lg:flex-row items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full justify-between">
                    <div>
                    <Link href="/">
                        <Image src="/logo.svg" alt="Soodio" width={199} height={52} />
                    </Link>
                    </div>
                    <div className="flex flex-row py-3 rounded-[45px] bg-[#1E50FF36] justify-between px-7">
                        <Link href="/" className={`${pathname === '/' ? 'text-[#819DF5]' : 'text-white'} font-bold font-poppins font-[15px] px-7`}>HOME</Link>
                        <Link href="/explore" className={`${pathname === '/explore' ? 'text-[#819DF5]' : 'text-white'} font-bold font-poppins font-[15px] px-7`}>LIBRARIES</Link>
                        <Link href="/models" className={`${pathname === '/models' ? 'text-[#819DF5]' : 'text-white'} font-bold font-poppins font-[15px] px-7`}>MARKETPLACE</Link>
                    </div>
                    <div className="flex flex-row relative items-center">
                        <button
                            className="flex flex-row items-center py-3 px-7 h-[51px] rounded-[45px] border-[#819DF5] border-2 border-solid mr-3"
                            onClick={() => toggleCreateMenu(!isShowCreateMenu)}
                        >
                            <span className="font-poppins font-bold font-[15px] text-white mr-2">CREATE</span>
                            <Image src="/images/microphone.svg" alt="" width={10.91} height={15} />
                        </button>
                        <div
                            className={`absolute bg-[#819DF5] px-3 flex flex-col rounded-[7px] top-14 min-w-[175px] z-[999999] ${isShowCreateMenu ? 'visible' : 'invisible'}`}
                            onMouseLeave={() => toggleCreateMenu(false)}
                        >
                            <Link className="text-center py-3 text-white border-solid border-b-[0.25px] border-white" href={'/mint-collection'}>LIBRARY</Link>
                            <Link className="text-center py-3 text-white border-solid border-b-[0.25px] border-white" href={'/create-sound'}>SOUNDS</Link>
                            <Link className="text-center py-3 text-white" href={'/mint'}>NFT</Link>
                        </div>
                        {
                            pathname === '/' ?
                                <button onClick={gotoProfile}>
                                    <Image src="/images/user.svg" alt="" width={50} height={50} />
                                </button>
                                :
                                <button
                                    className="rounded-[45px] text-white font-poppins font-[15px] font-bold bg-[#819DF5] connect-button py-3 px-7"
                                    onClick={gotoLogin}
                                >
                                    Login
                                </button>
                        }
                    </div>
                </div>
            </div>
            <MobileHeader />
        </>
    )
}
