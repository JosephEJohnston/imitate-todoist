import InBoxMenuItem from "@/app/component/side/person-menu/in-box-menu-item";
import TodayMenuItem from "@/app/component/side/person-menu/today-menu-item";
import BrowseMenuItem from "@/app/component/side/person-menu/browse-menu-item";
import TagMenuItem from "@/app/component/side/person-menu/tag-menu-item";

export default function SidePersonMenu () {
    return (
        <div>
            <InBoxMenuItem />
            <TodayMenuItem />
            <BrowseMenuItem />
            <TagMenuItem />
        </div>
    );
}

