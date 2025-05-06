import React from 'react'

 type PropsType={
     name:string,
     age:number,
     isEligible:boolean
 }

const Home = (props:PropsType) => {
  return (
    <div>
      <div>
        Hey {props.name}, Welcome to this Page.
      </div>
    </div>
  )
}

export default Home;
