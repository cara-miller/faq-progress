import React from 'react';

const FAQTile = props => {

  return(
    <div>
      <i className="fa fa-plus" aria-hidden="true" onClick={props.handleClick}></i>
      <p> {props.question} </p>
      <p> {props.answer}</p>
    </div>

  )
}


export default FAQTile;
