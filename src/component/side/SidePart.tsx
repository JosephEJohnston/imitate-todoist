'use client'


import SidePersonMenu from "@/component_old/side/person_menu/SidePersonMenu";
import SideProjectMenu from "@/component_old/side/project_menu/SideProjectMenu";
import {useImmerReducer} from "use-immer";
import {
    onShowReducer,
    TabOnShowContext,
    TabOnShowDispatchContext
} from "@/component_old/side/TabOnShowContext";

interface SidePartProps {
    sidePartShow: boolean,
    sidePartToggle: () => void,
}

export default function SidePart ({sidePartShow}: SidePartProps) {
    const [onShow, dispatch] =
        useImmerReducer(onShowReducer, {
            onShowIndex: '0',
        })

    return (
        <>
            <TabOnShowContext.Provider value={onShow}>
                <TabOnShowDispatchContext.Provider value={dispatch}>
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
                </TabOnShowDispatchContext.Provider>
            </TabOnShowContext.Provider>
        </>
    );
}

