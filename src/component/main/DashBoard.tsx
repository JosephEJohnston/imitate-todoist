'use client'

import React, {useState} from "react";
import SidePart from "@/component/side/SidePart";

interface DashBoardProps {
    children: React.ReactNode
}

export default function DashBoard ({children}: DashBoardProps) {
    const [isSidePartOpened, setIsSidePartOpened] = useState(true)

    function sidePartToggle() {
        setIsSidePartOpened(wasOpened => !wasOpened);
    }

    return (
        <>
            <div>
                <div id="content">
                    <SidePart sidePartShow={isSidePartOpened} sidePartToggle={sidePartToggle} />
                    <div className={`main-part ${isSidePartOpened ? `main-with-side-active` : ``}`}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
