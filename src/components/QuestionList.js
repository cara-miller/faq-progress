import React from 'react';
import FAQTile from './FAQTile'

const QuestionList = props => {

  let faqComponents = props.data.map(element => {
    let handleClick = () => {
      props.setSelectedQuestion(element.id);
    }
    return(
      <FAQTile
        key = {element.id}
        id = {element.id}
        question = {element.question}
        answer = {element.answer}
        handleClick = {handleClick}

      />
    )}
  )

  return(
    <div>{faqComponents}</div>
  )
}

export default QuestionList;
