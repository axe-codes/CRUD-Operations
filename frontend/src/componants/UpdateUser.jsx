import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useUpdateUser from "../hooks/useUpdateUser";

const UpdateUser = ({ count, setCount }) => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/getuser/${id}`);
        const data = await res.json();
        setUser(data);
        if (data.error) throw new Error(data.error);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getUser(); // Call the getUser function to fetch the user when the component mounts
  }, [id]); // Include id in the dependency array to refetch user when id changes

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1); // Update count state using useState
    console.log("AddCount:", count); // Ensure count is updated in the console
  };

  const updateUser = useUpdateUser();

  const handleSubmit = async (e) => {
    console.log("Inside handle update user");
    e.preventDefault();
    await updateUser(user);
  };

  return (
    <div className="d-flex fd-c justify-content-center align-items-center w-50 my-border m-top-80">
      <h3 className="mt-4">Update User</h3>
      <span>Update API called : {count} times </span>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-2">
          <label className="form-label">FullName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Dipesh Sedani"
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="axecodes"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone No</label>
          <input
            type="text"
            className="form-control"
            placeholder="must be 10 digits"
            value={user.phoneNo}
            onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={handleClick}
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
