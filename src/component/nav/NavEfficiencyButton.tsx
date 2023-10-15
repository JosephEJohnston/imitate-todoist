'use client'

import {Dispatch, SetStateAction, useState} from "react";

interface NavEfficiencyButtonProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function NavEfficiencyButton (props: NavEfficiencyButtonProps) {

    return (
        <>
            <button className="nav-button"
                    onClick={_ => props.setShow(!props.show)}>
                <i className="nav-btn-icon bi bi-person-fill-up"></i>
                <span className="nav-btn-inner-text">0/5</span>
            </button>
        </>
    );
}