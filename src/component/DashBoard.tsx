import React, {useState} from "react";
import {SetSidePartShowContext} from "@/component/side/SetSidePartShowContext";
import Nav from "@/component/nav/Nav";
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
                <SetSidePartShowContext.Provider value={sidePartToggle}>
                    <Nav />
                </SetSidePartShowContext.Provider>
                <div id="content">
                    <SidePart sidePartShow={isSidePartOpened} />
                    <div className={`main-part ${isSidePartOpened ? `main-with-side-active` : ``}`}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
