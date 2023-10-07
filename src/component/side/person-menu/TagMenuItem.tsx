import Link from "next/link";

export default function TagMenuItem () {
    return (
        <>
            <Link href="/tag">
                <div className="function-btn-container">
                    <button className="f-btn">
                        <i className="bi bi-tags f-btn-icon-tag"></i>
                        <span className="f-btn-text">过滤器&标签</span>
                    </button>
                </div>
            </Link>
        </>
    );
}
