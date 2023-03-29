import { useState } from "react";
import AddUser from "./components/User/AddUsers";
import UserList from "./components/User/UserList";

function App() {
  const [userList,setUserLits]  = useState([]);
  
  const addUserHandler=(uName,uAge)=>{
    setUserLits((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}];
    })
  }
  
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
