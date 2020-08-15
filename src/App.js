import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";
import LoginButton from "./LoginButton/LoginButton";
import AccountType from "./AccountType/AccountType";
import AccountEmailInput from "./AccountEmailInput/AccountEmailInput";
import AccountPassWordInput from "./AccountPassWordInput/AccountPassWordInput";

const App = () => {
  const [data, setData] = useState([]);
  const [accountName, setAccountName] = useState("User");
  const [accountEmail, setaccountEmail] = useState("");
  const [accountPwd, setaccountPwd] = useState("");
  const [accountTypeBorderState, setAccountTypeBorderState] = useState();
  const [accountKey, setAccountKey] = useState();
  const ChooseAccountTypeFunc = (name, index) => {
    data.filter((el) =>
      name === el.name ? setAccountName(el.name) : "ErrorAccountType"
    );
    data.forEach((el, key) =>
      key === index ? (setAccountTypeBorderState(true), setAccountKey(key)) : ""
    );
  };
  useEffect(() => {
    const FetchData = async () => {
      const result = await axios("../Test/AccountType.JSON");
      setData(result.data);
    };
    FetchData();
  }, []);

  return (
    <div className="App">
      <h3>Choose Account Type</h3>
      <div className="AccountContainer">
        {data.map((item, index) => (
          <AccountType
            data={data}
            key={index}
            item={item}
            index={index}
            accountKey={accountKey}
            ChooseAccountTypeFunc={ChooseAccountTypeFunc}
            accountTypeBorderState={accountTypeBorderState}
          />
        ))}
      </div>
      <div className="AccountTypeDepiction">
        <div>
          Hello <span className="AccountTypeDepictionName">{accountName}</span>{" "}
          !
        </div>
        <div>Please fill out the form below to get started.</div>
      </div>
      <div className="AccountTypeInputContainer">
          <AccountEmailInput
            accountEmail={accountEmail}
            setaccountEmail={setaccountEmail}
          />
          <AccountPassWordInput
            accountPwd={accountPwd}
            setaccountPwd={setaccountPwd}
          />
        <LoginButton accountEmail={accountEmail} accountPwd={accountPwd} />
        <div className="AccountTypeSingUP">
          No account ? <span>Sing Up</span>
        </div>
      </div>
      <div className="AccountTypeFooterImg">
        <img src="../Test/img_town_370x170@3x.svg" alt="Town"></img>
      </div>
    </div>
  );
};

export default App;
