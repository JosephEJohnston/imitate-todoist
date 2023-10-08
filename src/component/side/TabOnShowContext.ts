import {Context, createContext, Dispatch, useContext} from "react";
import {Draft} from "immer";

export interface OnShowStatus  {
    onShowIndex: string;
}


export interface OnShowAction {
    type: string,
    index: string,
}

export function onShowReducer(draft: Draft<OnShowStatus>, action: OnShowAction) {
    switch (action.type) {
        case 'changeOnShow': {
            draft.onShowIndex = action.index;
            break;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export const TabOnShowContext: Context<OnShowStatus> = createContext({onShowIndex: '0'});
export const TabOnShowDispatchContext: Context<Dispatch<OnShowAction>> = createContext((_: OnShowAction) => {});

export function useTabOnShow() {
    return useContext(TabOnShowContext);
}

export function useTabOnShowDispatch() {
    return useContext(TabOnShowDispatchContext);
}

