import React from "react";
import DashBoard from "@/component/main/DashBoard";


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
