import HomePage from "./pages/HomePage";
import Articles from "./pages/Articles";
import MLResponse from "./pages/MLResponse";
import NoPage from "./pages/NoPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import SendComment from "./components/SendComment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/report" element={<MLResponse />} />
        <Route path="/community" element={<Articles />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comment" element={<SendComment />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
