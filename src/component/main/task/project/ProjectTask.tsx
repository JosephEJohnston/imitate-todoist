import ProjectTaskHeader from "@/component/main/header/ProjectTaskHeader";
import TaskContainer from "@/component/main/task/TaskContainer";

export default function ProjectTask () {
    return (
        <>
            <ProjectTaskHeader />
            <div className="project-task">
                <TaskContainer />
            </div>
        </>
    );
}
