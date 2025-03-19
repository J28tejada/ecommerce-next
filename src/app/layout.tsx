import React from 'react';
import type { Metadata } from 'next';
import { inter } from '../config/fonts';

import './globals.css'

export const metadata: Metadata = {
  title: 'Ecommerce Del Rey',
  description: 'Ecommerce Del Rey',
}


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    )
  }