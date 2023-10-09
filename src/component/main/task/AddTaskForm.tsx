
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
                <div>
                    <button>
                        <i className="bi bi-calendar-event"></i>
                        <span>截止日期</span>
                    </button>
                    <button>
                        <i className="bi bi-flag"></i>
                        <span>优先级</span>
                    </button>
                    <button>
                        <i className="bi bi-alarm"></i>
                        <span>提醒</span>
                    </button>
                    <button>
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