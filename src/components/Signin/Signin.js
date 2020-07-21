import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) =>{
		this.setState({
			signInEmail: event.target.value
		})
	} 
	
	onPasswordChange = (event) =>{
		this.setState({
			signInPassword: event.target.value
		})
	} 

  onSubmitSignIn = () => {
    fetch('https://infinite-wildwood-75401.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }
 
	render(){
		return(
		<article className="br3 ba b--white-60 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
			<main className="pa4 white-80">
			  <div className="measure">
			    
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Sign In</legend>

			      <div className="lh-copy mt3">
			      <p href="#0" className="f5 white mb4 db">Signing In will give you the access to your Rank</p>
			   </div>

			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
			        className="pa2 input-reset ba bg-transparent hover-bg-navy white w-100" 
			        type="email" 
			        name="email-address"  
			        id="email-address"
			        onChange={this.onEmailChange}
			        />
			      </div>
			      
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			        className="b pa2 input-reset ba bg-transparent hover-bg-navy white w-100" 
			        type="password" 
			        name="password"  
			        id="password"
			        onChange={this.onPasswordChange}
			        />
			      </div>
			      
			    </fieldset>
			    
			    <div className="">
			      <input 
			      onClick={this.onSubmitSignIn}
			      className="b ph3 pv2 input-reset white ba b--white bg-transparent grow pointer f6 dib" 
			      type="submit" 
			      value="Sign in"
			      />
			    </div>
			    
			    <div className="lh-copy mt3">
			      <p onClick={() => this.props.onRouteChange('register')} className="f4 link grow white ma4 pointer db">Register</p>
			   </div>

			   <div className="">
			      <input 
			      onClick={() => this.props.onRouteChange('home')}
			      className="b ph3 pv2 input-reset white ba b--white bg-transparent grow pointer f6 dib" 
			      type="submit" 
			      value="Sign as Guest"
			      />
			    </div>
			  
			  </div>
			</main>
		</article>
	);
	}
	
}

export default Signin;