
export default function InBoxHeader () {
    return (
        <>
            <div className="content-top-nav">
                <div className="project-name">收件箱</div>
                <div className="project-top-btn-nav">
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
            <hr className="task-line"/>
        </>
    );
}
