import ProjectTask from "@/app/component/main/task/project/ProjectTask";
import DetailTask from "@/app/component/main/task/detail/DetailTask";

interface MainPartProps {
    sidePartShow: boolean
}

export default function MainPart ({sidePartShow}: MainPartProps) {
    return (
        <div className={`main-part ${sidePartShow ? `main-with-side-active` : ``}`}>
            <div className="main-part-inner">
                <ProjectTask />
                <DetailTask />
            </div>
        </div>
    );
}


