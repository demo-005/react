import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Login extends Component {
    render() {
        return (
            <div>
                <Link to="/register/12">跳转register</Link>
            </div>
        );
    }
}

export default Login;