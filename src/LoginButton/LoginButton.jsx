import React, { useState } from "react";
import "./LoginButton.scss";
const LoginButton = ({ accountPwd, accountEmail }) => {
  const [errorType, setErrorType] = useState("");

  const Login = () => {
    const accountpwdAarray = [];
    const accountEmailAarray = [];
    const error = [];
    for (let i = 0; i < accountPwd.length; i++) {
      accountpwdAarray.push(accountPwd.substr(i, 6));
      accountEmailAarray.push(accountEmail.substr(i, 6));
      // console.log("accountEmailAarray", accountEmail.substr(i, 6));
      // console.log("accountpwdAarray", accountpwdAarray);
    }
    accountpwdAarray.forEach((i) => {
      accountEmailAarray.forEach((j) => {
        if (i === j) {
          error.push(i, j);
        }
      });
    });
    // console.log(error);
    if (error.length > 0) {
      setErrorType(false);
    } else if (accountPwd && accountEmail && error.length === 0) {
      setErrorType(true);
    } else {
      setErrorType(false);
    }
  };
  return (
    <>
      <button className="LoginButton wobble-vertical" onClick={() => Login()}>
        Login
      </button>
      <div className="errorTypeMessage">
        {errorType === "" ? (
          <span>請輸入帳密</span>
        ) : errorType ? (
          <span>格式正確</span>
        ) : (
          <span>格式錯誤</span>
        )}
      </div>
    </>
  );
};

export default LoginButton;
