import React from 'react'
import { Link } from 'react-router-dom'
const GameCard = ({game, setPlatformId}) => {

  return (
    <div className='game-card'>
      <h3>
        <Link to={`/game/${game.id}`} >
          {game.name}
        </Link>
      </h3>
      <div className="info">
        <p>platforms</p>
        <ul>
          {game.parent_platforms && game.parent_platforms.map(parent => (
            <li key={parent.platform.id}>
              <Link to="/games/" onClick={()=> {setPlatformId(parent.platform.id)}}>
                {parent.platform.name}
              </Link>
              </li>
          ))}
        </ul>

        <p>genres</p>
        <ul>
          {game.genres.map(genre => (
            <li key={genre.id}>
              <Link to={`/genres/${genre.slug}`}>
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>

        <p>Rating</p>
        <p><strong>{game.rating} / 5</strong> ({game.ratings_count} votes)</p>
      </div>
    </div>
  )
}
    
export default GameCard
