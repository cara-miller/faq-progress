import React from 'react';
import QuestionList from './QuestionList'

// STOP FORGETTING TO USE THIS IN COMPONENT
class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      id: null
    }
    this.setSelectedQuestion=this.setSelectedQuestion.bind(this)
  }

  setSelectedQuestion(id) {
    this.setState({
      id: id
    })
  }


  render() {
    return(
      <div>
        <h1>We're here to help</h1>
        <QuestionList
          data={this.props.data}
          setSelectedQuestion={this.setSelectedQuestion}
        />
      </div>
    )
  }
}

export default App;
