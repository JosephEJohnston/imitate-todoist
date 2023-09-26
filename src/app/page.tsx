import './styles/global-common.css'
import "./styles/nav.css"
import "./styles/content.css"
import "./styles/side.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function Home() {
    return (
        <div>
            <nav className="top-nav">
                <div className="top-nav-left">
                    <button className="nav-button side-part-show-btn">
                        <i className="nav-btn-icon bi bi-list"></i>
                    </button>
                    <button className="nav-button">
                        <i className="nav-btn-icon bi bi-house-door"></i>
                    </button>
                    <button className="nav-button nav-btn-search">
                        <i className="nav-btn-icon bi bi-search"></i>
                        <span className="nav-btn-search-text">搜索</span>
                    </button>
                </div>
                <div className="top-nav-right">
                    <button className="nav-button nav-btn-update">
                        <i className="nav-btn-icon bi bi-star-fill"></i>
                        <span className="nav-btn-inner-text nav-text-update">升级到专业版</span>
                    </button>
                    <button className="nav-button">
                        <i className="nav-btn-icon bi bi-plus-lg"></i>
                    </button>
                    <button className="nav-button">
                        <i className="nav-btn-icon bi bi-person-fill-up"></i>
                        <span className="nav-btn-inner-text">0/5</span>
                    </button>
                    <button className="nav-button">
                        <i className="nav-btn-icon bi bi-question-circle"></i>
                    </button>
                    <button className="nav-button">
                        <i className="nav-btn-icon bi bi-bell"></i>
                    </button>
                    <button className="nav-button nav-user-button">
                        <img className="user-img" src="./img.png" alt=""/>
                    </button>
                </div>
            </nav>
            <div id="content">
                <div className="side-part">
                    <div>
                        <div>
                            <div className="function-btn-container">
                                <button className="f-btn">
                                    <i className="bi bi-box-seam f-btn-icon-box"></i>
                                    <span className="f-btn-text">收件箱</span>
                                </button>
                                <div className="f-btn-count">3</div>
                            </div>
                            <div className="function-btn-container">
                                <button className="f-btn">
                                    <i className="bi bi-calendar-date f-btn-icon-today"></i>
                                    <span className="f-btn-text">今天</span>
                                </button>
                                <div className="f-btn-count">1</div>
                            </div>
                            <div className="function-btn-container">
                                <button className="f-btn">
                                    <i className="bi bi-calculator-fill f-btn-icon-scan"></i>
                                    <span className="f-btn-text">预览</span>
                                </button>
                            </div>
                            <div className="function-btn-container">
                                <button className="f-btn">
                                    <i className="bi bi-tags f-btn-icon-tag"></i>
                                    <span className="f-btn-text">过滤器&标签</span>
                                </button>
                            </div>
                        </div>
                        <div className="all-project-container">
                            <div className="function-btn-container">
                                <div className="f-btn-c-title">项目</div>
                                <div>
                                    <button className="f-btn-c-t-btn">
                                        <i className="bi bi-plus-lg"></i>
                                    </button>
                                    <button className="f-btn-c-t-btn">
                                        {/*<i className="bi bi-caret-right"></i>*/}
                                        <i className="bi bi-caret-down"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="function-btn-container">
                                <button className="f-btn">
                                    <i className="fb-dot bi bi-record-fill"></i>
                                    <span className="f-btn-text">我的工作</span>
                                </button>
                                <div className="f-btn-count-container">
                                    <button className="f-btn-count-btn">
                                        <i className="bi bi-three-dots"></i>
                                    </button>
                                    <div className="f-btn-count">6</div>
                                </div>
                            </div>
                            <div className="function-btn-container">
                                <button className="f-btn">
                                    <i className="fb-dot bi bi-record-fill"></i>
                                    <span className="f-btn-text">家庭</span>
                                </button>
                                <div className="f-btn-count-container">
                                    <button className="f-btn-count-btn">
                                        <i className="bi bi-three-dots"></i>
                                    </button>
                                    <div className="f-btn-count">5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-bottom">
                        <button className="side-bottom-btn">
                            <i className="bi bi-plus-lg side-bottom-btn-icon"></i>
                            <span className="side-bottom-btn-text">添加团队工作空间</span>
                        </button>
                    </div>
                </div>

                <div className="main-part">
                    <div className="main-part-inner">
                        <div className="content-top-nav">
                            <div className="project-name">我的工作</div>
                            <div className="project-top-btn-nav">
                                <button className="project-task-top-button">
                                    <i className="bi bi-person-plus"></i>
                                    <span className="project-top-btn-text">共享</span>
                                </button>
                                <button className="project-task-top-button">
                                    <i className="bi bi-sliders"></i>
                                    <span className="project-top-btn-text">查看</span>
                                </button>
                                <button className="project-task-top-button">
                                    <i className="bi bi-chat-left"></i>
                                    <span className="project-top-btn-text">评论</span>
                                </button>
                                <button className="project-task-top-button project-top-btn-last">
                                    <i className="bi bi-three-dots"></i>
                                </button>
                            </div>
                        </div>
                        <div className="project-task">
                            <div className="task-container">
                                <div className="task-description">
                                    <div className="td-left-container">
                                        <button className="td-btn td-btn-move">
                                            <i className="bi bi-grid"></i>
                                        </button>
                                        <button className="td-btn td-btn-selected">
                                            <i className="bi bi-check-circle td-btn-icon-check"></i>
                                            <i className="bi bi-circle td-btn-icon-not-check"></i>
                                        </button>
                                        <div>
                                            <div className="td-text">
                                                关联Todoist与我的工作日历
                                            </div>
                                            <div className="task-comment">
                                                日历关联应用|Todoist
                                            </div>
                                        </div>
                                    </div>
                                    <div className="td-right-container">
                                        <button className="td-btn td-right-btn">
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="td-btn td-right-btn">
                                            <i className="bi bi-calendar4-event"></i>
                                        </button>
                                        <button className="td-btn td-right-btn">
                                            <i className="bi bi-chat-left"></i>
                                        </button>
                                        <button className="td-btn td-right-btn">
                                            <i className="bi bi-three-dots"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="task-line"/>
                            <button className="add-task-btn">
                                <i className="bi bi-plus add-task-btn-icon"></i>
                                <span className="add-task-btn-text">添加任务</span>
                            </button>
                            <div>
                                <button className="hover_action_button">添加板块</button>
                            </div>
                        </div>
                        <div className="">
                            <div className="actual-task-header">
                                <div className="ath-nav">
                                    <button className="td-btn ath-btn-move">
                                        <i className="bi bi-grid"></i>
                                    </button>
                                    <button className="td-btn">
                                        {/*<i className="bi bi-caret-right ath-control-icon"></i>*/}
                                        <i className="bi bi-caret-down ath-control-icon"></i>
                                    </button>
                                    <span className="ath-text">日常</span>
                                    <span className="ath-count">2</span>
                                </div>
                                <button className="project-task-top-button project-top-btn-last">
                                    <i className="bi bi-three-dots"></i>
                                </button>
                            </div>
                            <hr className="task-line"/>
                            <div className="task-container">
                                <div className="task-description">
                                    <div className="td-left-container">
                                        <button className="td-btn td-btn-move">
                                            <i className="bi bi-grid"></i>
                                        </button>
                                        <button className="td-btn td-btn-selected">
                                            <i className="bi bi-check-circle td-btn-icon-check"></i>
                                            <i className="bi bi-circle td-btn-icon-not-check"></i>
                                        </button>
                                        <div>
                                            <div className="td-text">
                                                test
                                            </div>
                                            <div className="task-comment">
                                                test
                                            </div>
                                        </div>
                                    </div>
                                    <div className="td-right-container">
                                        <button className="td-btn td-right-btn">
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="td-btn td-right-btn">
                                            <i className="bi bi-calendar4-event"></i>
                                        </button>
                                        <button className="td-btn td-right-btn">
                                            <i className="bi bi-chat-left"></i>
                                        </button>
                                        <button className="td-btn td-right-btn">
                                            <i className="bi bi-three-dots"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="task-line"/>
                            <button className="add-task-btn">
                                <i className="bi bi-plus add-task-btn-icon"></i>
                                <span className="add-task-btn-text">添加任务</span>
                            </button>
                            <div>
                                <button className="hover_action_button">添加板块</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
