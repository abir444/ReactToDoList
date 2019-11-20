import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userInput: "",
      list: [],
    }
  }
time(d){
  this.setState({
    date : d,
  })
}
  changeUserInput(i){
    this.setState({
      userInput: i,
    });
  }
  adToDoList(i){
    let listArray = this.state.list;
    var d ='Created At :'+ new Date().toLocaleString();
    listArray.unshift({
      str : i,
      dt : d,
      isComplete : false,
    });   
    this.setState({
      list : listArray,
      userInput: "",
    })
  }
 completedTask = (i) => {
    let listArray = this.state.list;
    listArray[i].isComplete = !listArray[i].isComplete;
    this.setState([listArray]);
    }

  removeTodo(key){
    var list = this.state.list;
    list.splice(key,1)
    this.setState(list)
  }
  render() {
    return (
  <div className ="to-do-list-main">
        <p id='header'>ToDo</p>
        <input 
        onChange={(e)=> this.changeUserInput(e.target.value)}
        value={this.state.userInput}
         type ="text"
         />
        <button id='add' onClick={(e)=>this.adToDoList(this.state.userInput)}>Add</button>

      <div>
          {this.state.list.map((val,i)=>
                               
         <div id='list'>
                
          <div id='strike' style={{textDecoration:val.isComplete ? 'line-through' : 'none'}} onClick = {()=>{this.completedTask(i)}}>
         {val.str}
          </div>
         <div id = 'date'>
         {val.dt}   
         </div>
          <button id='delete' onClick={() => this.removeTodo(i)}>Delete</button> 
         </div>
          )} 
          
      </div>
   </div>
    );
  }
}

export default App;



