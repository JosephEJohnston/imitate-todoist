import SidePersonMenu from "@/app/component/side/person-menu/side-person-menu";
import SideProjectMenu from "@/app/component/side/side-project-menu";

export default function SidePart () {
    return (
        <div className="side-part">
            <div>
                <SidePersonMenu />
                <SideProjectMenu />
            </div>
            <div className="side-bottom">
                <button className="side-bottom-btn">
                    <i className="bi bi-plus-lg side-bottom-btn-icon"></i>
                    <span className="side-bottom-btn-text">添加团队工作空间</span>
                </button>
            </div>
        </div>
    );
}

