import {Dispatch, SetStateAction} from "react";

interface NavUserTabButtonProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function NavUserTabButton (props: NavUserTabButtonProps) {

    function handleOnClick() {
        props.setShow(!props.show)
    }

    return (
        <>
            <button className="nav-button nav-user-button" onClick={handleOnClick}>
                <img className="user-img" src="/images/img.png" alt=""/>
            </button>
        </>
    );
}
