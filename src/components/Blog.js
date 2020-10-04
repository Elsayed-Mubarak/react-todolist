import React, { Component } from 'react';
import axios from 'axios';

export default class Blog extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        console.log(".....props..", this.props.match);
        axios.get("https://jsonplaceholder.typicode.com/comments").then(res => {
            console.log("componentDidMount......", res.data);
            this.setState({ users: res.data });
        });
    }

    render() {
        const { users } = this.state;
        const userList = users.map((obj, index) => <span key={index}>
            User Name is :{obj.name} , <br /> and Email is {obj.email} , <br />
        </span>)
        return (
            <div>
                <p>Blog system</p>
                <div className="content">
                    <div >{userList}</div>
                </div>
            </div>
        );
    }
}
