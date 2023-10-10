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
                    <AddTaskForm doWhenCancel={setShowButton} needShadow={false} />
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
    const [showAddSectionButton, setShowAddSectionButton] = useState(true);

    function handleClickButton() {
        setShowAddSectionButton(!showAddSectionButton);
    }

    function handleCancel() {
        setShowAddSectionButton(true);
    }

    function showAddSection() {
        if (showAddSectionButton) {
            return (
                <>
                    <div>
                        <button className="hover_action_button"
                                onClick={handleClickButton}>
                            添加板块
                        </button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className={`add-new-section-form`}>
                        <input className={`add-new-section-name-input`} type="text"
                               placeholder="命名这个板块"/>
                        <div>
                            <button className={`ans-btn ans-btn-add-section`}>
                                <span className={`ans-btn-text-add`}>
                                    添加板块
                                </span>
                            </button>
                            <button className={`ans-btn ans-btn-add-cancel`}
                                    onClick={handleCancel}>
                                <span className={`ans-btn-text-cancel`}>
                                    取消
                                </span>
                            </button>
                        </div>
                    </div>
                </>
            );
        }
    }

    return (
        <>
            {showAddSection()}
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