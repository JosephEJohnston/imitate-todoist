import React from "react";
import Link from "next/link";
import {useTabOnShow, useTabOnShowDispatch} from "@/component/side/TabOnShowContext";

interface MenuItemProps {
    index: number,
    path: string,
    children: React.ReactNode,
}

export default function MenuItem ({index, path, children}: MenuItemProps) {
    const onShowStatus = useTabOnShow();
    const dispatch = useTabOnShowDispatch();

    return (
        <>
            <Link href={path}>
                <div className={`function-btn-container 
                ${onShowStatus.onShowIndex === index ?
                    `function-btn-container-on-show` : ``}`}
                     onClick={_ => dispatch({
                         type: 'changeOnShow',
                         index
                     })}>

                    {children}
                </div>
            </Link>
        </>
    );
}