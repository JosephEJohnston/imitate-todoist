'use client'


import SidePersonMenu from "@/component/side/person-menu/SidePersonMenu";
import SideProjectMenu from "@/component/side/project-menu/SideProjectMenu";

interface SidePartProps {
    sidePartShow: boolean
}

export default function SidePart ({sidePartShow}: SidePartProps) {

    return (
        <div className={`side-part ${sidePartShow ? `side-part-show` : ``}`}>
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

