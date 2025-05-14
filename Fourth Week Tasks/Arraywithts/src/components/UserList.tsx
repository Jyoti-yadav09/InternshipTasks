import React from 'react';


 type User={
     id:number,
     name:string,
     email:string
 };

  type Props={
     users:User[];
  }

const UserList = () => {
  return (
    <div>
      <h2>User Lists</h2>
      <ul>
        {UserList.map((user)=>
        (
            <li key={user.id}>
                <p>
                    <strong>{user.name}</strong> -{user.email}
                </p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;
