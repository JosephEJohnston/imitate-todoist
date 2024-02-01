'use client'

import TaskFunctionNav from "@/component_old/main/task/TaskFunctionNav";
import {useTaskOnShow} from "@/component_old/main/task/TaskOnShowContext";


export default function Task () {
    const taskOnShow = useTaskOnShow();

    function showTaskList() {
        return taskOnShow ? `` : `not-show`;
    }

    return (
        <>
            <div className={`task-container-parent ${showTaskList()}`}>
                <div className="task-container">
                    <div className="task-description">
                        <div className="td-left-container">
                            <button className={`td-btn td-btn-move ${showTaskList()}`}>
                                <i className={`bi bi-grid`}></i>
                            </button>
                            <button className={`td-btn td-btn-selected ${showTaskList()}`}>
                                <i className={`bi bi-check-circle td-btn-icon-check ${showTaskList()}`}></i>
                                <i className={`bi bi-circle td-btn-icon-not-check ${showTaskList()}`}></i>
                            </button>
                            <div>
                                <div className="td-text">
                                    关联Todoist与我的工作日历
                                </div>
                                <div className="task-comment">
                                    日历关联应用|Todoist
                                </div>
                            </div>
                        </div>
                        <TaskFunctionNav />
                    </div>
                </div>
                <hr className="task-line"/>
            </div>

        </>
    );
}