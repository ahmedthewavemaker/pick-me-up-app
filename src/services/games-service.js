import config from '../config'
import TokenService from './token-service'

const GameApiService = {
    postGame(game) {
      return fetch(`${config.API_ENDPOINT}/games`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify(game),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}
  export default GameApiService