'use client'

import ProjectMenuItemList from "@/component/side/menu/project/ProjectMenuItemList";
import React, {Dispatch, SetStateAction, useCallback, useEffect, useRef, useState} from "react";

interface ProjectMenuTitleProps {
    tabOnShow: boolean,
    setTabOnShow: Dispatch<SetStateAction<boolean>>
}

function ProjectMenuTitle({tabOnShow, setTabOnShow}: ProjectMenuTitleProps) {
    let containerElement = useRef<HTMLElement>();
    let containerHeight = useRef<number>(0);
    let setStyleHeight = useRef(() => {
        if (containerElement.current === undefined) {
            return
        }

        containerElement.current.style
            .setProperty('height', containerHeight.current + 'px')
    })

    useEffect(() => {
        containerElement.current = document.getElementsByClassName(
            'project-task-container')[0] as HTMLElement;
        containerHeight.current = containerElement.current.scrollHeight;
        // 初始化设置一次高度
        (setStyleHeight.current)();
    }, [])

    function handleOnClick(_: React.MouseEvent<HTMLButtonElement>) {
        if (containerElement.current === undefined) {
            return;
        }

        setTabOnShow(!tabOnShow)
        if (tabOnShow) {
            containerElement.current.style
                .setProperty('height', 0 + 'px');
        } else {
            (setStyleHeight.current)();
        }
    }

    return (
      <>
        <div className="function-btn-container">
          <div className="f-btn-c-title">项目</div>
          <div>
              <button className="f-btn-c-t-btn">
                  <i className="bi bi-plus-lg"></i>
              </button>
              <button className={`f-btn-c-t-btn ${tabOnShow ? '' : 'btn-transform-90'}`}
                      onClick={handleOnClick}>
                  <i className="bi bi-caret-down"></i>
              </button>
          </div>
        </div>
      </>
    );
}

export default function SideProjectMenu () {
    const [tabOnShow, setTabOnShow] = useState(true);

    return (
        <div className="all-project-container">
            <ProjectMenuTitle tabOnShow={tabOnShow} setTabOnShow={setTabOnShow} />
            <ProjectMenuItemList tabOnShow={tabOnShow} />
        </div>
    );
}

