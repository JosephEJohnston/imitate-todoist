import ProjectTaskHeader from "@/component/main/task/project/ProjectTaskHeader";
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
