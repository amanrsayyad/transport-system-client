import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Notifications } from "@bdhamithkumara/react-push-notification";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Tire from "./pages/tire/Tire";
import AddTire from "./pages/tire/AddTire";
import CluthPlate from "./pages/clutch/CluthPlate";
import AddCluthPlate from "./pages/clutch/AddCluthPlate";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./pages/tire/Edit";
import Truck from "./pages/truck/Truck";
import AddTruck from "./pages/truck/AddTruck";
import EditTruck from "./pages/truck/EditTruck";
import EditClutch from "./pages/clutch/EditClutch";

function App() {
  return (
    <Router>
      <ToastContainer
        style={{ zIndex: "100000000000" }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Notifications />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance-category" element={<Category />} />

        {/* ADD TIRE  */}
        <Route path="/tire" element={<Tire />} />
        <Route path="/add-tire" element={<AddTire />} />
        <Route path="/update/:id" element={<Edit />} />

        {/* ADD TRUCK  */}
        <Route path="/truck" element={<Truck />} />
        <Route path="/add-truck" element={<AddTruck />} />
        <Route path="/update-truck/:id" element={<EditTruck />} />

        {/* ADD CLUTCH PLATE  */}
        <Route path="/cluth-plate" element={<CluthPlate />} />
        <Route path="/add-cluth-plate" element={<AddCluthPlate />} />
        <Route path="/update-clutch/:id" element={<EditClutch />} />
      </Routes>
    </Router>
  );
}

export default App;
