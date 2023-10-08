'use client'


import SidePersonMenu from "@/component/side/person-menu/SidePersonMenu";
import SideProjectMenu from "@/component/side/project-menu/SideProjectMenu";
import {useImmerReducer} from "use-immer";
import {
    onShowReducer,
    TabOnShowContext,
    TabOnShowDispatchContext
} from "@/component/side/TabOnShowContext";

interface SidePartProps {
    sidePartShow: boolean
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

