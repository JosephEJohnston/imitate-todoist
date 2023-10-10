'use client'

import "../../styles/fix-position.css"
import React, {Dispatch, SetStateAction} from "react";
import AddTaskForm from "@/component/main/task/AddTaskForm";

interface FixPositionAddTaskProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function FixPositionAddTaskForm ({show, setShow}: FixPositionAddTaskProps) {

    return (
        <>
            <div className={`fix-position-container ${show ? `` : `fix-position-not-show`}`}>
                <AddTaskForm doWhenCancel={(s) => setShow(!s)}
                             needShadow={true}/>
            </div>
        </>
    );
}
