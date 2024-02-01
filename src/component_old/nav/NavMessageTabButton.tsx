import {Dispatch, SetStateAction} from "react";

interface NavMessageTabButtonProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function NavMessageTabButton (props: NavMessageTabButtonProps) {

    function handleOnClick() {
        props.setShow(!props.show)
    }

    return (
        <>
            <button className="nav-button" onClick={handleOnClick}>
                <i className="nav-btn-icon bi bi-bell"></i>
            </button>
        </>
    );
}