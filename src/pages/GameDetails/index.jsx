import React from 'react'
import { Link } from 'react-router-dom'
const GameDetails = ({game}) => {

  return (
    <div className='game-details'>
      <h1>Game Details</h1>   
      <img src={game.background_image} alt={`${game.name} screenshot`} height="150"/>
      <h3>Description</h3>
      <div dangerouslySetInnerHTML={{__html:game.description}} />

      <p><strong>Release Date: </strong>{game.released}</p>

      <p><strong>Developers</strong></p>
      <ul>
      {game.developers && game.developers.map(developer => (
        <li key={developer.id}>
          <Link to={`/developers/${developer.slug}`}>
            {developer.name}
          </Link>
        </li>
      ))}
      </ul>

      <p><strong>Publishers</strong></p>
      <ul>
      {game.publishers && game.publishers.map(publisher => (
        <li key={publisher.id}>
          <Link to={`/publishers/${publisher.slug}`}>
            {publisher.name}
          </Link>
        </li>
      ))}
      </ul>
      
      <p><strong>Genres</strong></p>
      <ul>
      {game.genres && game.genres.map(genre => (
        <li key={genre.id}>
          <Link to={`/genres/${genre.slug}`}>
            {genre.name}
          </Link>
        </li>
      ))}
      </ul>

      <p><strong>Tags</strong></p>
      <ul>
      {game.tags && game.tags.map(tag => (
        <li key={tag.id}>
          <Link to={`/tags/${tag.slug}`}>
            {tag.name}
          </Link>
        </li>
      ))}
      </ul>

      <p><strong>Stores</strong></p>
      <ul>
      {game.stores && game.stores.map(store => (
        <li key={store.store.id}>
          <a target="_blank" href={`https://${store.store.domain}`} rel="noreferrer" >
            {store.store.name}
          </a>
        </li>
      ))}
      </ul>
    </div>
  )
}
    
export default GameDetails
