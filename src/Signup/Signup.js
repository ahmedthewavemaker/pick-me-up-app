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
                <label> Password: </label>
                <input placeholder='password' type='text' name='password' id='password' />
                <br/>
                <button className='button'><Link to='/create'>  Submit  </Link></button>
            </form>
        </div>


    )
}

export default Signup;