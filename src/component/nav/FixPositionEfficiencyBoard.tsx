'use client'

import React, {Dispatch, SetStateAction} from "react";

interface FixPositionEfficiencyBoardProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function FixPositionEfficiencyBoard (props: FixPositionEfficiencyBoardProps) {
    function renderBoard() {
        if (props.show) {
            return (
                <>
                    <div className={`nav-efficiency-board`}>
                        <div>
                            您的效率
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
    }

    return (
        <>
            <div className={`fix-position-efficiency-board ${props.show ? `` : `fix-position-not-show`}`}>
                { renderBoard() }
            </div>
        </>
    );
}