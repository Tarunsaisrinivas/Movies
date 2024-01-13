import { BrowserRouter, Routes, Route } from "react-router-dom";
// Correct import statement for ReactDOM

import Home from "./Pages/Home";
import SideBar from "./Components/SideBar";
import SlideBar from "./Pages/SlideBar";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
    {/* <Header /> */}
      <SideBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/SlideBar" element={<SlideBar />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

