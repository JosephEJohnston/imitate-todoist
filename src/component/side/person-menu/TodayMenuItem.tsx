import Link from "next/link";

export default function TodayMenuItem () {
    return (
        <>
            <Link href="/today">
                <div className="function-btn-container">
                    <button className="f-btn">
                        <i className="bi bi-calendar-date f-btn-icon-today"></i>
                        <span className="f-btn-text">今天</span>
                    </button>
                    <div className="f-btn-count">1</div>
                </div>
            </Link>
        </>
    );
}
