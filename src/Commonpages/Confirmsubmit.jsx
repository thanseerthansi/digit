import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
export  const submitdelete = (fun,itemid,hrid) => {
    confirmAlert({
        title: "Confirmation",
        message: `Are you sure to remove ?`,
        buttons: [
        {
            label: "Yes",           
            onClick:()=>fun(itemid,hrid),
        },
        {
            label: "No"
            // onClick: () => alert("Click No")
        } 
        ],
        
    });
    };
