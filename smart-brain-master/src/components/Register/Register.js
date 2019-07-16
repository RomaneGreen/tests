import React from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
    this.validator = new SimpleReactValidator();
  }

  onNameChange = (event) => {

    
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  // saveAuthTokenInSessions = (token) => {
  //   window.sessionStorage.setItem('token', token)

  // }

  onSubmitSignIn = () => {

    if (this.validator.allValid()) {
      alert('You submitted the form and stuff!');
    
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
          .then(resp => resp.json())
         .then(user => {
        if (user ) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      }).catch(console.log())
    
    }else {
        this.validator.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        this.forceUpdate();
      }

  }
    
  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="please enter valid name"
                  required
                  onChange={this.onNameChange}
                  />
                  {this.validator.message('name', this.state.name, 'required|alpha')}
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="please enter valid email"
                  validators={['required', 'isEmail']}
                  required
                  onChange={this.onEmailChange}
                  />
                  {this.validator.message('email', this.state.email, 'required|email')}

              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="minimum 6 characters"
                  required
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
      
    );
  }
}

export default Register;