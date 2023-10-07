import {Context, createContext, Dispatch, useContext} from "react";

export interface OnShowStatus  {
    onShowIndex: number;
    indexCounter: number;
}


export interface OnShowAction {
    type: string,
    index: number,
}

/*
function assignIndex(): number {
    this.indexCounter++;

    return this.indexCounter;
}

function checkIndexOnShow(index: number): boolean {
    return index === this.onShowIndex;
}

function setIndexOnShow(index: number) {
    this.onShowIndex = index;
}
*/

export const TabOnShowContext: Context<OnShowStatus> = createContext({onShowIndex: 0, indexCounter: -1});
export const TabOnShowDispatchContext: Context<Dispatch<OnShowAction>> = createContext((_: OnShowAction) => {});

export function useTabOnShow() {
    return useContext(TabOnShowContext);
}

export function useTabOnShowDispatch() {
    return useContext(TabOnShowDispatchContext);
}
