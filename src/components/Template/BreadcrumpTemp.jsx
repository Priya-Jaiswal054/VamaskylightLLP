import React from "react";
import "../../style/page2/breadcrump.css";
import { Link } from "react-router-dom";
import generateLink from "./GenerateLink";

export default function BreadcrumpTemp({ bprops }) {
  function giveBreadNav(name, i, arr) {
    if (i < arr.length - 1) {
      return (
        <>
          <Link to={`/${generateLink(name)}`}>{name} </Link>
          <i class="fa-solid fa-angle-right"></i>
        </>
      );
    } else {
      return (
        <Link to={`/${generateLink(name)}`} className="active-bread">
          {name}
        </Link>
      );
    }
  }
  return (
    <div className="breadcrump">
      <div className="bread-inner">
        <div className="horizontal-line"></div>
        <h1>{bprops.title}</h1>
        <p>{bprops.text}</p>
        <div className="bread-nav">
          {bprops.arr.map((strName, index, array) =>
            giveBreadNav(strName, index, array)
          )}
        </div>
      </div>
    </div>
  );
}
