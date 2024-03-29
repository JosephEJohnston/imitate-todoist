import MenuItem from "@/component/side/menu/MenuItem";

export default function InBoxMenuItem () {
    return (
        <>
            <MenuItem path={"/dashboard/inbox"}>
                <button className="f-btn">
                    <i className="bi bi-box-seam"></i>
                    <span className="f-btn-text">收件箱</span>
                </button>
                <div className="f-btn-count">3</div>
            </MenuItem>
        </>
    );
}
