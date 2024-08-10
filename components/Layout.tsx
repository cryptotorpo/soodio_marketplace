'use client'

import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = {
    children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-6xl md:w-full px-4 sm:px-6 lg:px-8 text-center pb-4">
                {children}
            </div>
            <Footer />
        </>
    )
}