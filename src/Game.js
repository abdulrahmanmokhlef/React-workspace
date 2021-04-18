import React, { Component } from 'react'
import Score from './Score'
class Game extends Component{
    
  constructor(props) {
    debugger
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state ={
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3], 
      numQuestions : 0,
      numCorrect : 0,
    }
    debugger
  }
  
  //I get this code from possibleSolution to enchance my code only
  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };

  updateStateIfTrue = arrayOfValues =>{
    this.setState((currentState)=>({
      value1 : arrayOfValues[0],
      value2 : arrayOfValues[1],
      value3 : arrayOfValues[2],
      proposedAnswer : arrayOfValues[3], 
      numCorrect: currentState.numCorrect + 1,
      numQuestions: currentState.numQuestions + 1
    }));
  }
  updateStateIfFalse = arrayOfValues =>{
    this.setState((currentState)=>({
      value1 : arrayOfValues[0],
      value2 : arrayOfValues[1],
      value3 : arrayOfValues[2],
      proposedAnswer : arrayOfValues[3], 
      numQuestions: currentState.numQuestions + 1
    }));
  }
  debugger
  checkAnswer(answer){
    debugger
    const newValuesArray = this.makeNewQuestion();
    const { value1, value2, value3, proposedAnswer } = this.state;
	let isCorrectAnswer = false; 

    if(proposedAnswer === (value1 + value2 + value3)){
      isCorrectAnswer = true
    }

	if(answer === isCorrectAnswer){
      this.updateStateIfTrue(newValuesArray);
	}else{
      this.updateStateIfFalse(newValuesArray);
    }
  }	
  
	render(){
      debugger
  		return(
        	<div className="game">
              <h2>Mental Math</h2>
                <div className="equation">
               	<p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = 	${this.state.proposedAnswer}`}				</p>
    		  </div>
              <button onClick={() =>{this.checkAnswer(true)}}>True</button>
              <button onClick={() =>{this.checkAnswer(false)}}>False</button>
              <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
            </div>
        )
	} 
}
export default Game