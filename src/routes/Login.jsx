import { useState } from "react";
import Input from "../components/Input";
import EmailIcon from "../components/icons/EmailIcon";
import KeyIcon from "../components/icons/KeyIcon";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/services/user";
import { loginUser } from "../api/auth";
import Layout from "./Layout";

const Login = () => {
  const navigate = useNavigate();
  const { mutate } = useUser();

  const [userDetails, setUserDetails] = useState({
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

    const user = await loginUser(userDetails);

    if (user) {
      localStorage.setItem("auth_token", JSON.stringify(user.token));
      mutate();

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
          // method="POST"
        >
          <div>
            <h3 className="text-left text-slate-200 font-bold text-lg">
              Welome back to Devlog!
            </h3>
            <p className="text-left text-slate-300 font-normal text-sm mt-1.5">
              Enter your credentials below
            </p>
          </div>

          <div>
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
              Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
