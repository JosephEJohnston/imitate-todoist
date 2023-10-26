'use client'

import "../../styles/nav-help-tab.css"
import React, {Dispatch, SetStateAction} from "react";
import OutsideClickHandler from "@/component/nav/OutsideClickHandler";

interface FixPositionHelpTabProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}


export default function FixPositionHelpTab (props: FixPositionHelpTabProps) {

    function render() {
        if (props.show) {
            return (
                <>
                    <OutsideClickHandler setStatusWhenClick={props.setShow}>
                        <div>
                            <button>
                                <i className="bi bi-question-circle"></i>
                            </button>
                            <span>帮助</span>
                        </div>
                        <div>
                            <button>
                                <i className="bi bi-pen"></i>
                            </button>
                            <span>灵感</span>
                        </div>
                        <div>
                            <button>
                                <i className="bi bi-clipboard"></i>
                            </button>
                            <span>模板</span>
                        </div>
                        <div className={`nav-help-tab-container`}>
                            <div>
                                <button>
                                    <i className="bi bi-keyboard"></i>
                                </button>
                                <span>键盘快捷键</span>
                            </div>
                            <div>
                                <span>?</span>
                            </div>
                        </div>
                        <div  className={`nav-help-tab-container`}>
                            <div>
                                <button>
                                    <i className="bi bi-laptop"></i>
                                </button>
                                <span>指令菜单</span>
                            </div>
                            <div>
                                <span>Ctrl K</span>
                            </div>
                        </div>
                        <div>
                            <button>
                                <i className="bi bi-journal-arrow-up"></i>
                            </button>
                            <span>入门指南</span>
                        </div>
                        <div>
                            <button>
                                <i className="bi bi-lightbulb"></i>
                            </button>
                            <span>最新动态</span>
                        </div>
                        <hr/>
                        <div>
                            <button>
                                <i className="bi bi-arrow-repeat"></i>
                            </button>
                            <span>同步</span>
                        </div>
                        <div>
                            <span>同步最新完成的任务：1分钟前</span>
                        </div>
                    </OutsideClickHandler>
                </>
            )
        } else  {
            return (
                <>
                </>
            )
        }
    }

    return (
        <>
            <div className={`nav-fix-position-common fix-position-help-tab ${props.show ? `` : `fix-position-not-show`}`}>
                <div className={`fix-position-inner`}>
                    { render() }
                </div>
            </div>
        </>
    );
}