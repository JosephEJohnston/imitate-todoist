import ProjectMenuItem from "@/component/side/project-menu/ProjectMenuItem";

export default function SideProjectMenu () {
    return (
        <div className="all-project-container">
            <div className="function-btn-container">
                <div className="f-btn-c-title">项目</div>
                <div>
                    <button className="f-btn-c-t-btn">
                        <i className="bi bi-plus-lg"></i>
                    </button>
                    <button className="f-btn-c-t-btn">
                        {/*<i className="bi bi-caret-right"></i>*/}
                        <i className="bi bi-caret-down"></i>
                    </button>
                </div>
            </div>
            <ProjectMenuItem />
        </div>
    );
}

