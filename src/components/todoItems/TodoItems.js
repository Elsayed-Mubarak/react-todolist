import React, { Component } from 'react';
import './TodoItems.css'

const TodoItems = (props) => {
    const { items, deleteItemsFromList } = props;

    let length = items.length;
    const listItems = length ? (
        items.map((obj, index) => {
            return (
                <div key={index}>
                    <span className="name">{obj.name}</span>
                    <span className="age">{obj.age}</span>
                    <span className="action icon" onClick={() => deleteItemsFromList(obj.id)}> &times;</span>
                </div>
            )
        })
    ) : (
            <div>
                <p>There is no message to shown</p>
            </div>
        );

    return (
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {listItems}
        </div>
    );

}
export default TodoItems; 