'use client'

import React, {useState} from "react";
import Nav from "@/component/nav/Nav";
import SidePart from "@/component/side/SidePart";
import MainPart from "@/component/main/MainPart";
import {SetSidePartShowContext} from "@/component/side/SetSidePartShowContext";


export default function Index () {
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
                    <MainPart sidePartShow={isSidePartOpened} />
                </div>
            </div>
        </>
    );
}
