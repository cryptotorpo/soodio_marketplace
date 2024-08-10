import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

const navigation = [
  { name: 'HOME', href: '/', current: true },
  { name: 'LIBRARIES', href: '/explore', current: false },
  { name: 'MARKETPLACE', href: '/models', current: false },
]

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
    <Disclosure as="nav" className="bg-transparent py-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="/logo.svg"
                width={199} height={52}
                // className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block bg-[#1E50FF36] lg:flex justify-center items-center rounded-full">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ?  'text-white' : 'text-gray-300 hover:text-white',
                      'rounded-md px-7 py-2 text-sm font-bold font-poppins',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:block hidden absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium text-cente',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </>
    )
}