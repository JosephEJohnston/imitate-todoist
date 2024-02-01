import React from "react";
import DashBoard from "@/component/main/DashBoard";
import "@/styles/main/DashBoard.css"
import "@/styles/side/SidePart.css"


export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <DashBoard>
                {children}
            </DashBoard>
        </>
    )
}
