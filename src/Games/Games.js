import React, {useState, useEffect} from 'react';
import './Games.css'
import config from '../config'


function Games(props){

    const [error, setError] = useState(null)
        const [games, setGames] = useState([])
        useEffect( ()=> {
            getGames()
        }, [])

     //3 functions of the requests (GET and DELETE)
        const getGames =()=> {
            return fetch(`${config.API_ENDPOINT}/games`)

            .then(res => res.json())
            .then(games => {
                    setGames(games)

              
            })
            .catch(res => {
                console.log(res)
                setError(error )
              })
        }

const deleteGames =(id)=> {
        fetch(`${config.API_ENDPOINT}/games/${id}`, {
            method: 'DELETE',

        })
           
            .then( games=> {
                getGames()
            })


    }

    return(
        <div className='gameview' >
            {games.map(game => (<div className= 'gametime' key={game}>
                <h3 > {game.id}</h3>
                <p> {game.name}</p><br/>
                <p> {game.maxplayers}</p><br/>
                <p> {game.location}</p><br/>
                <p> {game.date}</p><br/>
                <button onClick={e=> deleteGames(game.id)}> Delete </button>
                 
            </div >) )}
            
            
           
            

        </div>
    )
}

export default Games;