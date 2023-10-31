'use client'

import "../../styles/nav-message-tab.css"
import React, {Dispatch, SetStateAction, useState} from "react";
import OutsideClickHandler from "@/component/nav/OutsideClickHandler";

interface FixPositionMessageTabProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function FixPositionMessageTab (props: FixPositionMessageTabProps) {
    const [noticeOrUnRead, setNoticeOrUnRead] = useState(true);

    function noticeOnClick() {
        setNoticeOrUnRead(true);
    }

    function unReadOnClick() {
        setNoticeOrUnRead(false);
    }

    function render() {
        if (props.show) {
            return (
                <>
                    <OutsideClickHandler setStatusWhenClick={props.setShow}>
                        <div className={`message-tab-top-button-nav`}>
                            <div className={`mtt-left-btn-container`}>
                                <button className={`mtt-left-btn ${noticeOrUnRead ? 'mtt-left-btn-on-select' : ''}`}
                                    onClick={noticeOnClick}>
                                    <span className={`mtt-left-btn-text`}>通知</span>
                                </button>
                                <button className={`mtt-left-btn ${noticeOrUnRead ? '' : 'mtt-left-btn-on-select'}`}
                                    onClick={unReadOnClick}>
                                    <span className={`mtt-left-btn-text`}>未读</span>
                                </button>
                            </div>
                            <div>
                                <button>
                                    <i className="bi bi-check2-square"></i>
                                </button>
                            </div>
                        </div>
                        <div className={`message-tab-content-desc`}>
                            <div>
                                <img className={`kite-img`} src="/images/kite.jpg" alt=""/>
                            </div>
                            <div>
                                保持同步
                            </div>
                            <div>
                                您将会在此接收任何有关您共享项目变更的通知。
                            </div>
                            <div>
                                <button>
                                    <i className="bi bi-question-circle"></i>
                                </button>
                                <span>如何共享项目</span>
                            </div>
                        </div>

                    </OutsideClickHandler>
                </>
            )
        } else {
            return (
                <>

                </>
            )
        }

    }

    return (
        <>
            <div className={`nav-fix-position-common fix-position-message-tab ${props.show ? `` : `fix-position-not-show`}`}>
                <div className={`fix-position-inner`}>
                    { render() }
                </div>
            </div>
        </>
    );
}