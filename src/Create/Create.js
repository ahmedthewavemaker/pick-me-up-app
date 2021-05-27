import React, {useState} from 'react'
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
                <input type='text' name= 'name' id='name'/>
                <br/>
                <label className='build' htmlFor='maxplayers'> Max Players: </label>
                <input type='number' name= 'maxplayers' id='maxplayers'/>
                <br/>
                <label className='build' htmlFor='location'> Parks/Fields: </label>
                <input type='text' name= 'location' id='location'/>
                <br/>
                <label className='build' htmlFor='date'> Date of Play: </label>
                <input type='text' name= 'date' id='date'/>
                <br/>
                <button className= 'submit'> Post</button>


                
            </form>
        </div>
    )
}

export default Create;