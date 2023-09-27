import InBoxMenuItem from "@/app/component/side/person-menu/InBoxMenuItem";
import TodayMenuItem from "@/app/component/side/person-menu/TodayMenuItem";
import BrowseMenuItem from "@/app/component/side/person-menu/BrowseMenuItem";
import TagMenuItem from "@/app/component/side/person-menu/TagMenuItem";

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

