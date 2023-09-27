import SideControlButton from "@/app/component/nav/SideControlButton";

export default function Nav() {
    return (
        <nav className="top-nav">
            <div className="top-nav-left">
                <SideControlButton />
                <button className="nav-button">
                    <i className="nav-btn-icon bi bi-house-door"></i>
                </button>
                <button className="nav-button nav-btn-search">
                    <i className="nav-btn-icon bi bi-search"></i>
                    <span className="nav-btn-search-text">搜索</span>
                </button>
            </div>
            <div className="top-nav-right">
                <button className="nav-button nav-btn-update">
                    <i className="nav-btn-icon bi bi-star-fill"></i>
                    <span className="nav-btn-inner-text nav-text-update">升级到专业版</span>
                </button>
                <button className="nav-button">
                    <i className="nav-btn-icon bi bi-plus-lg"></i>
                </button>
                <button className="nav-button">
                    <i className="nav-btn-icon bi bi-person-fill-up"></i>
                    <span className="nav-btn-inner-text">0/5</span>
                </button>
                <button className="nav-button">
                    <i className="nav-btn-icon bi bi-question-circle"></i>
                </button>
                <button className="nav-button">
                    <i className="nav-btn-icon bi bi-bell"></i>
                </button>
                <button className="nav-button nav-user-button">
                    <img className="user-img" src="../../../../static/image/img.png" alt=""/>
                </button>
            </div>
        </nav>
    );
}
