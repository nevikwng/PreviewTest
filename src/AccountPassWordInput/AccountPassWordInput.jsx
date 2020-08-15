import React from "react";
import './AccountPassWordInput.scss'
const AccountPassWordInput = ({ accountPwd, setaccountPwd }) => {
  return (
    <div className="AccountTypeInput">
      <input
        className="passwordInput"
        type="password"
        name="pwd"
        id="pwd"
        placeholder=""
        value={accountPwd}
        onChange={(e) => setaccountPwd(e.target.value)}
      />
      <label
        className={`${accountPwd.length ? "accountEmailLabel" : ""}`}
        htmlFor="pwd"
      >
        password
      </label>
      <span className="pwdForgotLink">Forgot?</span>
    </div>
  );
};

export default AccountPassWordInput;
