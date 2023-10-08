import DetailTask from "@/component/main/task/detail/DetailTask";
import React from "react";
import InBoxHeader from "@/component/main/header/InBoxHeader";


export default function InBoxMainPart () {
    return (
        <>
            <div className="main-part-inner">
                <InBoxHeader />
                <DetailTask />
            </div>
        </>
    );
}