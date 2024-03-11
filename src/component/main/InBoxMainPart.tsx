import DetailTask from "@/component_old/main/task/DetailTask";
import React from "react";
import InBoxHeader from "@/component/main/header/InBoxHeader";
import TaskContainer from "@/component_old/main/task/TaskContainer";


export default function InBoxMainPart () {
    return (
        <>
            <div className="main-part-inner">
                <InBoxHeader />
                <div className="project-task">
                    <TaskContainer />
                </div>
                <DetailTask />
            </div>
        </>
    );
}
