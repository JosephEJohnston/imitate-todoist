import Link from "next/link";
import {useTabOnShow, useTabOnShowDispatch} from "@/component/side/TabOnShowContext";

export default function BrowseMenuItem () {
    const index: number = 3;
    const onShowStatus = useTabOnShow();
    const dispatch = useTabOnShowDispatch();

    return (
        <>
            <Link href="/dashboard/browse">
                <div className={`function-btn-container 
                ${onShowStatus.onShowIndex === index ? `function-btn-container-on-show` : ``}`}
                onClick={_ => dispatch({
                    type: 'changeOnShow',
                    index
                })}>
                    <button className="f-btn">
                        <i className="bi bi-calculator-fill f-btn-icon-scan"></i>
                        <span className="f-btn-text">预览</span>
                    </button>
                </div>
            </Link>
        </>
    );
}
