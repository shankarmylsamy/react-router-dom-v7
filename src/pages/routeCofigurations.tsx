import React from "react";
import Login from "./login";
import Signup from "./signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouteConfigurations = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteConfigurations;

