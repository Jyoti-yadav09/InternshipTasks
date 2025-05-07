import React from 'react';
import Home from './components/Home';
import PersonDetails from './components/PersonDetails';
import Teams from './components/Teams';

const App = () => {
  const Details={
     FName:"Jyoti",
     LName:"Yadav",
     Age:22,
     isVegan:false
  }

   const IPL=["MI", "CSK", "RCB"];

  return (
    <div>
       <Home name="Jyoti" age={22} isEligible={true}/>
       <PersonDetails Details={Details}/>
       <Teams IPL={IPL}/>
    </div>
  );
}

export default App;
