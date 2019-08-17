import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      val: '',
      list : [],
      doneList : []
    };
    this.updateVal = this.updateVal.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  updateVal(e){
    this.setState({
      val : e.target.value
    })
  }

  addTask(){
    if(this.state.val !== null){
      this.setState({
        list : [...this.state.list,this.state.val],
        val : ''
      })
    }
  }

  removeTask(e){
    const updatedList = this.state.list.filter(item => item !== e.target.id);
    const newItem = this.state.list.find(item => item === e.target.id);
    this.setState({
      list : updatedList,
      doneList : [...this.state.doneList,newItem]
    })
  }

  render() {
    let styles = {
      backgroundColor : 'red'
    }
    return (
      <div>
        <Hello name={this.state.name} />
        <div>
          <input onBlur={this.addTask} value={this.state.val} placeholder="task" onChange={this.updateVal}/>
        </div>
        <div>
          <ul> Active Task List 
          {this.state.list.map(item => 
            <li onClick={this.removeTask} key={item} id={item}>{item}</li>
          )}
          </ul>
          <ul> Completed Task List 
          {this.state.doneList.map(item => 
            <li style={styles} key={item} id={item}>{item}</li>
          )}
          </ul>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
