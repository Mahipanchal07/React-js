import React, { useState } from 'react'

export default function Count() {

    const [state, setstate] = useState(0);

    function Inc(){
        setstate(prev=>prev+1)
    }
    function Dec(){
        setstate(prev=>prev-1)
    }
    function Reset(){
        setstate(0)
    }

    return (
        <div>
            <h2>Count  {state}</h2>
            <button onClick={Inc}>Inc</button>
            <button onClick={Dec}>Dec</button>
            <button onClick={Reset}>Reset</button>
       </div>
    );
}