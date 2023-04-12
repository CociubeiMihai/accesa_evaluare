import React from 'react';
import './QuestComponent.css';

function QuestComponent(props) {
    function handleClick(event) {
      if (props.onClick) {
        props.onClick(event);
      }
    }
  
    return (
      <div className="my-component" onClick={handleClick}>
        <h2 className="my-component-title">{props.title}</h2>
        <div className="my-component-prize">Prize: {props.prize}</div>
        <div className="my-component-description">{props.description}</div>
        <div className="my-component-author">By {props.author}</div>
        <div
          className={`my-component-status ${props.isAvailable ? 'available' : 'unavailable'}`}
        />
      </div>
    );
  }
  

export default QuestComponent;
