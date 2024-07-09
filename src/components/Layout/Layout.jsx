// Layout.jsx

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <p>mytestuser123@mail.com</p>
      <p>mytestuser1234@mail.com</p>
      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Layout;
