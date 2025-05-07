import React from 'react'

interface TeamType{
     IPL:string[]
}
const Teams = (props:TeamType) => {
  return (
    <div>
      {props.IPL.map((team)=>(<div>{team}</div>))}
    </div>
  )
}

export default Teams;
