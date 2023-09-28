import { useState } from "react";
import HeroImg from "../assets/HeroImg.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.error) {
      alert(json.error);
    }

    if (!json.success) {
      alert("Enter valid credentials");
    }

    if (json.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="absolute inset-0 z-[-1]">
        <img
          src={HeroImg}
          alt="Background Image"
          className="w-full h-full object-cover fixed"
        />
      </div>
      <div className="bg-gray-100 shadow-xl rounded-3xl px-8 pt-6 pb-8 flex flex-col w-[50rem] mt-[8rem]">
        <h2 className="text-black font-bold text-2xl py-[1rem]">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-grey-darker font-bold mb-2 text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-grey-darker text-lg font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              required
            />
          </div>
          <button
            type="submit"
            className="border border-black font-bold py-2 px-4 rounded-xl hover:bg-black hover:text-white mr-[1.5rem]"
          >
            Login
          </button>
          <Link to="/register">
            <button
              type=""
              className="text-red-600 border border-black font-bold py-2 px-4 rounded-xl hover:bg-black hover:text-white"
            >
              Not Signed Up?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
