import React, {useId} from "react";
import Link from "next/link";
import {useTabOnShow, useTabOnShowDispatch} from "@/component/side/TabOnShowContext";

interface MenuItemProps {
    path: string,
    children: React.ReactNode,
}

export default function MenuItem ({path, children}: MenuItemProps) {
    const onShowStatus = useTabOnShow();
    const dispatch = useTabOnShowDispatch();
    const id = useId();

    return (
        <>
            <Link href={path}>
                <div className={`function-btn-container 
                ${onShowStatus.onShowIndex === id ?
                    `function-btn-container-on-show` : ``}`}
                     onClick={_ => dispatch({
                         type: 'changeOnShow',
                         index: id
                     })}>

                    {children}
                </div>
            </Link>
        </>
    );
}