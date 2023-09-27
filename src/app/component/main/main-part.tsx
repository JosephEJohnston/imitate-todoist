import ProjectTask from "@/app/component/main/task/project/project-task";
import DetailTask from "@/app/component/main/task/detail/detail-task";

export default function MainPart () {
    return (
        <div className="main-part">
            <div className="main-part-inner">

                <ProjectTask />
                <DetailTask />
            </div>
        </div>
    );
}


