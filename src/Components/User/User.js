import "./User.css";
import { useState, Fragment } from "react";
import Modal from "../UI/Modal";

const User = (props) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    age: "",
    error: { state: false, title: "", message: "" },
  });

  function formChangeHandler(event) {
    setUser((prevState) => ({
      ...prevState,
      id: Math.floor(Math.random() * 1000),
      [event.target.name]: event.target.value,
    }));
  }
  function formSubmitHandler(event) {
    event.preventDefault();
    if (event.target.username.value.length > 0 && +event.target.age.value) {
      props.onAddUsersData(user);
      setUser({
        username: "",
        age: "",
        error: { state: false, title: "", message: "" },
      });
    }
    if (+event.target.age.value <= 0) {
      setUser({
        username: "",
        age: "",
        error: {
          state: true,
          title: "Enter Valid Age ( >0 )",
          message: "Something went wrong entering age value",
        },
      });
    }
    if (event.target.username.value.length <= 0) {
      setUser({
        username: "",
        age: "",
        error: {
          state: true,
          title: "Enter Valid Username",
          message: "Something went wrong entering Username",
        },
      });
    }
  }

  return (
    <Fragment>
      {user.error.state && ( 
        <Modal
          title={user.error.title}
          message={user.error.message}
          setUser={setUser}
        />
      )}
      <div className="form-container">
        <form className="form-control" onSubmit={formSubmitHandler}>
          <div className="form__inputs">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={formChangeHandler}
            />
          </div>
          <div className="form__inputs">
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              name="age"
              value={user.age}
              onChange={formChangeHandler}
            />
          </div>
          <div className="form__button">
            <button type="submit">Add User</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default User;
