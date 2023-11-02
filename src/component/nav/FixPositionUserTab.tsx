import "../../styles/nav-user-tab.css"
import React, {Dispatch, SetStateAction} from "react";
import OutsideClickHandler from "@/component/nav/OutsideClickHandler";

interface FixPositionUserTabProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}


export default function FixPositionUserTab (props: FixPositionUserTabProps) {
    function render() {
        if (props.show) {
            return (
                <>
                    <OutsideClickHandler setStatusWhenClick={props.setShow}>
                        <div className={`nav-user-tab-container`}>
                            <div className={`nav-user-tab-top-container`}>
                                <div className={`nutt-user-img-container`}>
                                    <img className="user-img" src="/images/img.png" alt=""/>
                                </div>
                                <div>
                                    <div>
                                        <span className={`nutt-user-name`}>noob_test</span>
                                    </div>
                                    <div>
                                        <span className={`nutt-user-email`}>TheresiaHabsburg@outlook.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className={`nav-user-tab-each-container`}>
                                <div>
                                    <button>
                                        <i className="bi bi-nut"></i>
                                    </button>
                                    <span>设置</span>
                                </div>
                                <div>
                                    <span>O 然后 S</span>
                                </div>
                            </div>
                            <hr className={`nutt-hr`}/>
                            <div className={`nav-user-tab-each-container`}>
                                <div>
                                    <button>
                                        <i className="bi bi-plus-lg"></i>
                                    </button>
                                    <span>添加团队工作空间</span>
                                </div>
                                <div>
                                    <button>测试</button>
                                </div>
                            </div>
                            <hr className={`nutt-hr`}/>
                            <div className={`nav-user-tab-each-container`}>
                                <div>
                                    <button>
                                        <i className="bi bi-palette"></i>
                                    </button>
                                    <span>主题</span>
                                </div>
                                <div>
                                    <span>O 然后 T</span>
                                </div>
                            </div>
                            <div className={`nav-user-tab-each-container`}>
                                <div>
                                    <button></button>
                                    <span>活动日志</span>
                                </div>
                                <div>
                                    <span>O 然后 A</span>
                                </div>
                            </div>
                            <div className={`nav-user-tab-each-container`}>
                                <div>
                                    <button></button>
                                    <span>打印</span>
                                </div>
                                <div>
                                    <span>Ctrl P</span>
                                </div>
                            </div>
                            <div className={`nav-user-tab-each-container`}>
                                <div>
                                    <button></button>
                                    <span>关联应用</span>
                                </div>
                            </div>
                            <hr className={`nutt-hr`}/>
                            <div className={`nav-user-tab-each-container`}>
                                <div>
                                    <button></button>
                                    <span>升级到专业版</span>
                                </div>
                            </div>
                            <div className={`nav-user-tab-each-container`}>
                                <div>
                                    <button></button>
                                    <span>下载应用</span>
                                </div>

                            </div>
                            <hr className={`nutt-hr`}/>
                            <div className={`nav-user-tab-each-container`}>
                                <div>
                                    <button></button>
                                    <span>登出</span>
                                </div>
                            </div>
                            <hr className={`nutt-hr`}/>
                            <div>
                                <span>V4559</span>
                                <span> . </span>
                                <span>最新动态</span>
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
            <div className={`nav-fix-position-common fix-position-user-tab ${props.show ? `` : `fix-position-not-show`}`}>
                <div className={`fix-position-inner`}>
                    { render() }
                </div>
            </div>
        </>
    );
}
