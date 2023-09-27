
export default function SideProjectMenu () {
    return (
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
    );
}