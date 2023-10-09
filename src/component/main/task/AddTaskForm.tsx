
export default function AddTaskForm () {
    return (
        <>
            <div className={`add-new-task-form`}>
                <div>
                    <input className={`add-task-input task-name-input`}
                           type="text" placeholder="任务名称"/>
                </div>
                <div>
                    <input className={`add-task-input task-description`}
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
                        <button>
                            <span>我的工作</span>
                        </button>
                    </div>
                    <div>
                        <button>
                            <span>取消</span>
                        </button>
                        <button>
                            <span>添加任务</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}