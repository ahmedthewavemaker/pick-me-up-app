import React,{useState} from 'react'
import AuthApiService from '../services/auth-service'
import './Login.css'

function Login(props) {

    const [error, setError] = useState(null)

   const handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        setError(null)
        const { user_name, password } = ev.target
    
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
          .then(res => {
            user_name.value = ''
            password.value = ''
            props.history.push('/create')
          })
          .catch(res => {
            console.log(res)
            setError( res.error )
          })
      }

    return (
        <div className='sign'>
          {error}
            <form onSubmit={handleSubmitJwtAuth} className='forma'>
                <label htmlFor='user_name'> Username: </label>
                <input placeholder='funUsername' type='text' name='user_name' id='user_name' />
                <br/>
                <label htmlFor='password'> Password: </label>
                <input placeholder='password' type='text' name='password' id='password' />
                <br/>
                <button className='button'> Submit </button>
                </form>
        </div>


    )
}

export default Login;