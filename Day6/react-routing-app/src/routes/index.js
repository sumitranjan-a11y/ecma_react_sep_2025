import { Route, Routes } from "react-router-dom";
import HomeComponent from "../components/home/HomeComponent";
import AboutComponent from "../components/about/AboutComponent";
import NoMatchComponent from "../components/no-match/NoMatchComponent";
import AdminComponent from "../components/admin/AdminComponentMine";
import LoginComponent from "../components/login/LoginComponentMine";
import AssignmentComponent from "../components/assignment/AssignmentComponentMine";

export default (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/assignment" element={<AssignmentComponent />} />
        <Route path="*" element={<NoMatchComponent />} />
    </Routes>
);