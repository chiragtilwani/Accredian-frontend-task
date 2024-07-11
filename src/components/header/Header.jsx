import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Header.css";

const Header = (props) => {
  function handleLogout() {
    localStorage.removeItem("token");
    props.setToken(null);
    props.setName(null);
    toast.success("Logged out successfully!");
  }

  function handleLoginClick() {
    props.setLoginFormOpen(true);
  }
  return (
    <header className="header">
      <div className="header-container">
        <h1>REFER & EARN</h1>
        <span style={{ fontSize: "1.5rem", color: "#1A73E8" }}>
          {props.name && `Welcome ${props.name} !`}
        </span>
        <div className="header-buttons">
          {props.isAuthenticated ? (
            <Button
              variant="contained"
              className="LogoutBtn"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                className="LoginBtn"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
