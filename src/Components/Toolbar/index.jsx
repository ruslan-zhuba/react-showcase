import React from "react";
import "./style.css";

export default function Toolbar({onLogin, onCart, onMap, onMenu}) {
  return (
    <div className="toolbar">
      <button onClick={onMenu} className="hide-desktop">
        <i className="material-icons">menu</i>
      </button>
      <button onClick={onMap} className="only-tablet">
        <i className="material-icons">map</i>
        <span>City</span>
      </button>
      <span className="spacer"></span>
      <button onClick={onCart}>
        <i className="material-icons">shopping_basket</i>
        <span className="only-tablet">Корзина</span>
      </button>
      <button onClick={onLogin} href="/#">
        <i className="material-icons">person</i>
        <span className="only-tablet">Войти</span>
      </button>
    </div>
  );
}
