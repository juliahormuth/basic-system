import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";

function RoutesApp() {
  <Routes>
    <Route path="/" element={SignIn} />
    <Route path="/register" element={SignUp} />
  </Routes>;
}

export default RoutesApp;
