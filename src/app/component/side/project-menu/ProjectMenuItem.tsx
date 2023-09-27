
export default function ProjectMenuItem () {
    return (
        <>
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
        </>
    );
}