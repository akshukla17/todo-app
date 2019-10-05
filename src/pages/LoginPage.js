import React , {Component} from 'react';

class Login extends Component{
    state={
        username:'',
        password:''
    }
    render(){
        return(<h1>Login Form</h1>);
    }
}

export default Login;