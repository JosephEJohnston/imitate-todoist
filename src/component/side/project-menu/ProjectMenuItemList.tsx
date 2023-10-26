'use client'

import MenuItem from "@/component/side/MenuItem";
import {useEffect, useState} from "react";

interface ProjectMenuItemProps {
    id: number;
    name: string;
    count: number;
}

function ProjectMenuItem({id, name, count}: ProjectMenuItemProps) {
    return (
        <>
            <MenuItem path={`/dashboard/project/${id}`} >
                <button className="f-btn">
                    <i className="fb-dot bi bi-record-fill"></i>
                    <span className="f-btn-text">{name}</span>
                </button>
                <div className="f-btn-count-container">
                    <button className="f-btn-count-btn">
                        <i className="bi bi-three-dots"></i>
                    </button>
                    <div className="f-btn-count">{count}</div>
                </div>
            </MenuItem>
        </>
    )
}

const initMenuItemList = [
    {
        id: 1,
        name: '我的工作1',
        count: 6,
    },
    {
        id: 2,
        name: '我的工作2',
        count: 7,
    },
];

interface MenuItem {
    id: number;

    name: string;

    count: number;
}

interface ProjectMenuItemListProps {
    tabOnShow: boolean
}

async function fetchMenuList(): Promise<MenuItem[]> {
    const res = await fetch('http://localhost:3001/project')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export default function ProjectMenuItemList ({tabOnShow}: ProjectMenuItemListProps) {
    const [menuList, setMenuList] = useState(initMenuItemList);

    useEffect(() => {
        const data = fetchMenuList();

        data.then(res => {
            console.log(res);
            setMenuList(res);
        })

    }, [])

    return (
        <>
            <div className={`project-task-container 
                    ${tabOnShow ? '' : 'project-task-container-not-show'}`}>
                {menuList.map(item =>
                    <ProjectMenuItem key={item.id} id={item.id} name={item.name} count={item.count}/>)}
            </div>
        </>
    );
}