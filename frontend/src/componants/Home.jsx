import { Link } from "react-router-dom";
import Users from "./Users";

const Home = () => {
  return (
    <div className="">
      <div>
        <p>
          <b>
            To add a new entry into the database, please click{" "}
            <Link to="/create" className="btn btn-primary">
              Add
            </Link>
          </b>
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center w-50 my-border">
        <Users />
      </div>
    </div>
  );
};

export default Home;
