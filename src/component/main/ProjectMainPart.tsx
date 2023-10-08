import DetailTask from "@/component/main/task/DetailTask";
import React from "react";
import ProjectTaskHeader from "@/component/main/header/ProjectTaskHeader";
import TaskContainer from "@/component/main/task/TaskContainer";

export default function ProjectMainPart () {
    return (
        <div className="main-part-inner">
            <ProjectTaskHeader />
            <div className="project-task">
                <TaskContainer />
            </div>
            <DetailTask />
        </div>
    );
}


