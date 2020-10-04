import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Dynamic from './components/DynamicComponent'
//import Item from './components/Item'
import Nav from './components/Nav'

export default class App extends Component {

    /*
        state = {
            items: [
                { id: "1", name: "ahmed", count: 3 },
                { id: "2", name: "sayed", count: 51 },
                { id: "3", name: "ali", count: 12 }
            ]
        }
    */
    /*
handelChange = (e) => {
this.setState({ name: e.target.value });
}
handelSubmit = (e) => {
e.preventDefult();
this.setState({ name: e.target.value })
console.log(this.state.name);
}
*/


    /**<div >
                        {this.state.name}
                        <Nav />
                        <Item items={this.state.items} />
    
                        <button onClick={this.handelClick}>add</button>
                        <button onClick={this.handelDelete}>delete</button>
                    </div >
                     */


    /*
        handelClick = (e) => {
            //  console.log("here", e.target.value);
            let items = this.state.items;
            items.push({ id: Math.floor(Math.random() * 100), name: 'salah', count: '12' })
            this.setState({ items: items })
        }
    
        handelDelete = (e) => {
            let items = [{ id: '0', name: 'kala', count: '12' }]
            this.setState({
                items: items
            })
        }
        componentDidMount() {
            console.log("componentDidMount");
        }
        componentDidUpdate(prevProps, prevState) {
            console.log("..... componentDidUpdate", prevProps, prevState);
    
        }
        */
    render() {
        console.log("render");
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Blog" component={Blog} />
                        <Route path="/:Dynamic" component={Dynamic} />
                    </Switch>

                </div >
            </BrowserRouter>
        );
    }
}