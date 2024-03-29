'use client'

import SideControlButton from "@/component_old/nav/SideControlButton";
import Link from "next/link";
import NavAddTaskButton from "@/component_old/nav/NavAddTaskButton";
import FixPositionAddTaskForm from "@/component_old/nav/FixPositionAddTaskForm";
import {useState} from "react";
import NavEfficiencyButton from "@/component_old/nav/NavEfficiencyButton";
import FixPositionEfficiencyBoard from "@/component_old/nav/FixPositionEfficiencyBoard";
import NavHelpButton from "@/component_old/nav/NavHelpButton";
import FixPositionHelpTab from "@/component_old/nav/FixPositionHelpTab";
import NavMessageTabButton from "@/component_old/nav/NavMessageTabButton";
import FixPositionMessageTab from "@/component_old/nav/FixPositionMessageTab";
import NavUserTabButton from "@/component_old/nav/NavUserTabButton";
import FixPositionUserTab from "@/component_old/nav/FixPositionUserTab";

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
    const [showEfficiencyBoard, setShowEfficiencyBoard] = useState(false);
    const [showHelpTab, setShowHelpTab] = useState(false);
    const [showMessageTab, setShowMessageTab] = useState(false);
    const [showUserTab, setShowUserTab] = useState(false);

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
                    <NavEfficiencyButton show={showEfficiencyBoard} setShow={setShowEfficiencyBoard} />
                    <NavHelpButton show={showHelpTab} setShow={setShowHelpTab}  />
                    <NavMessageTabButton show={showMessageTab} setShow={setShowMessageTab} />
                    <NavUserTabButton show={showUserTab} setShow={setShowUserTab} />
                </div>
            </nav>
            <FixPositionAddTaskForm show={showAddTaskForm} setShow={setShowAddTaskForm} />
            <FixPositionEfficiencyBoard show={showEfficiencyBoard} setShow={setShowEfficiencyBoard}  />
            <FixPositionHelpTab show={showHelpTab} setShow={setShowHelpTab} />
            <FixPositionMessageTab show={showMessageTab} setShow={setShowMessageTab} />
            <FixPositionUserTab show={showUserTab} setShow={setShowUserTab}  />
        </>
    );
}
