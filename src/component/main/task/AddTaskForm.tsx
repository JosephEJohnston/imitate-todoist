import {Dispatch, SetStateAction} from "react";

interface AddTaskFromProps {
    doWhenCancel: Dispatch<SetStateAction<boolean>>;
    needShadow: boolean,
}

export default function AddTaskForm ({doWhenCancel, needShadow = false} : AddTaskFromProps) {

    function handleCancelButton() {
        doWhenCancel(true);
    }

    return (
        <>
            <div className={`add-new-task-form ${needShadow ? `add-new-task-form-with-shadow` : ``}`}>
                <div>
                    <input className={`add-task-input task-name-input`}
                           type="text" placeholder="任务名称"/>
                </div>
                <div>
                    <input className={`add-task-input add-task-description`}
                           type="text" placeholder="描述"/>
                </div>
                <div className={`task-des-btn-container`}>
                    <button className={`task-des-btn`}>
                        <i className="bi bi-calendar-event task-des-btn-icon"></i>
                        <span className={`task-des-btn-text`}>截止日期</span>
                    </button>
                    <button className={`task-des-btn`}>
                        <i className="bi bi-flag task-des-btn-icon"></i>
                        <span className={`task-des-btn-text`}>优先级</span>
                    </button>
                    <button className={`task-des-btn`}>
                        <i className="bi bi-alarm task-des-btn-icon"></i>
                        <span className={`task-des-btn-text`}>提醒</span>
                    </button>
                    <button className={`task-des-btn`}>
                        <i className="bi bi-three-dots"></i>
                    </button>
                </div>
                <hr className={`add-new-task-line`} />
                <div className={`add-new-task-bottom-button-container`}>
                    <div>
                        <button className={`antb-btn antb-btn-left`}>
                            <i className="bi bi-record-fill antb-btn-icon-dot"></i>
                            <span className={`antb-btn-text antb-bt-mywork`}>
                                我的工作
                            </span>
                            <i className="bi bi-caret-down-fill antb-btn-icon-down"></i>
                        </button>
                    </div>
                    <div>
                        <button className={`antb-btn antb-btn-right antb-btn-cancel`}
                                onClick={handleCancelButton}>
                            <span className={`antb-btn-text`}>
                                取消
                            </span>
                        </button>
                        <button className={`antb-btn antb-btn-right antb-btn-add-task`}>
                            <span className={`antb-btn-text`}>
                                添加任务
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}