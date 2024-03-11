import MenuItem from "@/component/side/menu/MenuItem";

export default function TagMenuItem () {
    return (
        <>
            <MenuItem path={"/dashboard/tag"}>
                <button className="f-btn">
                    <i className="bi bi-tags"></i>
                    <span className="f-btn-text">过滤器&标签</span>
                </button>
            </MenuItem>
        </>
    );
}
