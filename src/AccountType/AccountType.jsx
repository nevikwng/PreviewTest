import React from "react";
import "./AccountType.scss";
const AccountType = ({
  item,
  index,
  ChooseAccountTypeFunc,
  accountTypeBorderState,
  accountKey
}) => {
  return (
    <div
      className="AccountImgBorder"
      onClick={() => ChooseAccountTypeFunc(item.name, index)}
      key={index}
    >
      <figure
        className={`AccountImgfigure
         ${
           accountTypeBorderState && index === accountKey
             ? "AccountImgfigureClick"
             : ""
         } `}
      >
        <img
          className="AccountTypeImg"
          src={`../Test/${item.src}`}
          alt={item.name}
        ></img>
        <figcaption>{item.name}</figcaption>
        <div
          style={{
            display: `${
              accountTypeBorderState && index === accountKey ? "block" : "none"
            }`
          }}
          className="AccountTypeCheckCircle"
        >
          <img src="../Test/check_circle-white-48dp.svg" alt=""></img>
        </div>
      </figure>
    </div>
  );
};
export default AccountType;
