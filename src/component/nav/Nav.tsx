'use client'

import SideControlButton from "@/component/nav/SideControlButton";
import Link from "next/link";
import NavAddTaskButton from "@/component/nav/NavAddTaskButton";
import FixPositionAddTaskForm from "@/component/nav/FixPositionAddTaskForm";
import {useState} from "react";
import NavEfficiencyButton from "@/component/nav/NavEfficiencyButton";
import FixPositionEfficiencyBoard from "@/component/nav/FixPositionEfficiencyBoard";

function ToHomeButton() {
    return (
        <>
            <Link href="/dashboard/today">
                <button className="nav-button">
                    <i className="nav-btn-icon bi bi-house-door"></i>
                </button>
            </Link>
        </>
    );
}

export default function Nav() {
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);
    const [showEfficiencyBoard, setshowEfficiencyBoard] = useState(false);

    return (
        <>
            <nav className="top-nav">
                <div className="top-nav-left">
                    <SideControlButton />
                    <ToHomeButton />
                    <button className="nav-button nav-btn-search">
                        <i className="nav-btn-icon bi bi-search"></i>
                        <span className="nav-btn-search-text">搜索</span>
                    </button>
                </div>
                <div className="top-nav-right">
                    <button className="nav-button nav-btn-update">
                        <i className="nav-btn-icon bi bi-star-fill"></i>
                        <span className="nav-btn-inner-text nav-text-update">升级到专业版</span>
                    </button>
                    <NavAddTaskButton show={showAddTaskForm} setShow={setShowAddTaskForm} />
                    <NavEfficiencyButton show={showEfficiencyBoard} setShow={setshowEfficiencyBoard} />
                    <button className="nav-button">
                        <i className="nav-btn-icon bi bi-question-circle"></i>
                    </button>
                    <button className="nav-button">
                        <i className="nav-btn-icon bi bi-bell"></i>
                    </button>
                    <button className="nav-button nav-user-button">
                        <img className="user-img" src="/images/img.png" alt=""/>
                    </button>
                </div>
            </nav>
            <FixPositionAddTaskForm show={showAddTaskForm} setShow={setShowAddTaskForm} />
            <FixPositionEfficiencyBoard show={showEfficiencyBoard} setShow={setshowEfficiencyBoard}  />
        </>
    );
}
