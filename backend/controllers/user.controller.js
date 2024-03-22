import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const getAllUsers = await User.find();
    res.status(200).json(getAllUsers);
  } catch (error) {
    console.log("Error in getUsers controller", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const addUser = async (req, res) => {
  try {
    const { fullName, username, phoneNo } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    if (phoneNo) {
      if (phoneNo.length !== 10) {
        console.log("Please enter a valid phone number");
        return res
          .status(400)
          .json({ error: "Please enter a valid phone number" });
      }
    }

    const newUser = new User({
      fullName,
      username,
      phoneNo,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      phoneNo: newUser.phoneNo,
    });
  } catch (error) {
    console.log("Error in addUser controller", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findById({ _id: id });
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    console.log("Error in getUser controller", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { fullName, username, phoneNo } = req.body;
    const data = await User.findByIdAndUpdate(
      { _id: id },
      {
        fullName,
        username,
        phoneNo,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    onsole.log("Error in updateUser controller", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    onsole.log("Error in deleteUser controller", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};
