import ProjectTask from "@/app/component/main/task/project/ProjectTask";
import DetailTask from "@/app/component/main/task/detail/DetailTask";

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


