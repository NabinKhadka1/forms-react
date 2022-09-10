import "./App.css";
import { useState, Fragment } from "react";
import UserList from "./Components/NewUser/UserList";
import User from "./Components/User/User";

function App() {
  const [usersData, setUsersData] = useState([
    {
      id: 12,
      name: "Ram",
      age: 15,
    },
    {
      id: 13,
      name: "Sita",
      age: 19,
    },
  ]);
  function onAddUsersData(user) {
    setUsersData((prevState) => {
      return [
        ...prevState,
        { id: user.id, name: user.username, age: +user.age },
      ];
    });
  }

  return (
    <Fragment>
      <User onAddUsersData={onAddUsersData} />
      <UserList users={usersData} />
    </Fragment>
  );
}

export default App;
