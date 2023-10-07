
export default function InBoxMenuItem () {
    return (
        <div className="function-btn-container">
            <button className="f-btn">
                <i className="bi bi-box-seam f-btn-icon-box"></i>
                <span className="f-btn-text">收件箱</span>
            </button>
            <div className="f-btn-count">3</div>
        </div>
    );
}
