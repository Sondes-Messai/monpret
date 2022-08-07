import "./radiocard.component.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RadioCards = ({ radiocards, formData, handleInputData, property }) => {

  const cards = radiocards;
  const cardProperty = property;
  
  return (
    <div className="d-flex app-form-radio">
      {cards.map((d) => {
        // Return the element. Also pass key
        return (
          <label key={d.key} className={'p-2 m-1 flex-fill ' + (formData[cardProperty] === d.value ? "active" : "")}>
            <input
              type="radio"
              name={cardProperty}
              className="app-form-radio-input"
              value={d.value}
              checked={formData[cardProperty] === d.value}
              onChange={handleInputData(cardProperty)}
            />
            {d.label}
          </label>
        );
      })}
    </div>
  );
};

export default RadioCards;
