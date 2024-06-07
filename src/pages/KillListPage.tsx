import { ConnectButton } from "@rainbow-me/rainbowkit";
import KillList from "../components/KillList";


export default function KillListPage() {
    return (
        <div className="KillListPage">
            <div className="Header">
                <ConnectButton />
            </div>

            <KillList/>
        </div>

    );
}