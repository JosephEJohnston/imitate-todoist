import DetailTask from "@/component/main/task/detail/DetailTask";
import React from "react";
import TodayHeader from "@/component/main/header/TodayHeader";

export default function TodayMainPart () {
    return (
        <>
            <div className="main-part-inner">
                <TodayHeader />
                <DetailTask />
            </div>
        </>
    );
}
