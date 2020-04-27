import React, { Component } from 'react'
// import { connect } from 'react-redux'

import sideImage from "./side-image.jpg";
import "./Login.scss";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.username && this.state.password) {
            alert(this.state.username);
        }
    }
    render() {
        return (
            <div className="container mt-3 bg-white">
                <div className="row border">
                    <div className="d-none d-md-block col-md-6 col-lg-8 border-right side-image-container">
                        <img src={sideImage} className="img-fluid" alt="Side"></img>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-4 pt-5 pb-5">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputUsername">Username / Email</label>
                                <input
                                    id="inputUsername"
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleUsernameChange}
                                    value={this.state.username}
                                    autoComplete="username"
                                />
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input 
                                id="inputPassword" 
                                type="password" 
                                className="form-control" 
                                onChange={this.handlePasswordChange} 
                                value={this.state.password}
                                autoComplete="current-password"
                                 />
                                <small className="form-text text-muted">Password is required.</small>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
/*
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
*/