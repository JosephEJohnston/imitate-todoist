'use client'

import "../../styles/nav-help-tab.css"
import React, {Dispatch, SetStateAction} from "react";
import OutsideClickHandler from "@/component_old/nav/OutsideClickHandler";

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
                        <div className={`nav-help-tab-container`}>
                            <button className={`nav-ht-btn`}>
                                <i className="bi bi-question-circle nav-ht-icon"></i>
                            </button>
                            <span className={`nav-help-tab-text`}>帮助</span>
                        </div>
                        <div className={`nav-help-tab-container`}>
                            <button className={`nav-ht-btn`}>
                                <i className="bi bi-pen nav-ht-icon"></i>
                            </button>
                            <span className={`nav-help-tab-text`}>灵感</span>
                        </div>
                        <div className={`nav-help-tab-container`}>
                            <button className={`nav-ht-btn`}>
                                <i className="bi bi-clipboard nav-ht-icon"></i>
                            </button>
                            <span className={`nav-help-tab-text`}>模板</span>
                        </div>
                        <div className={`nav-help-tab-container nav-help-tab-layout`}>
                            <div>
                                <button className={`nav-ht-btn`}>
                                    <i className="bi bi-keyboard nav-ht-icon"></i>
                                </button>
                                <span className={`nav-help-tab-text`}>键盘快捷键</span>
                            </div>
                            <div>
                                <span className={`nav-help-tab-text nhtt-color nhtt-right`}>?</span>
                            </div>
                        </div>
                        <div className={`nav-help-tab-container nav-help-tab-layout`}>
                            <div>
                                <button className={`nav-ht-btn`}>
                                    <i className="bi bi-laptop nav-ht-icon"></i>
                                </button>
                                <span className={`nav-help-tab-text`}>指令菜单</span>
                            </div>
                            <div>
                                <span className={`nav-help-tab-text nhtt-color nhtt-right`}>Ctrl K</span>
                            </div>
                        </div>
                        <div className={`nav-help-tab-container`}>
                            <button className={`nav-ht-btn`}>
                                <i className="bi bi-journal-arrow-up nav-ht-icon"></i>
                            </button>
                            <span className={`nav-help-tab-text`}>入门指南</span>
                        </div>
                        <div className={`nav-help-tab-container`}>
                            <button className={`nav-ht-btn`}>
                                <i className="bi bi-lightbulb nav-ht-icon"></i>
                            </button>
                            <span className={`nav-help-tab-text`}>最新动态</span>
                        </div>
                        <hr/>
                        <div className={``}>
                            <button className={`nav-ht-btn`}>
                                <i className="bi bi-arrow-repeat nav-ht-icon"></i>
                            </button>
                            <span className={`nav-help-tab-text`}>同步</span>
                        </div>
                        <div className={`nht-bottom-container`}>
                            <span className={`nav-help-tab-text nhtt-color ml-change`}>同步最新完成的任务：1分钟前</span>
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