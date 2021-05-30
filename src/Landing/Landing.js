import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.css'


function Landing() {
    return(
    <div className='decor'>
        
        <p>Ever go into the weekend and wish you knew who is playing where and if
             it would be a hassle to join a pick up game of soccer?<br />
            Ever go into a new city and want to squeeze a quick game of pick up soccer, 
            but you don't know anyone yet? </p>

        <h2 className= 'say'>Say no more!</h2>

        <h3>Presenting the Pick Me Up app, your personal side-kick/guide that ensures you 
            that you will be directed to a pick up game of soccer that makes your weekend!</h3>

        <button className='viewButton'><Link to='/Games'> View Games Now! </Link> </button>

        <div className= 'signup'>
        <h2 className = 'signup'>Sign up now or Login to create your own game!</h2>

        <button className= 'signupBtn'><Link to='/signup'> Sign up </Link>  </button>
        <button className= 'loginBtn'><Link to='/login'> Login </Link>  </button>
        <button className= 'loginBtn'><Link to='/demo'> Demo </Link>  </button>
        </div>

    </div>

    )
}

export default Landing;