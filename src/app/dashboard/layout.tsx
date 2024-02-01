import React from "react";
import DashBoard from "@/component/main/DashBoard";
import "@/styles/main/DashBoard.css"
import "@/styles/side/SidePart.css"
import "@/styles/side/menu/MenuItem.css"
import "@/styles/side/menu/project/ProjectMenuItemList.css"
import "@/styles/side/menu/project/SideProjectMenu.css"


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
