import "./UserList.css";

const UserList = (props) => {
  // console.log(props.users)
  return (
    <div className="container">
      <ul className="user-list">
        {props.users.map((user) => (
          <li className="user-item" key={user.id}>{`${user.name} (${user.age} years)`}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
