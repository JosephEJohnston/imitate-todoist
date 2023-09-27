import ProjectTaskHeader from "@/app/component/main/task/project/ProjectTaskHeader";
import TaskContainer from "@/app/component/main/task/TaskContainer";

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
