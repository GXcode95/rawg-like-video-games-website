import React from 'react'
import ListNav from 'components/ListNav'
const GameList = ({onNext, onPrevious, data}) => {
    const [results, setResults] = React.useState()

    React.useEffect(
      () => {
        if(data && data.results) {
          setResults(data.results)
        }
      },[data]
    )

  return (
    <div className='game-list'>
      <h1>gameList</h1>
      {results && console.log("RESTULTS =====> ", results)}
      <ListNav onPrevious={onPrevious} onNext={onNext}/>
    </div>
  )
}
    
export default GameList
