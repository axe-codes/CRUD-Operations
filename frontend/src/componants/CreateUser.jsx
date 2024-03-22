import { useState } from "react";
import useCreateUser from "../hooks/useCreateUser";

const CreateUser = ({ count, setCount }) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    phoneNo: "",
  });

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1); // Update count state using useState
    console.log("AddCount:", count); // Ensure count is updated in the console
  };

  const addUser = useCreateUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(inputs);
  };
  return (
    <div className="d-flex fd-c justify-content-center align-items-center w-50 my-border m-top-80">
      <h3 className="mt-4">Create User</h3>
      <span>Add API called : {count} times </span>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-2">
          <label className="form-label">FullName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Dipesh Sedani"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="axecodes"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone No</label>
          <input
            type="text"
            className="form-control"
            placeholder="must be 10 digits"
            value={inputs.phoneNo}
            onChange={(e) => setInputs({ ...inputs, phoneNo: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={handleClick}
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
