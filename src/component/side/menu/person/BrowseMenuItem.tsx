import MenuItem from "@/component/side/menu/MenuItem";

export default function BrowseMenuItem () {

    return (
        <>
            <MenuItem path={"/dashboard/browse"}>
                <button className="f-btn">
                    <i className="bi bi-calculator-fill"></i>
                    <span className="f-btn-text">预览</span>
                </button>
            </MenuItem>
        </>
    );
}
