import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'

function Signup() {
    return (
        <div className='sign'>
            <form className='forma'>
                <label for='username'> Username: </label>
                <input placeholder='email@site.com' type='text' name='username' id='username' />
                <br/>
                <label for='password'> Password: </label>
                <input placeholder='password' type='text' name='password' id='password' />
                <br/>
                <label for='name'> Name: </label>
                <input placeholder='name' type='text' name='name' id='name' />
                <br/>
                <label for='location'> Location: </label>
                <input placeholder='city, state' type='text' name='location' id='location' />
                <br/>
                <button className='button'><Link to='/create'>  Submit  </Link></button>
            </form>
        </div>


    )
}

export default Signup;