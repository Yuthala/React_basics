//создание компонента через класс (устаревший подход)

import React from 'react';

//наследование от React Component
class ClassCounter extends React.Component {

	//создаем состояние с помощью конструктора. В классах использовать хуки нельзя.
	constructor(props) {
		super(props);
		this.state = { //состояние
			count: 0
		}
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		//вызываем функцию setState и передаем состояние с измененными значениями
		this.setState({count: this.state.count +1 })
	}
	
	decrement() {
		this.setState({count: this.state.count +1 })
	}
	
//функция render возвращает jsx
	render() {
		return (
		<div>
			<h1>{this.state.count}</h1>
			<button onClick={this.increment}>Increment</button>
			<button onClick={this.decrement}>Decrement</button>
		</div>
		)
	}
}

export default ClassCounter;