import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Makarand",
  metadataBase: new URL('https://makarandmadhavi.me'),
  description: "Makarand Madhavi's personal website",
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <video id="background-video" autoPlay loop muted>
          <source src="/background.mp4" type="video/mp4"/>
        </video>

        {children}
      </body>
    </html>
  );
}
