import React, { useState, useEffect } from "react";
import "./person.css";

const Person = ({ name, age, isActive, onClick }) => {
  return (
    <div className={`person ${isActive ? "active" : ""}`} onClick={onClick}>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  );
};

export default Person;
