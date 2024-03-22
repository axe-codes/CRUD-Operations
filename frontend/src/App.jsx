import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componants/Home";
import CreateUser from "./componants/CreateUser";
import UpdateUser from "./componants/UpdateUser";
import { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";
function App() {
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  return (
    <center>
      <div className="container m-top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create"
            element={<CreateUser count={addCount} setCount={setAddCount} />}
          />
          <Route
            path="/update/:id"
            element={
              <UpdateUser count={updateCount} setCount={setUpdateCount} />
            }
          />
        </Routes>
        <Toaster />
      </div>
    </center>
  );
}

export default App;
