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
          error.push(i);
        }
      });
    });
    console.log(error);
    if (error.length > 0) {
      setErrorType(false);
    } else if (
      accountPwd.length >= 6 &&
      accountEmail.length >= 6 &&
      error.length === 0
    ) {
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
        ) : accountEmail.length < 6 ? (
          <span>帳號請輸入六碼以上</span>
        ) : accountPwd.length < 6 ? (
          <span>密碼請輸入六碼以上</span>
        ) : (
          <span>密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複</span>
        )}
      </div>
    </>
  );
};

export default LoginButton;
