import { Link } from "react-router-dom";

const User = ({ user }) => {
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/deleteuser/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <tr>
        <td>{user.fullName}</td>
        <td>{user.username}</td>
        <td>{user.phoneNo}</td>
        <th>
          <Link
            to={`/update/${user._id}`}
            className="btn btn-outline-info mr-2"
          >
            Update
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={(e) => handleDelete(user._id)}
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default User;
