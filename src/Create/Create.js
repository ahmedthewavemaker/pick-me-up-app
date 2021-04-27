import React from 'react'
import {Link} from 'react-router-dom'
import './Create.css'

function Create(){
    return(
        <div className= 'create'>
            <form className='build'>
                <label classname='build' for='game'> Game name: </label>
                <input type='text' name= 'game' id='game'/>
                <br/>
                <label classname='build' for='maxplayers'> Max Players: </label>
                <input type='number' name= 'maxplayers' id='maxplayers'/>
                <br/>
                <label classname='build' for='location'> Parks/Fields: </label>
                <input type='text' name= 'location' id='location'/>
                <br/>
                <label classname='build' for='date'> Date of Play: </label>
                <input type='text' name= 'date' id='date'/>
                <br/>
                <button className= 'submit'><Link to='/games'> Post </Link></button>


                
            </form>
        </div>
    )
}

export default Create;