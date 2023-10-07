import Link from "next/link";

export default function BrowseMenuItem () {
    return (
        <>
            <Link href="/dashboard/browse">
                <div className="function-btn-container">
                    <button className="f-btn">
                        <i className="bi bi-calculator-fill f-btn-icon-scan"></i>
                        <span className="f-btn-text">预览</span>
                    </button>
                </div>
            </Link>
        </>
    );
}
