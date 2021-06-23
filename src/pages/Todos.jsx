import React, { Component } from 'react';

class Todos extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Todo App',
            todos: ['Makan', 'Minum'],
            todoInput: '',
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/') 
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                users: data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    handleOnChange = (event) => {
        this.setState({todoInput: event.target.value}) 
    }

    handleSubmit = () => {
        this.setState({
            todos: this.state.todos.concat(this.state.todoInput),
            todoInput: ''
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div>
                    <input onChange={(event)=> this.handleOnChange(event)} type="text" value={this.state.todoInput}/>
                    <button onClick={(event) => this.handleSubmit(event)}>Save</button>
                </div>
                <p>Isi todoInput {this.state.todoInput}</p>
                <ul>
                    {this.state.todos.map((todo, index) => {
                        return <li key={index}>{todo} - {index}</li>
                    })}
                </ul>
                <pre>
                    {JSON.stringify(this.state.users, null, 2)}
                    {JSON.stringify(this.state.users, null, 2)}
                </pre>
            </div>
        );
    }
}

export default Todos;
