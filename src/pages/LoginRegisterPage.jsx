import React, { useState } from "react";
import JNJLogo from "../imgs/jnj-logo.png";
import "../css/auth_forms.css";
import { Button, TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginRegisterPage = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d61200",
      },
    },
  });
  const navigate = useNavigate();
  const [displayForm, setDisplayForm] = useState({
    login: true,
    register: false,
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
    c_password:"",
  });
  const [displayFormStatus, setDisplayFormStatus] = useState({
    loginStatus: false,
    registerStatus: false,
    registerStatusFailed: false,
  });

  const onLogin = () => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: loginData.email,
        password: loginData.password,
      })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        console.log(response.data.data.token);
        console.log(response.data.success);

        if (response.data.success) {
          // alert(response.data.success);
          localStorage.setItem("token", response.data.data.token);
          navigate("/apqp");
        } else {
          alert("Login Failed");
          setDisplayFormStatus((prevStatus) => ({
            ...prevStatus,
            loginStatus: true,
          }));

          setTimeout(() => {
            setDisplayFormStatus((prevStatus) => ({
              ...prevStatus,
              loginStatus: false,
            }));
          }, 5000);
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        // alert("Login Failed");
        setDisplayFormStatus((prevStatus) => ({
          ...prevStatus,
          loginStatus: true,
        }));

        setTimeout(() => {
          setDisplayFormStatus((prevStatus) => ({
            ...prevStatus,
            loginStatus: false,
          }));
        }, 5000);
      });
  };

  const onRegister = () => {
    axios
      .post("http://127.0.0.1:8000/api/register", {
        email: registerData.email,
        password: registerData.password,
        c_password: registerData.c_password,
        name: registerData.fullname,

      })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        // console.log(response.data);
        console.log(response.data.data.token);
        console.log(response.data.success);

        console.log(registerData);

        if (response.data.success) {
          // alert(response.data.success);
          // localStorage.setItem("token", response.data.data.token);
          setDisplayFormStatus((prevStatus) => ({
            ...prevStatus,
            registerStatus: true,
          }));
          setTimeout(() => {
            setDisplayFormStatus((prevStatus) => ({
              ...prevStatus,
              registerStatus: true,
            }));
          }, 5000);
        } else {
          // alert("Login Failed");
          setDisplayFormStatus((prevStatus) => ({
            ...prevStatus,
            registerStatusFailed: true,
          }));

          setTimeout(() => {
            setDisplayFormStatus((prevStatus) => ({
              ...prevStatus,
              registerStatusFailed: false,
            }));
          }, 5000);
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);

        setDisplayFormStatus((prevStatus) => ({
          ...prevStatus,
          registerStatusFailed: true,
        }));

        setTimeout(() => {
          setDisplayFormStatus((prevStatus) => ({
            ...prevStatus,
            registerStatusFailed: false,
          }));
        }, 5000);
      });
  };

  return (
    <>
      <div className="container-fluid auth-form">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="left"></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="right">
              <div className="logo-area">
                <img src={JNJLogo} alt="" className="logo" />
              </div>

              {displayForm.login && (
                <>
                  {displayFormStatus.loginStatus && (
                    <p
                      style={{
                        backgroundColor: "red",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      Login Failed
                    </p>
                  )}

                  <ThemeProvider theme={theme}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      type="email"
                      className="form-input"
                      color="primary"
                      onChange={(e) => {
                        setLoginData({
                          ...loginData,
                          email: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                      className="form-input"
                      color="primary"
                      onChange={(e) => {
                        setLoginData({
                          ...loginData,
                          password: e.target.value,
                        });
                      }}
                    />
                    <Button
                      className="auth-btn"
                      startIcon={<VpnKeyOutlinedIcon />}
                      onClick={onLogin}
                    >
                      Login
                    </Button>

                    <p className="sub-link-description">
                      {" "}
                      <span
                        onClick={() => {
                          setDisplayForm({
                            ...displayForm,
                            login: false,
                            register: true,
                          });
                        }}
                      >
                        Create an account
                      </span>{" "}
                      if you don't have.
                    </p>
                  </ThemeProvider>
                </>
              )}

              {displayFormStatus.registerStatus && (
                <>
                  <p
                    style={{
                      backgroundColor: "green",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Successfully Registered
                  </p>
                </>
              )}
              {displayFormStatus.registerStatusFailed && (
                <>
                  <p
                    style={{
                      backgroundColor: "red",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Registration Failed
                  </p>
                </>
              )}
              {displayForm.register && (
                <>
                  <ThemeProvider theme={theme}>
                    <TextField
                      id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                      type="text"
                      className="form-input"
                      color="primary"
                      onChange={(e) => {
                        setRegisterData({
                          ...registerData,
                          fullname: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      type="email"
                      className="form-input"
                      color="primary"
                      onChange={(e) => {
                        setRegisterData({
                          ...registerData,
                          email: e.target.value,
                        });
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                      className="form-input"
                      color="primary"
                      onChange={(e) => {
                        setRegisterData({
                          ...registerData,
                          password: e.target.value,
                        });
                      }}
                    />
                     <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                      className="form-input"
                      color="primary"
                      onChange={(e) => {
                        setRegisterData({
                          ...registerData,
                          c_password: e.target.value,
                        });
                      }}
                    />
                    <Button
                      className="auth-btn"
                      startIcon={<VpnKeyOutlinedIcon />}
                      onClick={onRegister}
                    >
                      Register
                    </Button>

                    <p className="sub-link-description">
                      {" "}
                      <span
                        onClick={() => {
                          setDisplayForm({
                            ...displayForm,
                            login: true,
                            register: false,
                          });
                        }}
                      >
                        Login
                      </span>{" "}
                      if you already have an account.
                    </p>
                  </ThemeProvider>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegisterPage;
