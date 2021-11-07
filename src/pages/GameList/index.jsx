import React from 'react'
import ListNav from 'components/ListNav'
import GameCard from 'components/GameCard'
const GameList = ({onNext, onPrevious, data, setPlatformId}) => {
    const [games, setGames] = React.useState()

    React.useEffect(
      () => {
        if(data && data.results) {
          setGames(data.results)
        }
      },[data]
    )



  return (
    <div className='game-list'>
      <h1>gameList</h1>
      {games && games.map(game => (
        <GameCard game={game} key={game.id} setPlatformId={setPlatformId} />
      ))}
      {games && console.log("RESTULTS =====> ", games)}
      <ListNav onPrevious={onPrevious} onNext={onNext}/>
    </div>
  )
}
    
export default GameList
