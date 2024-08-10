import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function MobileHeader() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className="lg:hidden block fixed left-0 top-0 z-[10000] w-full h-full">
            <button
                className="z-30 relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => setOpenMenu(!openMenu)}
            >
                <span className="sr-only">Open main menu</span>
                <Image src="/images/mobile-menu-handler.svg" alt="" width={25} height={25} className="w-5 h-5" />
            </button>
            {
                openMenu ?
                    <div onClick={() => setOpenMenu(false)}>
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 relative z-20">
                            <li>
                                <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/explore" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Explore</Link>
                            </li>
                            <li>
                                <Link href="/models" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Models</Link>
                            </li>
                            <li>
                                <Link href="/mint-collection" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Library</Link>
                            </li>
                            <li>
                                <Link href="/create-sound" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sound</Link>
                            </li>
                            <li>
                                <Link href="/mint" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">NFT</Link>
                            </li>
                            <li>
                                <Link href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</Link>
                            </li>
                            <li>
                                <Link href="/signup" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign up</Link>
                            </li>
                        </ul>
                        <div className="absolute top-0 left-0 w-full h-full z-10 bg-[#ffffffbd]"></div>
                    </div>
                    : null
            }
        </div>
    )
}