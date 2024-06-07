import KillListItem from "./KillListItem";
import { useState } from "react";

export default function KillList() {
    const [itemCount, setItemCount] = useState(0);
    const [killListItems, setKillListItems] = useState<JSX.Element[]>([]);


    const handleAddKillListItem = () => {
        setItemCount(itemCount + 1);
        setKillListItems([...killListItems, <KillListItem key={itemCount} />]);
      };
    


    return(
        <div className="KillList">
            {killListItems}

        <div className="TestBox">
            <button onClick={handleAddKillListItem}>ADD ITEM</button>
        </div>
        
        </div>

    );
}