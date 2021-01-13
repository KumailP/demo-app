import { useEffect, useState } from "react";
import CurrentUser from "../CurrentUser/CurrentUser";
import s from "./UsersList.module.css";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((err) => console.err(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const closeModal = () => {
    setCurrentUser(null);
  };

  const openModal = (user) => {
    setCurrentUser(user);
  };

  return (
    <div className={s.usersList}>
      <h1 className={s.heading}>Users List</h1>
      <ul className={s.list}>
        {users.map((user) => (
          <li key={user.id} onClick={(e) => openModal(user)}>
            {user.name}
          </li>
        ))}
      </ul>
      <CurrentUser user={currentUser} onClose={closeModal} />
    </div>
  );
}
