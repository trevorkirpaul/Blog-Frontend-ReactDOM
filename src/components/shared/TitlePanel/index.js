import React from 'react';
import './style.css';
const TitlePanel = ({ title, subtitle, message }) => {
  return (
    <div className="titlePanelContainer">
      <div className="TPCtop">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
      {message && (
        <div className="TPCbottom">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default TitlePanel;
