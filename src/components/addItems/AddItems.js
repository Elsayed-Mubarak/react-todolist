import React, { Component } from 'react';
import './AddItems.css';

export default class AddItems extends Component {

    state = { name: '', age: '' };

    hanndelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    mySubmitHandler = (e) => {
        e.preventDefault();
        if (e.target.name.value === '') {
            return false;
        } else {
            this.props.addItem(this.state);
            this.setState({
                name: '',
                age: ''
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.mySubmitHandler}>
                    <input type="text" placeholder="enter name..." id="name" onChange={this.hanndelChange} value={this.state.name} />
                    <input type="number" placeholder="enter age..." id="age" onChange={this.hanndelChange} value={this.state.age} />
                    <input type='submit' />
                </form>
            </div>
        );
    }
}
