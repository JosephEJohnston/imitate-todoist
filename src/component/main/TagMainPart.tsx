import DetailTask from "@/component_old/main/task/DetailTask";
import React from "react";
import TagHeader from "@/component/main/header/TagHeader";

export default function TagMainPart () {
    return (
        <>
            <div className="main-part-inner">
                <TagHeader />
                <DetailTask />
            </div>
        </>
    );
}
