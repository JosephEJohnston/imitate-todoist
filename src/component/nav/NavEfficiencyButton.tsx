import {Dispatch, SetStateAction} from "react";

interface NavEfficiencyButtonProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function NavEfficiencyButton (props: NavEfficiencyButtonProps) {

    // bug: 和 outsideClick 冲突
    function handleOnClick() {
        if (!props.show) {
            props.setShow(!props.show)
        }
    }

    return (
        <>
            <button className="nav-button"
                    onClick={handleOnClick}>
                <i className="nav-btn-icon bi bi-person-fill-up"></i>
                <span className="nav-btn-inner-text">0/5</span>
            </button>
        </>
    );
}