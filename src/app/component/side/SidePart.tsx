'use client'

import SidePersonMenu from "@/app/component/side/person-menu/SidePersonMenu";
import SideProjectMenu from "@/app/component/side/project-menu/SideProjectMenu";

interface SidePartProps {
    sidePartShow: boolean
}

export default function SidePart ({sidePartShow}: SidePartProps) {

    return (
        <div className={`side-part ${sidePartShow ? `side-part-show` : `side-part-not-show`}`}>
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

