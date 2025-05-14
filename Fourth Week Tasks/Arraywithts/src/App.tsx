import React from 'react';
import UserList from './components/UserList';



const App = () => {

  const users=[
    {id:1, name:"Sakura", email:"sakura@example.com"},
    {id:2, name:"Yuki", email:"yuki@example.com"},
    {id:3, name:"Takeshi", email:"takeshi@example.com"},
  ];

  return (
    <div>
      <UserList users={users}/>
    </div>
  )
}

export default App;
