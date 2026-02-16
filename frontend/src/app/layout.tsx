import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react"
import { Providers } from "./providers"
import '@rainbow-me/rainbowkit/styles.css';
import { Header } from "./components/Headers"

export const metadata: Metadata = {
  title: "VibeVault",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        Jaboya phenomena
        <Providers>
          <Header />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}