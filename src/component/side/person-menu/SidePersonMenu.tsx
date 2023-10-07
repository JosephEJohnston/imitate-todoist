import InBoxMenuItem from "@/component/side/person-menu/InBoxMenuItem";
import TodayMenuItem from "@/component/side/person-menu/TodayMenuItem";
import BrowseMenuItem from "@/component/side/person-menu/BrowseMenuItem";
import TagMenuItem from "@/component/side/person-menu/TagMenuItem";

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

