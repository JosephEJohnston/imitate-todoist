'use client'

import DetailTaskHeader from "@/component_old/main/task/DetailTaskHeader";
import TaskContainer from "@/component_old/main/task/TaskContainer";
import {useState} from "react";
import {TaskOnShowContext, TaskOnShowSetter} from "@/component_old/main/task/TaskOnShowContext";

export default function DetailTask () {
    const [taskOnShow, setTaskOnShow] = useState(true);

    return (
        <>
            <div>
                <TaskOnShowContext.Provider value={taskOnShow}>
                    <TaskOnShowSetter.Provider value={setTaskOnShow} >
                        <DetailTaskHeader />
                        <TaskContainer />
                    </TaskOnShowSetter.Provider>
                </TaskOnShowContext.Provider>
            </div>
        </>
    );
}

