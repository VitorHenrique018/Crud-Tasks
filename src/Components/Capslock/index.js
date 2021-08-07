import React from "react";

export default function Capslock(props) {
  const texto = props.children;
  const textoMaior = texto.toUpperCase();

  return <div>{textoMaior}</div>;
}
