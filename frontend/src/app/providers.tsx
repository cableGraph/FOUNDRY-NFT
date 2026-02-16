"use client"

import { type ReactNode, useState, useEffect } from "react"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@rainbow-me/rainbowkit/styles.css"

const queryClient = new QueryClient()

export function Providers(props: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false)
    const [config, setConfig] = useState<any>(null)

    useEffect(() => {
        import('./rainbowKitConfig').then((mod) => {
            setConfig(mod.default)
            setMounted(true)
        })
    }, [])

    if (!mounted || !config) {
        return null
    }

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {props.children} {/* Now children render WITH providers */}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}