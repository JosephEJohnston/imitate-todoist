import ProjectTaskHeader from "@/app/component/main/task/project/project-task-header";
import TaskContainer from "@/app/component/main/task/task-container";

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
