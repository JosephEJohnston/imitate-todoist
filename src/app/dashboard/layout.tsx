import React from "react";
import DashBoard from "@/component_old/main/DashBoard";

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
