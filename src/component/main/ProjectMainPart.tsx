import DetailTask from "@/component_old/main/task/DetailTask";
import React from "react";
import ProjectTaskHeader from "@/component_old/main/header/ProjectTaskHeader";
import TaskContainer from "@/component_old/main/task/TaskContainer";

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


