import { useState } from "react";
import folderLogo from '../assets/folder-icon.png'
import fileLogo from '../assets/file.png'
import "../App.css";



function Folder({ data }) {

const [activeFolder , setActiveFolder] = useState(false)
  return (<div>{
    data.map((d) => {
        if (d.isFolder) {
            console.log(d.isFolder)
            return (<div key={d.id}>
                <div onClick={() => setActiveFolder(!activeFolder)}> <img alt="folder" style={{width: "24px"} } src={folderLogo}/>{d.name}</div> 
                { activeFolder ? <div className="sub-files">{ d.subFiles ? <Folder data={d.subFiles} /> : null }</div> : null}
            </div>)
        }
        return (<div key={d.id}><img alt="folder" style={{width: "24px", height: '20px'} } src={fileLogo}/>{d.name}</div>)
    })
    
    }</div>);
}

export default Folder;
