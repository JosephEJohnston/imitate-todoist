'use client'

import {Context, createContext, Dispatch, SetStateAction, useContext} from "react";


export const TaskOnShowContext = createContext(true);
export const TaskOnShowSetter: Context<Dispatch<SetStateAction<boolean>>> = createContext((_) => {});

export function useTaskOnShow() {
    return useContext(TaskOnShowContext);
}

export function useTaskOnShowSetter() {
    return useContext(TaskOnShowSetter);
}
