import React, { Component } from "react";
import styles from "./App.module.css";

// Components
import TodoItem from "./TodoItem/TodoItem";
import InputItem from "./InputItem/InputItem";
import OperateItem from "./OperateItem/OperateItem";

export class App extends Component {
  state = {
    tasks: [],
    taskCount: 0,
  };

  taskHandler = (event) => {
    if (event.target.parentNode.childNodes[0].value !== "") {
      // console.log(event.target.parentNode.childNodes[0].value);
      let prevState = { ...this.state };
      prevState.tasks.push({
        id: prevState.taskCount + 1,
        content: event.target.parentNode.childNodes[0].value,
        isComplete: false,
      });
      prevState.taskCount++;
      this.setState({
        ...prevState,
      });
      event.target.parentNode.childNodes[0].value = "";
      console.log(this.state);
    }
  };

  operateItemHandler = (event) => {
    const id = event.target.parentNode.parentNode.id;
    const operation = event.target.id;
    // console.log(event.target.parentNode.parentNode.id);
    // console.log(event.target.id);
    let prevState = { ...this.state };
    if (operation === "done") {
      prevState.tasks[id].isComplete = true;
    }
    if (operation === "delete") {
      prevState.tasks.splice(id, 1);
    }
    this.setState({
      ...prevState,
    });
  };

  render() {
    const RenderTasks = this.state.tasks
      .map((task, index) => {
        return (
          <div className={styles.App__item} id={index} key={`task_${index}`}>
            <TodoItem
              taskContent={task.content}
              complete={this.state.tasks[index].isComplete}
            />
            <OperateItem
              id={index}
              taskComplete={(event) => {
                this.operateItemHandler(event);
              }}
              unique={task.id}
              complete={this.state.tasks[index].isComplete}
            />
          </div>
        );
      })
      .reverse();
    return (
      <div className={styles.App}>
        <h1 className={styles.App__title}>Daily Task Planner</h1>
        <InputItem click={(event) => this.taskHandler(event)} />
        {RenderTasks}
      </div>
    );
  }
}

export default App;
