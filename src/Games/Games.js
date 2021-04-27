import React from 'react';
import './Games.css'

function Games(){
    return(
        <div className='gameview'>
            <div className= 'gametime'>
                <h3> Game 1</h3>
                <p> Game name: UofR</p><br/>
                <p> Max number: 20</p><br/>
                <p> Location: Byrd Park field 3</p><br/>
                <p> Date: 4:00 PM 4/30/2021</p><br/>
                
            </div >
            <div  className= 'gametime'>
            <h3> Game 2</h3>
                <p> Game name: Red vs Blue</p><br/>
                <p> Max number: 12</p><br/>
                <p> Location: Greenwood field 1</p><br/>
                <p> Date: 6:00 PM 5/1/2021</p><br/>

            </div>
            <div  className= 'gametime'>
            <h3> Game 3</h3>
                <p> Game name: International</p><br/>
                <p> Max number: 22</p><br/>
                <p> Location: Byrd Park field 2</p><br/>
                <p> Date: 5:30 PM 4/30/2021</p><br/>
            </div>

        </div>
    )
}

export default Games;