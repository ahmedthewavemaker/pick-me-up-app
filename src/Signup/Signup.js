import React, {useState} from 'react'
import AuthApiService from '../services/auth-service'
import './Signup.css'




function Signup(props) {

    const [error, setError] = useState(null)

    const handleSubmit = ev => {
        ev.preventDefault()
        const {  user_name, password, full_name, location  } = ev.target
    
        setError(null)
        AuthApiService.postUser({
          user_name: user_name.value,
          password: password.value,
          full_name: full_name.value,
         location: location.value,
        })
          .then(user => {
            user_name.value = ''
            password.value = ''
            full_name.value = ''
            location.value = ''
            props.history.push('/games')
            
          })
          .catch(res => {
              console.log(res) 
           setError(res)
          })
      }

    return (
        <div className='sign'>
            <form onSubmit={handleSubmit} className='forma'>
                {error}
                <label htmlFor='user_name'> Username: </label>
                <input placeholder='email@site.com' type='text' name='user_name' id='user_name' />
                <br/>
                <label htmlFor='password'> Password: </label>
                <input placeholder='password' type='text' name='password' id='password' />
                <br/>
                <label htmlFor='full_name'> Nickame: </label>
                <input placeholder='name' type='text' name='full_name' id='full_name' />
                <br/>
                <label htmlFor='location'> Location: </label>
                <input placeholder='city, state' type='text' name='location' id='location' />
                <br/>
                <button className='button'>  Submit </button>
            </form>
        </div>


    )
}

export default Signup;