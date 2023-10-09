'use client'

import Task from "@/component/main/task/Task";
import {useState} from "react";
import AddTaskForm from "@/component/main/task/AddTaskForm";

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
                    <AddTaskForm />
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