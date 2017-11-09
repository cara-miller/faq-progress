import React from 'react';
import QuestionList from './QuestionList'

// STOP FORGETTING TO USE THIS IN COMPONENT
class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      cachedID: null
    }
    this.setSelectedQuestion=this.setSelectedQuestion.bind(this)
  }

  setSelectedQuestion(componentID) {
    if (componentID === this.state.cachedID) {
      this.setState({cachedID: null})
    } else {
      this.setState({cachedID: componentID})
    }
  }


  render() {
    return(
      <div>
        <h1>We're here to help</h1>
        <QuestionList
          data={this.props.data}
          setSelectedQuestion={this.setSelectedQuestion}
          stateID={this.state.cachedID}
        />
      </div>
    )
  }
}

export default App;
