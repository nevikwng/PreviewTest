import React from "react";
import './AccountEmailInput.scss'
const AccountEmailInput = ({accountEmail,setaccountEmail}) => {
  return (
    <div className="AccountTypeInput">
      <input
        type="text"
        name="Email"
        id="Email"
        placeholder=""
        className="accountEmailInput"
        value={accountEmail}
        onChange={(e) => setaccountEmail(e.target.value)}
      />
      <label
        className={`${accountEmail.length ? "accountEmailLabel" : ""}`}
        htmlFor="Email"
      >
        Email
      </label>
    </div>
  );
};

export default AccountEmailInput;
