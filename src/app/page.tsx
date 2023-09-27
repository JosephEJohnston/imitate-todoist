import './styles/global-common.css'
import "./styles/nav.css"
import "./styles/content.css"
import "./styles/side.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Nav from "@/app/component/nav";
import SidePart from "@/app/component/side/side-part";
import MainPart from "@/app/component/main/main-part";

export default function Home() {
    return (
        <div>
            <Nav />
            <div id="content">

                <SidePart />
                <MainPart />
            </div>
        </div>
    )
}
