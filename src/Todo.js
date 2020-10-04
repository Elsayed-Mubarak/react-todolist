import React, { Component } from 'react';
//import { BrowserRouter } from 'react-router-dom'
import TodoItems from './components/todoItems/TodoItems'
import AddItems from './components/addItems/AddItems'

export default class Todo extends Component {

    state = {
        items: [
            { id: '1', name: 'ali', age: 55 },
            { id: '2', name: 'ali', age: 55 },
            { id: '3', name: 'ali', age: 55 }

        ]
    }
    // attention there is arrow function
    /*    deleteItem = (id) => {
            let items = this.state.items;
            let i = items.findIndex(itm => itm.id === id);
            items.splice(i, 1);
            this.setState({ items: items })
        }
    */
    deleteItem = (id) => {
        const itemsAfterDeleteElement = this.state.items.filter(item => {
            return item.id !== id
        }); // if returned element is true push it on new arry of the filter
        this.setState({ items: itemsAfterDeleteElement });
    }
    addItem = (item) => {
        let itmesInState = this.state.items;
        itmesInState.push({ id: Math.random(), ...item });
        this.setState({ items: itmesInState })
    }


    render() {
        console.log("render");
        return (
            <div className="App container">
                <h1 className="text-center">Todo List</h1>
                <TodoItems items={this.state.items} deleteItemsFromList={this.deleteItem} />
                <AddItems addItem={this.addItem} />

            </div >
        );
    }
}