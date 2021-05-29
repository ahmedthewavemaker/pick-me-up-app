import React, { useState, useEffect, useCallback } from 'react';
import './Games.css'
import config from '../config'
import moment from 'moment'


function Games() {
    const getGames = () => {
        return fetch(`${config.API_ENDPOINT}/games`)

            .then(res => res.json())
            .then(games => {
                setGames(games)


            })
            .catch(res => {
                console.log(res)
                setError(error)
            })
    }
    const [error, setError] = useState(null)
    const callback = useCallback(getGames, [error])
    
    const [games, setGames] = useState([])
    useEffect(() => {
       callback()
    }, [callback])

    //3 functions of the requests (GET and DELETE)


    const deleteGames = (id) => {
        fetch(`${config.API_ENDPOINT}/games/${id}`, {
            method: 'DELETE',

        })

            .then(games => {
                getGames()
            })


    }

    return (
        <div className='gameview' >
            {games.map(game => (<div className='gametime' key={`${game.id}`}>
                <h3 className='fonty' > Id#: {game.id}</h3><br/>
                <p className='fonty'> Game Name: {game.name}</p><br />
                <p className='fonty'> Max players: {game.maxplayers}</p><br />
                <p className='fonty'> Location: {game.location}</p><br />
                <p className='fonty'> {moment(`${game.date}`).format('lll')}</p>
                <button className='delBut' onClick={e => deleteGames(game.id)}> Delete </button>

            </div >))}





        </div>
    )
}

export default Games;