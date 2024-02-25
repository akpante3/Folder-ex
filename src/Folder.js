import { useState } from "react";
import "./App.css";



function Folder({ data }) {

const [activeFolder , setActiveFolder] = useState(false)
  return (<div>{
    data.map((d) => {
        if (d.isFolder) {
            return (<div>
                <div onClick={() => setActiveFolder(!activeFolder)}>{d.name}</div> 
                { activeFolder ? <div className="sub-files">{ d.subFiles ? <Folder data={d.subFiles} /> : null }</div> : null}
            </div>)
        }
        return <div>{d.name}</div>;
    })
    
    }</div>);
}

export default Folder;
