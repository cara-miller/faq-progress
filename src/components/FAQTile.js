import React from 'react';

const FAQTile = props => {

let className;
  if(props.id===props.stateID){
    className="selected"
  } else {
    className="unselected"
  }

  return(
    <div>
      <i className="fa fa-plus" aria-hidden="true" onClick={props.handleClick}></i>
      <p> {props.question} </p>
      <p className={className}> {props.answer}</p>
    </div>

  )
}


export default FAQTile;
