import "../styles/nav.css"
import "../styles/content.css"
import "../styles/task.css"
import "../styles/section.css"
import "../styles/side.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import '@/styles/globals.css';
import "@/styles/color.css"

import type {Metadata} from 'next'
import React from "react";

export const metadata: Metadata = {
    title: 'todoist',
    description: 'Generated by create next pages',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en">
                <body>{children}</body>
            </html>
        </>
    )
}
