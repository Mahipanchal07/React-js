import React, { useState } from 'react';

export default function Array() {
  const [arr,setarr]=useState(
   {
    name: "Mahi Panchal",
    age: 18,
    occupation: "Full Stack Developer"
  })
  return (
    <div>
     <ul>
      {Object.keys(arr).map((key,index)=>(
        <li key={index}>
          {key}:{arr[key]}
        </li>
      ))}
     </ul>
    </div>
    );
}