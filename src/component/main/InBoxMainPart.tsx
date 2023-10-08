import DetailTask from "@/component/main/task/detail/DetailTask";
import React from "react";
import InBoxHeader from "@/component/main/header/InBoxHeader";
import TaskContainer from "@/component/main/task/TaskContainer";


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
