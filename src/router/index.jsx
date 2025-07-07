import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/signin";
import { DefaultMessage } from "../components";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultMessage message={"My message"} />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};
