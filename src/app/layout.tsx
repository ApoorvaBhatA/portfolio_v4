import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "Apoorva Bhat",
  description: "Apoorva Bhat is a Frontend Engineer who builds fast, accessible, and scalable web applications with React, Next.js, and Angular.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Apoorva Bhat",
    description: "Apoorva Bhat is a Frontend Engineer who builds fast, accessible, and scalable web applications with React, Next.js, and Angular.",
    url: "https://www.apoorvabhat.xyz/",
    siteName: "Apoorva Bhat",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Apoorva Bhat",
    description: "Apoorva Bhat is a Frontend Engineer who builds fast, accessible, and scalable web applications with React, Next.js, and Angular.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-background text-primary-text`}>
       {children}
      </body>
    </html>
  );
}
