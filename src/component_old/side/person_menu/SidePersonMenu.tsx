import InBoxMenuItem from "@/component_old/side/person_menu/InBoxMenuItem";
import TodayMenuItem from "@/component_old/side/person_menu/TodayMenuItem";
import BrowseMenuItem from "@/component_old/side/person_menu/BrowseMenuItem";
import TagMenuItem from "@/component_old/side/person_menu/TagMenuItem";

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

