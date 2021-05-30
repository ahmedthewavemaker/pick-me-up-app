import React from 'react'
import signup from '../images/signup.png'
import signup2 from '../images/signup2.png'
import login0 from '../images/login0.png'
import login1 from '../images/login1.png'
import create from '../images/create.png'
import game from '../images/game.png'

import './credentials.css'


function credentials(){
    return (
        <div className='demo'>
            <h2> Demo Credentials</h2>
            <h3>In order to get started, begin by clicking the "Sign up" to create a username, password, name, and specify 
                your location.</h3>
            <img src={signup} alt='signup'/>   
            <img src={signup2} alt='signup'/>
            <h3>Once you have signed up for the app, you may click on the "Login" button for immediate access!</h3>
            <img src = {login0} alt='login'/>
            <h3>Let us demonstrate, use Username = ahmed22 and password = Password9! and then click "Submit"</h3>
            <img src = {login1} alt='login'/>
        
            <h3>From the login page, create a game by specifying the name of the game which people would
            recognize it by or a common theme, specify the max number of players you would like your game to contain,
            chose the location that the game will take place, and finally specify the date that you will play and then hit "Post"
            or if you would like to just view the current games without creating a new one, click "View Games Now!"</h3>

            <img src={create} alt='create'/>

            <h3>Finally, you are able to view the created games and decide which one you will join for the weekend!</h3>
            <img src = {game} alt='game'/>

           

        </div>
    )
}

export default credentials