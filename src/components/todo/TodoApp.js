import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';

class TodoApp extends Component{
    render(){
        return(
            <BrowserRouter>
                <Route path="/"exact render={()=>{
                    return <h1>Home</h1>
                }}/>
                 <Route path="/about" exact render={()=>{
                    return <h1>About</h1>
                }}/>
                <Route path="/login" exact component={LoginPage}/>
                
            </BrowserRouter>
        );
    }
}
export default TodoApp;