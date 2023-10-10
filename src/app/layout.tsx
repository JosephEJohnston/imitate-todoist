import '../styles/globals.css';
import "../styles/nav.css"
import "../styles/content.css"
import "../styles/task.css"
import "../styles/section.css"
import "../styles/side.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";

import type { Metadata } from 'next'
import React from "react";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
