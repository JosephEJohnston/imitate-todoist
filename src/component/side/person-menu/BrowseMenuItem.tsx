import MenuItem from "@/component/side/MenuItem";

export default function BrowseMenuItem () {

    return (
        <>
            <MenuItem index={3} path={"/dashboard/browse"}>
                <button className="f-btn">
                    <i className="bi bi-calculator-fill f-btn-icon-scan"></i>
                    <span className="f-btn-text">预览</span>
                </button>
            </MenuItem>
        </>
    );
}
