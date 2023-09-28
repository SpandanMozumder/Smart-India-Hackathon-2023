import { useState } from "react";
import HeroImg from "../assets/HeroImg.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email: email,
        password: password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.error) {
      alert(json.error);
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
      <div className="bg-gray-100 shadow-xl rounded-3xl px-8 pt-6 pb-8 flex flex-col w-[50rem] mt-[6rem]">
        <h2 className="text-black font-bold text-2xl py-[1rem]">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-grey-darker font-bold mb-2 text-lg"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              required
            />
          </div>
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
            Sign Up
          </button>
          <Link to="/login">
            <button
              type="button"
              className="text-red-600 border border-black font-bold py-2 px-4 rounded-xl hover:bg-black hover:text-white"
            >
              Already Signed Up?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
