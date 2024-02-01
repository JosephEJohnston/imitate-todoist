'use client'

import React, {Dispatch, SetStateAction} from "react";
import OutsideClickHandler from "@/component_old/nav/OutsideClickHandler";

interface FixPositionEfficiencyBoardProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function FixPositionEfficiencyBoard (props: FixPositionEfficiencyBoardProps) {


    function render() {
        if (props.show) {
            return (
                <>
                    <OutsideClickHandler setStatusWhenClick={props.setShow}>
                        <div className={`nav-efficiency-board`}>
                            <div className={`eff-board-title`}>
                                <span className={`eff-board-title-text`}>您的效率</span>
                            </div>
                            <div>
                                <img className={`efficiency-img`} src="/images/efficiency.jpg" alt="#"/>
                            </div>
                            <div className={`eff-board-desc-container`}>
                                <div className={`eff-board-desc-item eff-board-desc-title`}>
                                    <span className={`eff-board-desc-title-text`}>查看一点一滴的进步</span>
                                </div>
                                <div className={`eff-board-desc-item`}>
                                    <span className={`eff-board-desc-text`}>设置每日和每周目标，回顾您的效率轨迹，并见证Karma分数的增长。</span>
                                </div>
                                <button className={`eff-board-desc-item eff-board-btn`}>
                                    设置您的目标
                                </button>
                                <div className={`eff-board-desc-item eff-board-more`}>
                                    <i className="bi bi-question-circle"></i>
                                    <span  className={`eff-board-more-text`}>
                                    了解更多有关Karma的详细内容
                                </span>
                                </div>
                            </div>
                        </div>
                    </OutsideClickHandler>
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
    }

    return (
        <>
            <div className={`nav-fix-position-common 
                            fix-position-efficiency-board 
                            ${props.show ? `` : `fix-position-not-show`}`}>
                <div className={`fix-position-inner efficiency-board-inner`}>
                    { render() }
                </div>
            </div>

        </>
    );
}