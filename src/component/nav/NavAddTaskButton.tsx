import {Dispatch, SetStateAction} from "react";

interface NavAddTaskButtonProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function NavAddTaskButton ({show, setShow}: NavAddTaskButtonProps) {

    function handleClick() {
        setShow(!show);
    }

    return (
        <>
            <button className="nav-button" onClick={handleClick}>
                <i className="nav-btn-icon bi bi-plus-lg"></i>
            </button>
        </>
    );
}