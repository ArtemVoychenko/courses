import React from "react";
import Task from "./components/taskList/TaskList";
import TaskInput from "./components/taskList/TaskInput"

class App extends React.Component{
	constructor(){
		super();

		this.state = {
			tasks:[
				{ title: 'Прочитать', id: 0, done: false },
				{ title: 'Запомнить', id: 1, done: true },
				{ title: 'Зазубрить', id: 2, done: false },
			]
		};
	};

	addTask = task => {
		this.setState(state => {
			let { tasks } = state;
			tasks.push({
				id: tasks.lenght !== 0 ? tasks.lenght : 0,
				title: task,
				done: false
			});
			return tasks;
		});
	};

	doneTask = (id) => {
		const index = this.state.tasks.map(task => task.id).indexOf(id);
		this.setState(state => {
			let { tasks } = state;
			tasks[index].done = true;
			return tasks;
		});
	};

	deleteTask = (id) => {
		const index = this.state.tasks.map(task => task.id).indexOf(id);
		this.setState(state => {
			let { tasks } = state;
			delete tasks[index];
			return tasks;
		});
	};

	render() {
		const { tasks } = this.state;
		const activeTasks = tasks.filter(task => !task.done);
		const doneTasks = tasks.filter(task => task.done);

		return(
			<div className="App">
				<h1 className="top">Active.task:{activeTasks.lenght}</h1>
				{[...activeTasks, ...doneTasks].map(task => (
					<Task 
					doneTask={() => this.doneTask(task.id)}
					deleteTask={() => this.deleteTask(task.id)}
					 task={task} 
					 key={task.id}>
					 </Task>
				))}
				<TaskInput addTask={this.addTask}></TaskInput>
			</div>
		)
	}
}

export default App;
