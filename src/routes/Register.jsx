import { useState } from "react";
import Input from "../components/Input";
import EmailIcon from "../components/icons/EmailIcon";
import UserIcon from "../components/icons/UserIcon";
import KeyIcon from "../components/icons/KeyIcon";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserDetails((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await register(userDetails);

    if (result) {
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <Layout>
      <div className="h-[80dvh] w-screen flex flex-col justify-center items-center">
        <form
          className="w-[450px] min-h-80 bg-slate-700 py-10 px-8 rounded-lg flex flex-col items-left justify-evenly shadow-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <h3 className="text-left text-slate-200 font-bold text-lg">
              Welome to Devlog!
            </h3>
            <p className="text-left text-slate-300 font-normal text-sm mt-1.5">
              Create your account below!!
            </p>
          </div>

          <div>
            <Input
              type="text"
              icon={<UserIcon />}
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              placeholder="Enter your Name"
            />
            <Input
              type="email"
              icon={<EmailIcon />}
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
            />
            <Input
              type="password"
              icon={<KeyIcon />}
              name="password"
              value={userDetails.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="px-8 py-2 bg-slate-500 hover:bg-slate-600 shadow-lg text-slate-200 font-normal focus:ring-4 focus:outline-none focus:ring-slate-200 rounded-lg mt-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
