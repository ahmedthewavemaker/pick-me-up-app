import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Create.css'
import GameApiService from '../services/games-service'

function Create(props){

    const [error, setError] = useState(null)

    const handleSubmit=(ev)=>{
       ev.preventDefault()
       setError(null)
       const {name, maxplayers, location, date} = ev.target;

       GameApiService.postGame({
           name: name.value,
           maxplayers: maxplayers.value,
           location: location.value,
           date: date.value
        })

        .then(game => {
             name.value =''
             maxplayers.value=''
             location.value=''
            date.value=''
            props.history.push('/games')

        })

        .catch(res => {
            console.log(res)
            setError( res.error )
          })
    }

    return(
        <div className= 'create'>
            <form onSubmit={handleSubmit} className='build'>
                {error}
                <label className='build' htmlFor='name'> Game name: </label>
                <input type='text' name= 'name' id='name' placeholder='Madristas'/>
                <br/>
                <label className='build' htmlFor='maxplayers'> MaxPlayers: </label>
                <input type='number' name= 'maxplayers' id='maxplayers' placeholder='15'/>
                <br/>
                <label className='build' htmlFor='location'> Park/Fields: </label>
                <input type='text' name= 'location' id='location' placeholder='Bryant Park field 3'/>
                <br/>
                <label className='build' htmlFor='date'> Date of Play: </label>
                <input type='text' name= 'date' id='date' placeholder='June 3, 2021'/>
                <br/>
                <button className= 'submit'> Post</button>
                <button className= 'submit'><Link to='/games'> View Games Now! </Link>  </button>


                
            </form>
        </div>
    )
}

export default Create;