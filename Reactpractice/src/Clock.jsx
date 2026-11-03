import { useState } from "react";

function Clock() {

const [time, setTime] = useState(new Date().toLocaleString());

    return (
        <>
        <h1> Current Time: {time} </h1>
        
        </>
    )
}

export default Clock;