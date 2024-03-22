import toast from "react-hot-toast";

const useCreateUser = () => {
  const addUser = async ({ fullName, username, phoneNo }) => {
    const success = handleInputErrors({ fullName, username, phoneNo });
    if (!success) return;

    try {
      const res = await fetch("http://localhost:5000/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, phoneNo }),
      });
      if (res.ok) {
        window.location.href = "/";
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return addUser;
};

export default useCreateUser;

function handleInputErrors({ fullName, username, phoneNo }) {
  if (!fullName || !username) {
    toast.error("Please fill FullName and Username fields");
    return false;
  }
  if (!fullName) {
    toast.error("Please fill FullName field");
    return false;
  }

  if (!username) {
    toast.error("Please fill Username field");
    return false;
  }

  if (phoneNo) {
    if (phoneNo.length !== 10) {
      toast.error("Phone No must be 10 digits");
      return false;
    }
  }
  return true;
}
