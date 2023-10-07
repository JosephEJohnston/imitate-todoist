import ProjectTask from "@/component/main/task/project/ProjectTask";
import DetailTask from "@/component/main/task/detail/DetailTask";
import React from "react";

export default function MainPart () {
    return (
        <div className="main-part-inner">
            <ProjectTask />
            <DetailTask />
        </div>
    );
}


