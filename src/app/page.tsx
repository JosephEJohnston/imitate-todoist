import './styles/global-common.css'
import "./styles/nav.css"
import "./styles/content.css"
import "./styles/side.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Nav from "@/app/component/Nav";
import SidePart from "@/app/component/side/SidePart";
import MainPart from "@/app/component/main/MainPart";

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
