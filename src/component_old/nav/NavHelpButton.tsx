import {Dispatch, SetStateAction} from "react";


interface NavHelpButtonProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}
export default function NavHelpButton (props: NavHelpButtonProps) {

    function handleOnClick() {
        props.setShow(!props.show)
    }

    return (
        <>
            <button className="nav-button" onClick={handleOnClick}>
                <i className="nav-btn-icon bi bi-question-circle"></i>
            </button>
        </>
    );
}