import {useTaskOnShow, useTaskOnShowSetter} from "@/component/main/task/TaskOnShowContext";

export default function DetailTaskHeader () {
    const taskOnShow = useTaskOnShow();
    const taskOnShowSetter = useTaskOnShowSetter();

    return (
        <>
            <div className="actual-task-header">
                <div className="ath-nav">
                    <button className="td-btn ath-btn-move">
                        <i className={`bi bi-grid`}></i>
                    </button>
                    <button className={`td-btn  ${taskOnShow ? `` : `icon-transform-270`}`}
                            onClick={(_) => taskOnShowSetter(!taskOnShow)}>
                        <i className={`bi bi-caret-down ath-control-icon`}></i>
                    </button>
                    <span className="ath-text">日常</span>
                    <span className="ath-count">2</span>
                </div>
                <button className="project-task-top-button project-top-btn-last">
                    <i className="bi bi-three-dots"></i>
                </button>
            </div>
            <hr className="task-line"/>
        </>
    );
}

