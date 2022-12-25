import React from "react"

class TodoItem extends React.Component {

    render() {
        return (
            <li>
                <input type="checkbox" id={this.props.todo.id}
                checked={this.props.todo.completed} 
                onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                /> 
                {this.props.todo.title}

                <button 
                onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>        Delete             </button>
            </li>)
        
        // <li>{this.props.todo.title}</li>
    }
}

export default TodoItem