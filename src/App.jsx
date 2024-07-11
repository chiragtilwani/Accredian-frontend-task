import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import HeroSection from "./components/hero/Hero";
import ReferralFormModal from "./components/referralFormModal/ReferralFormModal";
import Carousels from "./components/carousel/Carousels";
import Footer from "./components/footer/Footer";
import LoginForm from "./components/loginForm/LoginForm";
import Header from "./components/header/Header";

const baseUrl = import.meta.env.VITE_BASE_URL;

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [loginFormOpen, setLoginFormOpen] = useState(false);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      setToken(token);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleReferNow = () => {
    if (!token) {
      toast.warn("You must be logged in to perform this action.");
      handleCloseModal();
      setLoginFormOpen(true);
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    if (token) {
      const referPromise = axios.post(`${baseUrl}/referral`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.promise(referPromise, {
        pending: "Processing your referral request...",
        success: "Referral submitted successfully!",
        error: "Error submitting referral. Please try again!",
      });

      try {
        await referPromise;
      } catch (error) {
        console.error("Error during referral submission:", error);
      }
    } else {
      setLoginFormOpen(true);
    }
    handleCloseModal();
  };

  return (
    <>
      <div className="container">
        <ToastContainer position="top-center" />
        <LoginForm
          loginFormOpen={loginFormOpen}
          setLoginFormOpen={setLoginFormOpen}
          setToken={setToken}
        />
        <Header
          isAuthenticated={!!token}
          setToken={setToken}
          loginFormOpen={loginFormOpen}
          setLoginFormOpen={setLoginFormOpen}
        />
        <Carousels />
        <HeroSection onReferNow={handleReferNow} />
        <ReferralFormModal
          open={modalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
