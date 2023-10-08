
export default function TodayHeader () {
    return (
        <>
            <div className="content-top-nav">
                <div className="today-header-name-container">
                    <div className="project-name">今天</div>
                    <div className="today-header-date">日</div>
                    <div className="today-header-date">10月8日</div>
                </div>
                <div className="project-top-btn-nav">
                    <button className="project-task-top-button">
                        <i className="bi bi-sliders"></i>
                        <span className="project-top-btn-text">查看</span>
                    </button>
                    <button className="project-task-top-button project-top-btn-last">
                        <i className="bi bi-three-dots"></i>
                    </button>
                </div>
            </div>
            <hr className="task-line"/>
        </>
    );
}
