import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import "./App.css";

export default function App() {
  return (
    <div className="grand-parent">
      <div className="parent">
        :::
        <Datetime />
      </div>
    </div>
  );
}
