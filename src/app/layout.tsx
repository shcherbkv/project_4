﻿import type { Metadata } from "next";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
    subsets: ['ciryllic'],
    weight: ['400']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ru">
      <body className={greatVibes.className}>
        {children}
      </body>
    </html>
  );
}
