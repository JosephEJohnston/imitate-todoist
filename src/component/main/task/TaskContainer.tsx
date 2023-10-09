'use client'

import Task from "@/component/main/task/Task";
import {useState} from "react";

function AddTaskButton() {
    const [showButton, setShowButton] = useState(true);

    function handleOnClick() {
        setShowButton(!showButton);
    }

    function showButtonOrAddNewTask() {
        if (showButton) {
            return (
                <>
                    <button className="add-task-btn" onClick={handleOnClick}>
                        <i className="bi bi-plus add-task-btn-icon"></i>
                        <span className="add-task-btn-text">添加任务</span>
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <div className={`add-new-task-form`}>
                        <div>
                            <input className={`add-task-input`} type="text" placeholder="任务名称"/>
                        </div>
                        <div>
                            <input className={`add-task-input`} type="text" placeholder="描述"/>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            {showButtonOrAddNewTask()}
        </>
    );
}

function AddSection() {
    return (
        <>
            <div>
                <button className="hover_action_button">添加板块</button>
            </div>
        </>
    );
}

export default function TaskContainer () {
    return (
        <>
            <Task />
            <AddTaskButton />
            <AddSection />
        </>
    );
}