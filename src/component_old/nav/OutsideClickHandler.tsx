'use client'

import React, {Dispatch, MutableRefObject, SetStateAction, useEffect, useRef} from "react";

function useOutsideHandler(ref: MutableRefObject<any>, doWhenClick: Dispatch<SetStateAction<boolean>>) {
    useEffect(() => {

        function handleClickOutside(event: Event) {
            if (ref.current && !ref.current.contains(event.target)) {
                doWhenClick(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

interface OutsideClickHandlerProps {
    children: React.ReactNode,
    setStatusWhenClick: Dispatch<SetStateAction<boolean>>,
}

export default function OutsideClickHandler (props: OutsideClickHandlerProps) {
    const wrapperRef = useRef(null);
    useOutsideHandler(wrapperRef, props.setStatusWhenClick);

    return (
        <>
            <div ref={wrapperRef}>{props.children}</div>
        </>
    );
}