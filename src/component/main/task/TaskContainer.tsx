import Task from "@/component/main/task/Task";

export default function TaskContainer () {
    return (
        <>
            <Task />
            <button className="add-task-btn">
                <i className="bi bi-plus add-task-btn-icon"></i>
                <span className="add-task-btn-text">添加任务</span>
            </button>
            <div>
                <button className="hover_action_button">添加板块</button>
            </div>
        </>
    );
}