import { type Metadata } from "next";

import { Layout } from "@/components/Layout";

import { Providers } from "@/lib/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry - Software Engineer",
  description: "Portfolio of Harry",
  icons: { icon: "/favicon.jpg" },
  openGraph: {
    title: "Harry - Software Engineer",
    description: "Portfolio of Harry",
    url: "https://mhung.blog",
    siteName: "Your Site Name",
    images: [
      {
        url: "https://mhung.blog/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
