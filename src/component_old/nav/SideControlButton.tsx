'use client'

import {useContext} from "react";
import {SetSidePartShowContext} from "@/component_old/side/SetSidePartShowContext";

export default function SideControlButton () {
    const setSidePartShow = useContext(SetSidePartShowContext);

    return (
        <>
            <button className="nav-button side-part-show-btn" onClick={setSidePartShow}>
                <i className="nav-btn-icon bi bi-list"></i>
            </button>
        </>
    );
}

