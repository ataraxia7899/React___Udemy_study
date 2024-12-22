import React, { useState }from 'react';
import AddUser from "./components/Users/AddUser.js"
import UserList from "./components/Users/UserList.js"

// 
function App() {
  const [userList, setuserList] = useState([]);

  const adduserHandler = (uName, uAge) => {
    setuserList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  }

  return (
    <div>
      <AddUser onAddUser={adduserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
