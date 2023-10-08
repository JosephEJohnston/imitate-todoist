'use client'

import DetailTaskHeader from "@/component/main/task/DetailTaskHeader";
import TaskContainer from "@/component/main/task/TaskContainer";
import {useState} from "react";
import {TaskOnShowContext, TaskOnShowSetter} from "@/component/main/task/TaskOnShowContext";

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

