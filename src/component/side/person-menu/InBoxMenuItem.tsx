import MenuItem from "@/component/side/MenuItem";

export default function InBoxMenuItem () {
    return (
        <>
            <MenuItem index={1} path={"/dashboard/inbox"}>
                <button className="f-btn">
                    <i className="bi bi-box-seam f-btn-icon-box"></i>
                    <span className="f-btn-text">收件箱</span>
                </button>
                <div className="f-btn-count">3</div>
            </MenuItem>
        </>
    );
}
