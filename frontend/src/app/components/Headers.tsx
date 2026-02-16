"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Header() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Left section - Logo/Title with optional image */}
                    <div className="flex items-center gap-2">
                        {/* Optional: Add a logo image if you have one */}
                        {/* <Image 
                            src="/logo.png" 
                            alt="VibeVault Logo" 
                            width={32} 
                            height={32}
                            className="rounded-full"
                        /> */}
                        <h1 className="text-xl font-bold text-gray-900">
                            VibeVault
                        </h1>
                    </div>

                    {/* Right section - GitHub + Connect Button */}
                    <div className="flex items-center gap-4">
                        {/* GitHub Link with Icon */}
                        <a
                            href="https://github.com/VibeVault/vibevault"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                        >
                            <FaGithub className="h-5 w-5" />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>

                        {/* Connect Button - Only render after mount */}
                        {mounted && <ConnectButton />}
                    </div>
                </div>
            </div>
        </header>
    )
}