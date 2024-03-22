import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users");
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setUsers(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getUsers(); // Call the getUsers function to fetch users when the component mounts
  }, []);

  return (
    <div className="data-w p-2">
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Phone No</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <span className="f-s">
              There are no users in the database to display, you can add the
              users by clicking above add button
            </span>
          ) : (
            users.map((user) => <User key={user._id} user={user} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

{
  /* {users.map((user) => (
            <User key={user._id} user={user} />
          ))} */
}
