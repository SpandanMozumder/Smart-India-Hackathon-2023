import { Link } from "react-router-dom";

export default function LoginSignUpButton() {
  return (
    <div>
      <Link to="/login">
        <button className="text-black border border-black px-[1rem] py-[0.5rem] m-[0.5rem] hover:bg-black hover:text-white rounded-full">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button className="bg-black text-white px-[1rem] py-[0.5rem] m-[0.5rem] hover:bg-white hover:border hover:border-black hover:text-black rounded-full">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
