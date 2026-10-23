import React from 'react'
import { useState } from 'react';
import explorer from "./data/folderData"
import Folder from "./components/Folder"

const App = () => {

const[explorerData, setExplorerData] = useState(explorer)


  return (
    <div>
      <Folder explorer={explorerData}/>
    </div>
  )
}

export default App