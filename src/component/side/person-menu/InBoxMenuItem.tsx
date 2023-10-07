import Link from "next/link";
import {useTabOnShow, useTabOnShowDispatch} from "@/component/side/TabOnShowContext";

export default function InBoxMenuItem () {
    const index: number = 1;
    const onShowStatus = useTabOnShow();
    const dispatch = useTabOnShowDispatch();

    return (
        <>
            <Link href="/dashboard/inbox">
                <div className={`function-btn-container 
                ${onShowStatus.onShowIndex === index ? `function-btn-container-on-show` : ``}`}
                     onClick={_ => dispatch({
                         type: 'changeOnShow',
                         index
                     })}>

                    <button className="f-btn">
                        <i className="bi bi-box-seam f-btn-icon-box"></i>
                        <span className="f-btn-text">收件箱</span>
                    </button>
                    <div className="f-btn-count">3</div>
                </div>
            </Link>
        </>
    );
}
