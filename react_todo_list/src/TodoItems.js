import React from 'react';

class TodoItems extends React.Component {
    createTasks = item => {
        return (
            <li key={item.key}>
                <label text={item.text}>
                    <input type="checkbox"
                        onClick={() => this.props.deleteItem(item.key)} />
                </label>
                {item.text}
            </li>
        )
    }

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        return <ul className="theList">{listItems}</ul>
    }
}

export default TodoItems;
