import InBoxMenuItem from "@/component/side/menu/person/InBoxMenuItem";
import TodayMenuItem from "@/component/side/menu/person/TodayMenuItem";
import BrowseMenuItem from "@/component/side/menu/person/BrowseMenuItem";
import TagMenuItem from "@/component/side/menu/person/TagMenuItem";

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

