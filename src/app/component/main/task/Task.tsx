import TaskFunctionNav from "@/app/component/main/task/TaskFunctionNav";

export default function Task () {
    return (
        <>
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
                    <TaskFunctionNav />
                </div>
            </div>
            <hr className="task-line"/>
        </>
    );
}