'use client'

import Nav from "@/app/component/nav/Nav";
import SidePart from "@/app/component/side/SidePart";
import MainPart from "@/app/component/main/MainPart";
import {createContext, useState} from "react";

export const SetSidePartShowContext = createContext(() => {});


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