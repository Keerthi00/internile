import React, { Component } from 'react';
import './auth.css';
import {authSubscriber, authService} from '../common';

export default class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', isLoggedIn: false};

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }




    login(event) {
       const {username, password} = this.state;
        // console.log('login');
        console.log(username + '  --->  ' + password);

        if (username == 'ProjectNile' && password == 'NilePwd2020') {
            this.setState({isLoggedIn:true});
            authService.setAuth(true);
            sessionStorage.setItem('loginInfo', true);
        } else {
            alert('Please validate your login details');
        }
    }

    handleChange(e) {
       const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    componentDidMount() {
        
    }

	render() {
        const {username, password} = this.state;
		return (
			<div class="wrapper fadeInDown">
                <div id="formContent">
                    <div class="fadeIn first py-2">
                    <img src="https://growingsmilestx.com/wp-content/uploads/2019/04/206855.png" id="icon" alt="User Icon" />
                    </div>

                    {/* <form> */}
                        {/* <input type="text" id="username" class="fadeIn second" value="username"  name="username"  onChange={this.handleChange}/>
                        <input type="password" id="password"  name="password"  onChange={this.handleChange}/>
                        <input type="button" name="button" onClick={(e)=>this.login(e)} class="fadeIn fourth mt-5" value="Log In" /> */}

                        <input type="text" id="login" class="fadeIn second" value={username} name="username" placeholder="login" onChange={this.handleChange}/>
                        <input type="password" id="password" class="fadeIn third" value={password} name="password" placeholder="password" onChange={this.handleChange}/>
                        <input type="button" name="button" onClick={(e)=>this.login(e)} class="fadeIn fourth mt-5" value="Log In"/>
                    
                    {/* </form> */}

                </div>
                </div>

		)
	}
}