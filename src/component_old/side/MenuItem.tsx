import React, {useEffect, useId} from "react";
import Link from "next/link";
import {useTabOnShow, useTabOnShowDispatch} from "@/component_old/side/TabOnShowContext";
import {usePathname, useRouter} from "next/navigation";

interface MenuItemProps {
    path: string,
    children: React.ReactNode,
}

export default function MenuItem ({path, children}: MenuItemProps) {
    const onShowStatus = useTabOnShow();
    const dispatch = useTabOnShowDispatch();
    const pathname = usePathname();
    const id = useId();

    useEffect(() => {
        if (pathname === path ||
            (pathname === '/' && path === '/dashboard/today')) {
            dispatch({
                type: 'changeOnShow',
                index: id
            })
        }
    }, [pathname])

    return (
        <>
            <Link href={path}>
                <div className={`function-btn-container 
                ${onShowStatus.onShowIndex === id ?
                    `function-btn-container-on-show` : ``}`}
                >

                    {children}
                </div>
            </Link>
        </>
    );
}